package com.qa.mywebgl

import android.annotation.SuppressLint
import android.content.Context
import android.content.pm.ApplicationInfo
import android.os.SystemClock
import android.util.Log
import android.view.WindowManager
import android.view.ViewGroup
import android.webkit.ConsoleMessage
import android.webkit.RenderProcessGoneDetail
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import androidx.activity.compose.LocalActivity
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.WindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.safeDrawing
import androidx.compose.foundation.layout.windowInsetsPadding
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.rounded.ArrowBack
import androidx.compose.material.icons.rounded.Refresh
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.IconButtonDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import androidx.lifecycle.compose.LifecycleResumeEffect
import androidx.webkit.WebViewAssetLoader
import androidx.webkit.WebViewClientCompat
import kotlinx.coroutines.delay
import kotlinx.coroutines.suspendCancellableCoroutine
import kotlinx.coroutines.withTimeoutOrNull
import kotlin.coroutines.resume

private const val TAG = "myWebgl"

/**
 * Pages are served from this https host by [WebViewAssetLoader] rather than file://, because
 * WebGPU is only exposed to secure contexts.
 */
private const val ASSET_HOST = "appassets.androidplatform.net"

/**
 * Shows [run] full screen. With a test duration it counts down, collects the page's
 * `D.report()` and hands it to [onFinished]; [onClose] ends the run early.
 */
@Composable
fun DemoScreen(run: Run, onFinished: (report: String?) -> Unit, onClose: () -> Unit) {
    val demo = run.demo
    ImmersiveMode()
    KeepScreenOn()

    var webView by remember { mutableStateOf<WebView?>(null) }
    var showTitle by remember { mutableStateOf(true) }
    LaunchedEffect(run.seq) {
        delay(3500)
        showTitle = false
    }

    // Stop the render loop (requestAnimationFrame) while the app is in the background.
    LifecycleResumeEffect(webView) {
        webView?.onResume()
        onPauseOrDispose { webView?.onPause() }
    }

    val durationMs = run.settings.durationSec * 1000L
    var remainingSec by remember(run.seq) { mutableIntStateOf(run.settings.durationSec) }
    if (durationMs > 0) {
        LaunchedEffect(run.seq) {
            val endAt = SystemClock.elapsedRealtime() + durationMs
            while (true) {
                val left = endAt - SystemClock.elapsedRealtime()
                if (left <= 0) break
                remainingSec = ((left + 999) / 1000).toInt()
                delay(minOf(left, 250L))
            }
            onFinished(webView?.let { collectReport(it) })
        }
    }

    Box(
        Modifier
            .fillMaxSize()
            .background(Color.Black),
    ) {
        AndroidView(
            modifier = Modifier.fillMaxSize(),
            factory = { context ->
                createDemoWebView(
                    context,
                    onRendererGone = { onFinished("""{"failed":true,"error":"WebView renderer gone"}""") },
                ).also {
                    it.loadUrl(run.url)
                    webView = it
                }
            },
            onRelease = { it.destroy() },
        )

        if (!run.settings.hud) return@Box
        Row(
            Modifier
                .windowInsetsPadding(WindowInsets.safeDrawing)
                .padding(12.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            OverlayButton(Icons.AutoMirrored.Rounded.ArrowBack, "뒤로", onClose)
            OverlayButton(Icons.Rounded.Refresh, "다시 시작") { webView?.reload() }
            if (durationMs > 0) {
                Text(
                    text = "${run.position}/${run.total}" +
                        (if (run.loop > 1) " · ${run.loop}회차" else "") +
                        " · ${formatDuration(remainingSec)}",
                    style = MaterialTheme.typography.labelLarge,
                    color = Color.White,
                    modifier = Modifier
                        .padding(end = 8.dp)
                        .background(Color.Black.copy(alpha = 0.45f), CircleShape)
                        .padding(horizontal = 12.dp, vertical = 8.dp),
                )
            }
            AnimatedVisibility(visible = showTitle, enter = fadeIn(), exit = fadeOut()) {
                Column(Modifier.padding(start = 4.dp)) {
                    Text(
                        demo.title,
                        style = MaterialTheme.typography.titleMedium,
                        fontWeight = FontWeight.Bold,
                        color = Color.White,
                    )
                    Text(
                        "inspired by ${demo.inspiredBy}",
                        style = MaterialTheme.typography.labelSmall,
                        color = demo.accent.first(),
                    )
                }
            }
        }
    }
}

@Composable
private fun OverlayButton(icon: ImageVector, description: String, onClick: () -> Unit) {
    IconButton(
        onClick = onClick,
        modifier = Modifier.padding(end = 8.dp),
        shape = CircleShape,
        colors = IconButtonDefaults.iconButtonColors(
            containerColor = Color.Black.copy(alpha = 0.45f),
            contentColor = Color.White,
        ),
    ) {
        Icon(icon, contentDescription = description)
    }
}

fun formatDuration(sec: Int): String =
    if (sec >= 3600) "%d:%02d:%02d".format(sec / 3600, sec / 60 % 60, sec % 60) else "%d:%02d".format(sec / 60, sec % 60)

/** Asks the page for its frame statistics; null if the page does not answer within 3 s. */
private suspend fun collectReport(webView: WebView): String? = withTimeoutOrNull(3000) {
    suspendCancellableCoroutine { cont ->
        webView.evaluateJavascript("window.D && D.report ? D.report() : null") { json ->
            if (cont.isActive) cont.resume(json.takeUnless { it == "null" })
        }
    }
}

/** Long timed runs must not be interrupted by the screen timing out. */
@Composable
private fun KeepScreenOn() {
    val activity = LocalActivity.current ?: return
    DisposableEffect(activity) {
        activity.window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
        onDispose { activity.window.clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON) }
    }
}

