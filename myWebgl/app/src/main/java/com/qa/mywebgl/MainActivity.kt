package com.qa.mywebgl

import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.SystemBarStyle
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.viewModels
import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.togetherWith
import androidx.compose.foundation.lazy.grid.rememberLazyGridState
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface

class MainActivity : ComponentActivity() {
    private val controller: TestController by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        enableEdgeToEdge(
            statusBarStyle = SystemBarStyle.dark(android.graphics.Color.TRANSPARENT),
            navigationBarStyle = SystemBarStyle.dark(android.graphics.Color.TRANSPARENT),
        )
        super.onCreate(savedInstanceState)
        // A recreated activity must not replay the intent that launched it.
        if (savedInstanceState == null) handleIntent(intent)

        setContent {
            MyWebglTheme {
                // Surface supplies onBackground as the default content color for every Text below.
                Surface(color = MaterialTheme.colorScheme.background) {
                    // Hoisted out of AnimatedContent so the gallery keeps its scroll position
                    // while a demo is open.
                    val gridState = rememberLazyGridState()
                    val run = controller.run

                    BackHandler(enabled = run != null) { controller.stop("back") }

                    AnimatedContent(
                        targetState = run,
                        contentKey = { it?.seq },
                        transitionSpec = { fadeIn() togetherWith fadeOut() },
                        label = "screen",
                    ) { current ->
                        if (current == null) {
                            GalleryScreen(
                                state = gridState,
                                settings = controller.settings,
                                onOpen = controller::open,
                                onRunAll = { controller.start(demos, controller.settings, "") },
                                onSettings = { controller.showSettings = true },
                            )
                        } else {
                            DemoScreen(
                                run = current,
                                onFinished = { report -> controller.onRunFinished(current, report) },
                                onClose = { controller.stop("back") },
                            )
                        }
                    }

                    if (controller.showSettings) {
                        SettingsDialog(
                            initial = controller.settings,
                            onDismiss = { controller.showSettings = false },
                            onSave = {
                                controller.updateSettings(it)
                                controller.showSettings = false
                            },
                        )
                    }
                }
            }
        }
    }

    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        handleIntent(intent)
    }

    private fun handleIntent(intent: Intent) {
        val command = parseCommand(intent) ?: return
        controller.handle(command)
        if (command is Command.Stop && command.exit) finishAndRemoveTask()
    }
}
