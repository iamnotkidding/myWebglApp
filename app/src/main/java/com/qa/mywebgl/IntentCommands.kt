package com.qa.mywebgl

import android.content.Intent
import android.os.Bundle

/**
 * adb-driven test control. Every command is an activity intent, e.g.
 *
 * ```
 * adb shell am start -n com.qa.mywebgl/.MainActivity -a com.qa.mywebgl.action.START \
 *     --es demo sandstorm,boids --es duration 60 --ei loops 2 --es params "storm=1"
 * adb shell am start -n com.qa.mywebgl/.MainActivity -a com.qa.mywebgl.action.STOP
 * adb shell am start -n com.qa.mywebgl/.MainActivity -a com.qa.mywebgl.action.SETTINGS --es duration 5m
 * ```
 *
 * Extras are read leniently: `--es`, `--ei`, `--ef` and `--ez` all work for any key.
 */
object IntentCommands {
    const val ACTION_START = "com.qa.mywebgl.action.START"
    const val ACTION_STOP = "com.qa.mywebgl.action.STOP"
    const val ACTION_SETTINGS = "com.qa.mywebgl.action.SETTINGS"

    const val EXTRA_DEMO = "demo"
    const val EXTRA_DURATION = "duration"
    const val EXTRA_LOOPS = "loops"
    const val EXTRA_SCALE = "scale"
    const val EXTRA_HUD = "hud"
    const val EXTRA_PARAMS = "params"
    const val EXTRA_EXIT = "exit"
    const val EXTRA_RESET = "reset"
}

/** Overrides for [TestSettings]; null fields keep the current value. */
data class SettingsPatch(
    val durationSec: Int? = null,
    val loops: Int? = null,
    val scale: Float? = null,
    val hud: Boolean? = null,
) {
    val isEmpty get() = this == SettingsPatch()

    fun applyTo(s: TestSettings) = s.copy(
        durationSec = durationSec ?: s.durationSec,
        loops = loops ?: s.loops,
        scale = scale ?: s.scale,
        hud = hud ?: s.hud,
    )
}

sealed interface Command {
    /** Run [demos] in order with [patch] applied for this session only. */
    data class Start(val demos: List<Demo>, val patch: SettingsPatch, val params: String) : Command

    /** End the current run/session; [exit] also closes the app. */
    data class Stop(val exit: Boolean) : Command

    /** Persist [patch] as the new defaults; with nothing to change, open the settings dialog. */
    data class Settings(val patch: SettingsPatch, val reset: Boolean) : Command

    data class Invalid(val message: String) : Command
}

fun parseCommand(intent: Intent): Command? {
    val extras = intent.extras ?: Bundle.EMPTY
    return try {
        when (intent.action) {
            IntentCommands.ACTION_START -> Command.Start(
                demos = resolveDemos(extras.text(IntentCommands.EXTRA_DEMO)),
                patch = extras.settingsPatch(),
                params = extras.text(IntentCommands.EXTRA_PARAMS).orEmpty().trimStart('?', '&'),
            )
            IntentCommands.ACTION_STOP -> Command.Stop(exit = parseBool(extras.text(IntentCommands.EXTRA_EXIT)) == true)
            IntentCommands.ACTION_SETTINGS -> Command.Settings(
                patch = extras.settingsPatch(),
                reset = parseBool(extras.text(IntentCommands.EXTRA_RESET)) == true,
            )
            else -> null
        }
    } catch (e: IllegalArgumentException) {
        Command.Invalid(e.message ?: "invalid command")
    }
}

/** "all" (or nothing) means every demo; otherwise a comma list of ids, file names or 1-based numbers. */
fun resolveDemos(spec: String?): List<Demo> {
    if (spec.isNullOrBlank() || spec.trim().equals("all", ignoreCase = true)) return demos
    return spec.split(',').map { it.trim() }.filter { it.isNotEmpty() }.map { key ->
        key.toIntOrNull()?.let { demos.getOrNull(it - 1) }
            ?: demos.firstOrNull { d ->
                d.id.equals(key, true) || d.asset.removeSuffix(".html").equals(key, true) || d.asset.equals(key, true)
            }
            ?: throw IllegalArgumentException(
                "unknown demo '$key' (use all, 1-${demos.size}, or one of ${demos.joinToString { it.asset.removeSuffix(".html") }})"
            )
    }
}

private fun Bundle.settingsPatch() = SettingsPatch(
    durationSec = text(IntentCommands.EXTRA_DURATION)?.let(::parseDuration),
    loops = text(IntentCommands.EXTRA_LOOPS)?.let(::parseLoops),
    scale = text(IntentCommands.EXTRA_SCALE)?.let(::parseScale),
    hud = text(IntentCommands.EXTRA_HUD)?.let { parseBool(it) ?: throw IllegalArgumentException("hud must be true/false, got '$it'") },
)

/** Any extra type as text, so `--ei duration 60` and `--es duration 60` behave the same. */
@Suppress("DEPRECATION")
private fun Bundle.text(key: String): String? = get(key)?.toString()?.trim()?.takeIf { it.isNotEmpty() }

/** "90", "90s", "5m", "1h30m"; 0 or "off" means unlimited. */
fun parseDuration(v: String): Int {
    val s = v.lowercase().trim()
    if (s == "off" || s == "none" || s == "unlimited") return 0
    val parts = Regex("""(\d+)\s*([hms]?)""").findAll(s).toList()
    require(parts.isNotEmpty() && parts.joinToString("") { it.value.replace(" ", "") } == s.replace(" ", "")) {
        "duration must look like 90, 90s, 5m or 1h30m, got '$v'"
    }
    return parts.sumOf { m ->
        val n = m.groupValues[1].toInt()
        when (m.groupValues[2]) { "h" -> n * 3600; "m" -> n * 60; else -> n }
    }
}

/** A count; 0, "inf" or "infinite" repeats forever. */
fun parseLoops(v: String): Int = when (v.lowercase()) {
    "inf", "infinite", "forever" -> 0
    else -> v.toIntOrNull()?.takeIf { it >= 0 } ?: throw IllegalArgumentException("loops must be a number >= 0, got '$v'")
}

/** "auto"/0 → adaptive; "0.5", "50" or "50%" → half resolution. */
fun parseScale(v: String): Float {
    val s = v.lowercase().removeSuffix("%")
    if (s == "auto") return 0f
    val f = s.toFloatOrNull() ?: throw IllegalArgumentException("scale must be auto, 0.1-1 or a percentage, got '$v'")
    val scale = if (f > 1f) f / 100f else f
    require(scale == 0f || scale in 0.1f..1f) { "scale must be between 0.1 and 1 (or 10-100%), got '$v'" }
    return scale
}

fun parseBool(v: String?): Boolean? = when (v?.lowercase()) {
    "true", "1", "on", "yes" -> true
    "false", "0", "off", "no" -> false
    else -> null
}
