package com.qa.mywebgl

import android.app.Application
import android.util.Log
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import org.json.JSONObject
import java.io.File
import java.time.OffsetDateTime

/** Logcat tag for every app log (test events and WebView console); `adb logcat -s SWQG.myWebglApp`. */
const val LOG_TAG = "SWQG.myWebglApp"

/** One demo being shown. [seq] is unique per run so the screen restarts even for a repeated demo. */
data class Run(
    val seq: Int,
    val demo: Demo,
    val settings: TestSettings,
    val params: String,
    val position: Int,
    val total: Int,
    val loop: Int,
) {
    val url: String
        get() {
            val query = listOf(settings.toQuery(), params).filter { it.isNotEmpty() }.joinToString("&")
            return "https://appassets.androidplatform.net/assets/demos/${demo.asset}" + if (query.isEmpty()) "" else "?$query"
        }
}

/**
 * Owns the persisted settings and the running test session: a list of demos shown one after
 * another, each for `durationSec`, repeated `loops` times. Results go to logcat and to
 * `results.jsonl` in the app's external files directory.
 */
class TestController(app: Application) : AndroidViewModel(app) {
    private val store = SettingsStore(app)
    private val resultsFile = File(app.getExternalFilesDir(null), "results.jsonl")

    var settings by mutableStateOf(store.load())
        private set
    var run by mutableStateOf<Run?>(null)
        private set
    var showSettings by mutableStateOf(false)

    private var queue: List<Demo> = emptyList()
    private var sessionSettings = settings
    private var sessionParams = ""
    private var index = 0
    private var loop = 1
    private var seq = 0

    fun updateSettings(s: TestSettings) {
        settings = s
        store.save(s)
        Log.i(LOG_TAG, "SETTINGS $s")
    }

    /** Opens a single demo from the gallery with the saved settings. */
    fun open(demo: Demo) = start(listOf(demo), settings, "")

    fun start(list: List<Demo>, s: TestSettings, params: String) {
        queue = list
        sessionSettings = s
        sessionParams = params
        index = 0
        loop = 1
        Log.i(LOG_TAG, "SESSION_START demos=${list.joinToString(",") { it.id }} $s params='$params'")
        launch()
    }

    private fun launch() {
        val r = Run(++seq, queue[index], sessionSettings, sessionParams, index + 1, queue.size, loop)
        run = r
        Log.i(LOG_TAG, "RUN_START ${r.demo.id} [${r.position}/${r.total} loop ${r.loop}] url=${r.url}")
    }

    /** Called when a run ends on its own (timer or renderer loss) with the page's JSON report. */
    fun onRunFinished(finished: Run, report: String?) {
        if (finished.seq != run?.seq) return // a stale callback from a run that was already replaced
        record(finished, "finished", report)
        index++
        if (index >= queue.size) {
            val s = sessionSettings
            if (s.loops == 0 || loop < s.loops) {
                loop++
                index = 0
            } else {
                Log.i(LOG_TAG, "SESSION_DONE")
                run = null
                queue = emptyList()
                return
            }
        }
        launch()
    }

    /** Ends the session now (back button, STOP intent). */
    fun stop(reason: String) {
        val current = run ?: return
        record(current, "stopped:$reason", null)
        Log.i(LOG_TAG, "SESSION_STOPPED reason=$reason")
        run = null
        queue = emptyList()
    }

    fun handle(command: Command) {
        when (command) {
            is Command.Start -> {
                val s = command.patch.applyTo(settings)
                stop("restart")
                start(command.demos, s, command.params)
            }
            is Command.Stop -> stop("intent")
            is Command.Settings -> when {
                command.reset -> updateSettings(TestSettings())
                command.patch.isEmpty -> showSettings = true
                else -> updateSettings(command.patch.applyTo(settings))
            }
            is Command.Invalid -> Log.e(LOG_TAG, "INVALID ${command.message}")
        }
    }

    private fun record(r: Run, outcome: String, report: String?) {
        val line = JSONObject()
            .put("time", OffsetDateTime.now().toString())
            .put("demo", r.demo.id)
            .put("outcome", outcome)
            .put("position", r.position)
            .put("total", r.total)
            .put("loop", r.loop)
            .put("durationSec", r.settings.durationSec)
            .put("scaleSetting", r.settings.scale)
            .put("params", r.params)
            .put("report", report?.let { runCatching { JSONObject(it) }.getOrNull() } ?: JSONObject.NULL)
            .toString()
        Log.i(LOG_TAG, "RESULT $line")
        viewModelScope.launch(Dispatchers.IO) {
            runCatching { resultsFile.appendText(line + "\n") }
                .onFailure { Log.e(LOG_TAG, "could not write ${resultsFile.path}", it) }
        }
    }
}
