package com.qa.mywebgl

import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.asPaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.safeDrawing
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.GridItemSpan
import androidx.compose.foundation.lazy.grid.LazyGridState
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.itemsIndexed
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.rounded.ArrowForward
import androidx.compose.material.icons.rounded.PlayArrow
import androidx.compose.material.icons.rounded.Settings
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.clipToBounds
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.BlendMode
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.sin

@Composable
fun GalleryScreen(
    state: LazyGridState,
    settings: TestSettings,
    onOpen: (Demo) -> Unit,
    onRunAll: () -> Unit,
    onSettings: () -> Unit,
) {
    val insets = WindowInsets.safeDrawing.asPaddingValues()
    LazyVerticalGrid(
        columns = GridCells.Adaptive(minSize = 320.dp),
        state = state,
        modifier = Modifier
            .fillMaxSize()
            .background(Ink),
        contentPadding = PaddingValues(
            start = 16.dp,
            end = 16.dp,
            top = insets.calculateTopPadding() + 24.dp,
            bottom = insets.calculateBottomPadding() + 24.dp,
        ),
        horizontalArrangement = Arrangement.spacedBy(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp),
    ) {
        item(span = { GridItemSpan(maxLineSpan) }) { Header(settings, onRunAll, onSettings) }
        itemsIndexed(demos, key = { _, d -> d.id }) { index, demo ->
            DemoCard(index = index, demo = demo, onClick = { onOpen(demo) })
        }
    }
}

@Composable
private fun Header(settings: TestSettings, onRunAll: () -> Unit, onSettings: () -> Unit) {
    Column(Modifier.padding(bottom = 8.dp)) {
        Row(verticalAlignment = Alignment.CenterVertically) {
            Text(
                text = "myWebgl",
                style = MaterialTheme.typography.displaySmall,
                fontWeight = FontWeight.Black,
                color = MaterialTheme.colorScheme.onBackground,
                modifier = Modifier.weight(1f),
            )
            IconButton(onClick = onRunAll) {
                Icon(Icons.Rounded.PlayArrow, contentDescription = "전체 데모 연속 실행", tint = MaterialTheme.colorScheme.primary)
            }
            IconButton(onClick = onSettings) {
                Icon(Icons.Rounded.Settings, contentDescription = "테스트 설정")
            }
        }
        Spacer(Modifier.height(6.dp))
        Text(
            text = "webgpu.com 쇼케이스에서 영감을 받은 실시간 GPU 그래픽 데모 ${demos.size}선",
            style = MaterialTheme.typography.bodyMedium,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
        )
        Text(
            text = "모든 데모는 오프라인으로 동작합니다",
            style = MaterialTheme.typography.labelMedium,
            color = MaterialTheme.colorScheme.primary,
            modifier = Modifier.padding(top = 4.dp),
        )
        Text(
            text = settingsSummary(settings),
            style = MaterialTheme.typography.labelMedium,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
            modifier = Modifier
                .padding(top = 10.dp)
                .clip(RoundedCornerShape(50))
                .clickable(onClick = onSettings)
                .background(Color.White.copy(alpha = 0.06f))
                .padding(horizontal = 12.dp, vertical = 6.dp),
        )
    }
}

fun settingsSummary(s: TestSettings): String = listOf(
    "테스트 시간 " + if (s.durationSec == 0) "무제한" else formatDuration(s.durationSec),
    "반복 " + if (s.loops == 0) "무한" else "${s.loops}회",
    "해상도 " + if (s.scale == 0f) "자동" else "${(s.scale * 100).toInt()}%",
    "HUD " + if (s.hud) "켜짐" else "꺼짐",
).joinToString(" · ")

