package com.qa.mywebgl

import android.content.Context
import androidx.core.content.edit

/**
 * Settings applied to every demo run, whether started from the gallery or by intent.
 *
 * @property durationSec seconds before a run ends and its result is recorded; 0 runs until stopped.
 * @property loops how many times a session repeats its demo list; 0 repeats forever.
 * @property scale fixed render scale (0.1–1 of device pixels); 0 keeps adaptive resolution.
 * @property hud whether the fps overlay, option buttons and back/reload buttons are shown.
 */
data class TestSettings(
    val durationSec: Int = 0,
    val loops: Int = 1,
    val scale: Float = 0f,
    val hud: Boolean = true,
) {
    /** Query string the demo pages read through `D.param` in common.js. */
    fun toQuery(): String = buildList {
        if (scale > 0f) add("scale=$scale")
        if (!hud) add("hud=0")
    }.joinToString("&")
}

class SettingsStore(context: Context) {
    private val prefs = context.getSharedPreferences("test_settings", Context.MODE_PRIVATE)

    fun load() = TestSettings(
        durationSec = prefs.getInt(KEY_DURATION, 0),
        loops = prefs.getInt(KEY_LOOPS, 1),
        scale = prefs.getFloat(KEY_SCALE, 0f),
        hud = prefs.getBoolean(KEY_HUD, true),
    )

    fun save(s: TestSettings) = prefs.edit {
        putInt(KEY_DURATION, s.durationSec)
        putInt(KEY_LOOPS, s.loops)
        putFloat(KEY_SCALE, s.scale)
        putBoolean(KEY_HUD, s.hud)
    }

    private companion object {
        const val KEY_DURATION = "duration"
        const val KEY_LOOPS = "loops"
        const val KEY_SCALE = "scale"
        const val KEY_HUD = "hud"
    }
}
