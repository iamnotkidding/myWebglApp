'use strict';
// Adapter for the bundled 3D Life Sim (MIT, github.com/kajukabla/3d-life-sim), which does not
// use common.js. It gives the app the same `D.report()` used for timed test runs and honours
// `hud=0` by hiding the cockpit. The simulation itself is left untouched.
(() => {
  const qs = new URLSearchParams(location.search);
  const stats = { frames: 0, seconds: 0, min: Infinity, max: 0 };
  const errors = [];
  addEventListener('error', (e) => errors.push(String(e.message)));
  addEventListener('unhandledrejection', (e) => errors.push(String(e.reason)));

  // Frame statistics from requestAnimationFrame, skipping the first second of warm-up.
  let last = performance.now(), start = last, winT = 0, winN = 0;
  const tick = (now) => {
    const raw = (now - last) / 1000;
    last = now;
    if (now - start > 1000 && raw < 0.25) {
      stats.frames++;
      stats.seconds += raw;
      winN++;
      winT += raw;
      if (winT >= 0.5) {
        const fps = winN / winT;
        stats.min = Math.min(stats.min, fps);
        stats.max = Math.max(stats.max, fps);
        winT = winN = 0;
      }
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  if (qs.get('hud') === '0') {
    const style = document.createElement('style');
    style.textContent = '#control-panel, [aria-controls="control-panel"] { display: none !important; }';
    document.head.appendChild(style);
  }

  window.D = {
    report: () => {
      const canvas = document.querySelector('canvas');
      return {
        title: document.title,
        seconds: +stats.seconds.toFixed(2),
        frames: stats.frames,
        avgFps: stats.seconds > 0 ? +(stats.frames / stats.seconds).toFixed(1) : 0,
        minFps: Number.isFinite(stats.min) ? +stats.min.toFixed(1) : 0,
        maxFps: +stats.max.toFixed(1),
        width: canvas ? canvas.width : 0,
        height: canvas ? canvas.height : 0,
        scale: 0,
        backend: navigator.gpu ? 'WebGPU (3D Life Sim)' : 'WebGPU unavailable',
        params: location.search,
        failed: !navigator.gpu || errors.length > 0,
        error: errors.length ? errors.slice(0, 3).join(' | ').slice(0, 400) : navigator.gpu ? null : 'navigator.gpu unavailable',
      };
    },
  };
})();