/** Hides the system bars while a demo is open; an edge swipe brings them back briefly. */
@Composable
private fun ImmersiveMode() {
    val activity = LocalActivity.current ?: return
    DisposableEffect(activity) {
        val controller = WindowCompat.getInsetsController(activity.window, activity.window.decorView)
        controller.systemBarsBehavior = WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
        controller.hide(WindowInsetsCompat.Type.systemBars())
        onDispose { controller.show(WindowInsetsCompat.Type.systemBars()) }
    }
}

@SuppressLint("SetJavaScriptEnabled")
private fun createDemoWebView(context: Context, onRendererGone: () -> Unit): WebView {
    val debuggable = context.applicationInfo.flags and ApplicationInfo.FLAG_DEBUGGABLE != 0
    WebView.setWebContentsDebuggingEnabled(debuggable)

    val assetLoader = WebViewAssetLoader.Builder()
        .setDomain(ASSET_HOST)
        .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(context))
        .build()

    return WebView(context).apply {
        layoutParams = ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
        setBackgroundColor(android.graphics.Color.BLACK)
        isVerticalScrollBarEnabled = false
        isHorizontalScrollBarEnabled = false
        overScrollMode = WebView.OVER_SCROLL_NEVER
        settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            // Everything ships inside the APK: the app has no INTERNET permission and never fetches remotely.
            blockNetworkLoads = true
            allowFileAccess = false
            allowContentAccess = false
        }
        webViewClient = object : WebViewClientCompat() {
            override fun shouldInterceptRequest(view: WebView, request: WebResourceRequest): WebResourceResponse? =
                assetLoader.shouldInterceptRequest(request.url)

            override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean =
                request.url.host != ASSET_HOST

            // A renderer killed mid-demo (e.g. GPU memory pressure) would otherwise take the
            // whole app down; drop back to the gallery instead.
            override fun onRenderProcessGone(view: WebView, detail: RenderProcessGoneDetail): Boolean {
                Log.w(TAG, "WebView renderer gone (crash=${detail.didCrash()})")
                onRendererGone()
                return true
            }
        }
        webChromeClient = object : WebChromeClient() {
            override fun onConsoleMessage(message: ConsoleMessage): Boolean {
                Log.d(TAG, "${message.sourceId()}:${message.lineNumber()} ${message.message()}")
                return true
            }
        }
    }
}
