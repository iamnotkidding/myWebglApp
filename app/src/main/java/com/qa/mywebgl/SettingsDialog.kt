package com.qa.mywebgl

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.FilterChip
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

private val DURATIONS = listOf(0, 30, 60, 300, 600, 1800, 3600)
private val LOOPS = listOf(1, 3, 10, 0)
private val SCALES = listOf(0f, 0.5f, 0.75f, 1f)

/** Edits the saved defaults; values set by intent that are not in the presets still show as selected chips. */
@Composable
fun SettingsDialog(initial: TestSettings, onDismiss: () -> Unit, onSave: (TestSettings) -> Unit) {
    var s by remember { mutableStateOf(initial) }
    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("테스트 설정") },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
                ChipRow(
                    label = "테스트 시간 (데모당)",
                    options = (DURATIONS + s.durationSec).distinct().sorted(),
                    selected = s.durationSec,
                    text = { if (it == 0) "무제한" else formatDuration(it) },
                    onSelect = { s = s.copy(durationSec = it) },
                )
                ChipRow(
                    label = "반복 횟수",
                    options = (LOOPS + s.loops).distinct(),
                    selected = s.loops,
                    text = { if (it == 0) "무한" else "${it}회" },
                    onSelect = { s = s.copy(loops = it) },
                )
                ChipRow(
                    label = "해상도",
                    options = (SCALES + s.scale).distinct(),
                    selected = s.scale,
                    text = { if (it == 0f) "자동" else "${(it * 100).toInt()}%" },
                    onSelect = { s = s.copy(scale = it) },
                )
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Column(Modifier.weight(1f)) {
                        Text("HUD 표시", style = MaterialTheme.typography.labelLarge)
                        Text(
                            "fps·옵션 버튼·뒤로 버튼",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant,
                        )
                    }
                    Switch(checked = s.hud, onCheckedChange = { s = s.copy(hud = it) })
                }
            }
        },
        confirmButton = { TextButton(onClick = { onSave(s) }) { Text("저장") } },
        dismissButton = { TextButton(onClick = onDismiss) { Text("취소") } },
    )
}

@Composable
private fun <T> ChipRow(label: String, options: List<T>, selected: T, text: (T) -> String, onSelect: (T) -> Unit) {
    Column {
        Text(label, style = MaterialTheme.typography.labelLarge, modifier = Modifier.padding(bottom = 4.dp))
        FlowRow(horizontalArrangement = Arrangement.spacedBy(6.dp)) {
            options.forEach { o ->
                FilterChip(selected = o == selected, onClick = { onSelect(o) }, label = { Text(text(o)) })
            }
        }
    }
}
