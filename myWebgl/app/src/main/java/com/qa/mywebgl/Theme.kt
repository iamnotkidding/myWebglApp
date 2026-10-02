package com.qa.mywebgl

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

val Ink = Color(0xFF05060F)
val InkRaised = Color(0xFF0E1124)

private val colors = darkColorScheme(
    primary = Color(0xFF00E5FF),
    secondary = Color(0xFFFF4FD8),
    background = Ink,
    surface = InkRaised,
    onBackground = Color(0xFFE8EAF6),
    onSurface = Color(0xFFE8EAF6),
    onSurfaceVariant = Color(0xFF9AA0C3),
)

@Composable
fun MyWebglTheme(content: @Composable () -> Unit) {
    MaterialTheme(colorScheme = colors, content = content)
}