@Composable
private fun DemoCard(index: Int, demo: Demo, onClick: () -> Unit) {
    val shape = RoundedCornerShape(20.dp)
    Column(
        Modifier
            .fillMaxWidth()
            .clip(shape)
            .background(InkRaised)
            .border(1.dp, demo.accent.first().copy(alpha = 0.25f), shape)
            .clickable(onClick = onClick),
    ) {
        Box(
            Modifier
                .fillMaxWidth()
                .height(150.dp)
                .clipToBounds(),
        ) {
            Preview(seed = index, accent = demo.accent)
            Text(
                text = "%02d".format(index + 1),
                fontFamily = FontFamily.Monospace,
                fontSize = 13.sp,
                color = Color.White.copy(alpha = 0.7f),
                modifier = Modifier.padding(14.dp),
            )
        }
        Column(Modifier.padding(horizontal = 16.dp, vertical = 14.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Text(
                    text = demo.title,
                    style = MaterialTheme.typography.titleLarge,
                    fontWeight = FontWeight.Bold,
                    modifier = Modifier.weight(1f),
                )
                Icon(
                    Icons.AutoMirrored.Rounded.ArrowForward,
                    contentDescription = null,
                    tint = demo.accent.first(),
                    modifier = Modifier.size(20.dp),
                )
            }
            Text(
                text = "inspired by ${demo.inspiredBy}",
                style = MaterialTheme.typography.labelMedium,
                color = demo.accent.first(),
                modifier = Modifier.padding(top = 2.dp),
            )
            Text(
                text = demo.subtitle,
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                modifier = Modifier.padding(top = 8.dp),
            )
            FlowRow(
                horizontalArrangement = Arrangement.spacedBy(6.dp),
                verticalArrangement = Arrangement.spacedBy(6.dp),
                modifier = Modifier.padding(top = 12.dp),
            ) {
                demo.tech.forEach { Chip(it) }
            }
        }
    }
}

@Composable
private fun Chip(label: String) {
    Text(
        text = label,
        style = MaterialTheme.typography.labelSmall,
        color = MaterialTheme.colorScheme.onSurface,
        modifier = Modifier
            .clip(RoundedCornerShape(50))
            .background(Color.White.copy(alpha = 0.07f))
            .padding(horizontal = 10.dp, vertical = 4.dp),
    )
}

/** Cheap animated thumbnail: drifting glow orbs plus slowly turning rings, tinted per demo. */
@Composable
private fun Preview(seed: Int, accent: List<Color>) {
    val t by rememberInfiniteTransition(label = "preview").animateFloat(
        initialValue = 0f,
        targetValue = (2 * PI).toFloat(),
        animationSpec = infiniteRepeatable(tween(9000, easing = LinearEasing), RepeatMode.Restart),
        label = "t",
    )
    Canvas(Modifier.fillMaxSize()) {
        drawRect(Brush.linearGradient(listOf(accent.last(), Ink), Offset.Zero, Offset(size.width, size.height)))
        val c = Offset(size.width * 0.62f, size.height * 0.55f)
        accent.forEachIndexed { i, color ->
            val phase = t + i * 2.1f + seed
            val p = Offset(
                c.x + cos(phase) * size.width * 0.22f,
                c.y + sin(phase * 1.3f) * size.height * 0.28f,
            )
            val r = size.minDimension * (0.55f - i * 0.1f)
            drawCircle(
                Brush.radialGradient(listOf(color.copy(alpha = 0.75f), Color.Transparent), p, r),
                radius = r,
                center = p,
                blendMode = BlendMode.Plus,
            )
        }
        for (k in 0 until 3) {
            val r = size.minDimension * (0.22f + k * 0.12f)
            val dir = if (k % 2 == 0) 1 else -1
            drawArc(
                color = accent.first().copy(alpha = 0.55f - k * 0.15f),
                startAngle = Math.toDegrees(t.toDouble()).toFloat() * dir + k * 40,
                sweepAngle = 220f,
                useCenter = false,
                topLeft = Offset(c.x - r, c.y - r),
                size = Size(r * 2, r * 2),
                style = Stroke(width = 1.5.dp.toPx()),
            )
        }
    }
}
