'use strict';
// Shared toolkit for the bundled demos: HUD, adaptive resolution, touch orbit camera,
// WebGL2 program/target helpers, matrix math, a bloom post-process and GLSL noise.
// Pure local code — nothing here touches the network.
(() => {
  const D = (window.D = {});

  const el = (tag, cls, parent) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    parent.appendChild(e);
    return e;
  };
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  D.clamp = clamp;

  // ---------------------------------------------------------------- URL settings
  // The app passes test settings as query parameters: scale, hud, plus per-demo keys
  // (each D.cycle can be preset by its key, by index or label).
  D.qs = new URLSearchParams(location.search);
  /** Query parameter `name`; numeric when `def` is a number. */
  D.param = (name, def) => {
    if (!D.qs.has(name)) return def;
    const v = D.qs.get(name);
    if (typeof def !== 'number') return v;
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : def;
  };

  // ---------------------------------------------------------------- HUD
  const hud = el('div', 'hud', document.body);
  if (D.qs.get('hud') === '0') hud.style.display = 'none';
  const info = el('div', 'info', hud);
  const fpsEl = el('div', '', info);
  const badgeEl = el('div', 'badge', info);
  const statEl = el('div', '', info);
  const hintEl = el('div', 'hint', hud);
  const bar = el('div', 'bar', hud);

  D.badge = (text) => (badgeEl.textContent = text);
  D.stat = (text) => (statEl.textContent = text);

  let hintTimer = 0;
  D.hint = (text, ms = 6000) => {
    hintEl.textContent = text;
    hintEl.style.opacity = '1';
    clearTimeout(hintTimer);
    hintTimer = setTimeout(() => (hintEl.style.opacity = '0'), ms);
  };

  D.button = (label, onClick) => {
    const b = el('button', '', bar);
    b.textContent = label;
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      onClick(b);
    });
    return b;
  };

  /**
   * A button that steps through `labels`, calling onChange(index) after each step.
   * With `key`, the query parameter of that name (index or label) picks the starting option.
   */
  D.cycle = (labels, onChange, key) => {
    let i = 0;
    const set = (n) => {
      i = n;
      b.textContent = labels[i];
      onChange(i);
    };
    const b = D.button(labels[0], () => set((i + 1) % labels.length));
    b.select = set;
    if (key && D.qs.has(key)) {
      const v = D.qs.get(key);
      const n = /^\d+$/.test(v) ? +v : labels.indexOf(v);
      if (n > 0 && n < labels.length) set(n);
    }
    return b;
  };

  /**
   * A labelled range slider in the bottom bar; `key` lets a query parameter set its start value.
   * `fmt` formats the value readout. Returns the element; `.set(v)` moves it programmatically.
   */
  D.slider = (label, min, max, value, onInput, key, fmt = (v) => v.toFixed(2)) => {
    const wrap = el('label', 'slider', bar);
    el('span', '', wrap).textContent = label;
    const input = el('input', '', wrap);
    const out = el('span', 'val', wrap);
    Object.assign(input, { type: 'range', min, max, step: (max - min) / 400 });
    const set = (v) => {
      input.value = v;
      out.textContent = fmt(+v);
      onInput(+v);
    };
    input.addEventListener('input', () => set(input.value));
    if (key && D.qs.has(key)) {
      const q = parseFloat(D.qs.get(key));
      if (Number.isFinite(q)) value = clamp(q, min, max);
    }
    set(value);
    wrap.set = set;
    return wrap;
  };

  D.failed = false;
  D.errorText = null;
  const showError = (msg) => {
    if (D.failed) return;
    D.failed = true;
    D.errorText = msg.slice(0, 400);
    el('div', 'error', document.body).textContent = msg;
  };
  D.fail = (msg) => {
    showError(msg);
    throw new Error(msg);
  };
  addEventListener('error', (e) => showError(`오류: ${e.message}`));

  // ---------------------------------------------------------------- canvas + loop
  /**
   * Full-screen canvas whose backing size is `scale` × device pixels. With minScale < maxScale
   * the loop lowers/raises the scale to hold ~45–60 fps. Set `onResize` to rebuild targets.
   */
  D.surface = (opts = {}) => {
    const canvas = document.createElement('canvas');
    document.body.prepend(canvas);
    const dpr = Math.min(window.devicePixelRatio || 1, opts.maxDpr ?? 2);
    // A `scale` query parameter pins the resolution (no adaptive scaling) for repeatable tests.
    const pinned = D.param('scale', 0);
    if (pinned > 0) opts = { ...opts, scale: clamp(pinned, 0.1, 1), minScale: undefined, maxScale: undefined };
    const s = {
      canvas,
      width: 0,
      height: 0,
      scale: opts.scale ?? 1,
      minScale: opts.minScale ?? opts.scale ?? 1,
      maxScale: opts.maxScale ?? opts.scale ?? 1,
      onResize: null,
      get aspect() {
        return this.width / this.height;
      },
    };
    s.resize = () => {
      const w = Math.max(1, Math.round(innerWidth * dpr * s.scale));
      const h = Math.max(1, Math.round(innerHeight * dpr * s.scale));
      if (w === s.width && h === s.height) return;
      canvas.width = s.width = w;
      canvas.height = s.height = h;
      if (s.onResize) s.onResize(w, h);
    };
    addEventListener('resize', s.resize);
    s.resize();
    return s;
  };

  // Frame statistics for timed test runs; the first second (shader warm-up) is excluded.
  const stats = { frames: 0, seconds: 0, min: Infinity, max: 0 };
  let surface = null;

  /** Summary the app collects (via evaluateJavascript) when a timed run ends. */
  D.report = () => ({
    title: document.title,
    seconds: +stats.seconds.toFixed(2),
    frames: stats.frames,
    avgFps: stats.seconds > 0 ? +(stats.frames / stats.seconds).toFixed(1) : 0,
    minFps: Number.isFinite(stats.min) ? +stats.min.toFixed(1) : 0,
    maxFps: +stats.max.toFixed(1),
    width: surface ? surface.width : 0,
    height: surface ? surface.height : 0,
    scale: surface ? +surface.scale.toFixed(2) : 0,
    backend: badgeEl.textContent,
    params: location.search,
    failed: D.failed,
    error: D.errorText,
  });

  /** Calls frame(time, dt) every animation frame; time only advances while frames run. */
  D.loop = (s, frame) => {
    surface = s;
    let last = performance.now();
    let time = 0;
    let fpsT = 0, fpsN = 0;
    let acc = 0, n = 0, good = 0;
    const tick = (now) => {
      if (D.failed) return;
      const raw = (now - last) / 1000;
      last = now;
      const dt = Math.min(raw, 1 / 20);
      time += dt;
      frame(time, dt);

      const counted = time > 1 && raw < 0.25; // skip warm-up and background gaps
      if (counted) {
        stats.frames++;
        stats.seconds += raw;
      }
      fpsN++;
      fpsT += raw;
      if (fpsT >= 0.5) {
        const fps = fpsN / fpsT;
        fpsEl.textContent = `${Math.round(fps)} fps · ${s.width}×${s.height}`;
        if (counted) {
          stats.min = Math.min(stats.min, fps);
          stats.max = Math.max(stats.max, fps);
        }
        fpsT = fpsN = 0;
      }

      if (s.maxScale > s.minScale && raw < 0.25) {
        acc += raw;
        if (++n === 30) {
          const avg = acc / n;
          acc = n = 0;
          if (avg > 1 / 42 && s.scale > s.minScale) {
            s.scale = Math.max(s.minScale, s.scale * 0.85);
            good = 0;
            s.resize();
          } else if (avg < 1 / 56) {
            if (++good >= 3 && s.scale < s.maxScale) {
              s.scale = Math.min(s.maxScale, s.scale * 1.1);
              good = 0;
              s.resize();
            }
          } else {
            good = 0;
          }
        }
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  // ---------------------------------------------------------------- orbit camera + touch
  /**
   * One-finger drag orbits (unless rotate=false), two-finger pinch zooms, with inertia and
   * auto-rotate after 2.5 s idle. `changed` is true for a frame after anything moved.
   */
  D.orbit = (canvas, o = {}) => {
    const c = {
      yaw: o.yaw ?? 0,
      pitch: o.pitch ?? 0.3,
      dist: o.dist ?? 5,
      minDist: o.minDist ?? 1,
      maxDist: o.maxDist ?? 50,
      minPitch: o.minPitch ?? -1.45,
      maxPitch: o.maxPitch ?? 1.45,
      minYaw: o.minYaw ?? -Infinity,
      maxYaw: o.maxYaw ?? Infinity,
      target: o.target ?? [0, 0, 0],
      autoRotate: o.autoRotate ?? 0.12,
      rotate: o.rotate ?? true,
      fov: o.fov ?? 0.9,
      near: o.near ?? 0.05,
      far: o.far ?? 200,
      changed: true,
      pointer: { x: 0.5, y: 0.5, down: false },
      onTap: null,
      onDoubleTap: null,
      onDrag: null,
    };
    const pts = new Map();
    let vyaw = 0, vpitch = 0, pinch = 0, idle = 99, dirty = true;
    let downAt = 0, travel = 0, lastTap = 0;

    const pinchDist = () => {
      if (pts.size < 2) return 0;
      const [a, b] = [...pts.values()];
      return Math.hypot(a.x - b.x, a.y - b.y);
    };
    const setPointer = (e, down) => {
      c.pointer.x = e.clientX / innerWidth;
      c.pointer.y = e.clientY / innerHeight;
      c.pointer.down = down;
    };
    const turn = (dy, dp) => {
      const y = clamp(c.yaw + dy, c.minYaw, c.maxYaw);
      const p = clamp(c.pitch + dp, c.minPitch, c.maxPitch);
      if (Math.abs(y - c.yaw) + Math.abs(p - c.pitch) > 1e-6) dirty = true;
      c.yaw = y;
      c.pitch = p;
    };

    canvas.addEventListener('pointerdown', (e) => {
      canvas.setPointerCapture(e.pointerId);
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 1) {
        downAt = performance.now();
        travel = 0;
        vyaw = vpitch = 0;
      } else {
        travel = 1e9; // multi-touch is never a tap
      }
      pinch = pinchDist();
      setPointer(e, true);
      idle = 0;
    });
    canvas.addEventListener('pointermove', (e) => {
      const p = pts.get(e.pointerId);
      if (!p) return;
      const dx = e.clientX - p.x, dy = e.clientY - p.y;
      p.x = e.clientX;
      p.y = e.clientY;
      travel += Math.abs(dx) + Math.abs(dy);
      setPointer(e, true);
      idle = 0;
      if (pts.size === 1) {
        if (c.onDrag) c.onDrag(dx, dy, c.pointer);
        if (c.rotate) {
          vyaw = -dx * 0.006;
          vpitch = dy * 0.006;
          turn(vyaw, vpitch);
        }
      } else if (pts.size === 2) {
        const d = pinchDist();
        if (pinch > 0 && d > 0) {
          c.dist = clamp((c.dist * pinch) / d, c.minDist, c.maxDist);
          dirty = true;
        }
        pinch = d;
      }
    });
    const up = (e) => {
      if (!pts.delete(e.pointerId)) return;
      pinch = pinchDist();
      if (pts.size > 0) return;
      c.pointer.down = false;
      const now = performance.now();
      if (travel < 14 && now - downAt < 320) {
        const x = e.clientX / innerWidth, y = e.clientY / innerHeight;
        if (now - lastTap < 330 && c.onDoubleTap) {
          c.onDoubleTap(x, y);
          lastTap = 0;
        } else {
          if (c.onTap) c.onTap(x, y);
          lastTap = now;
        }
      }
    };
    canvas.addEventListener('pointerup', up);
    canvas.addEventListener('pointercancel', up);

    c.update = (dt) => {
      idle += dt;
      if (pts.size === 0 && c.rotate) {
        if (Math.abs(vyaw) + Math.abs(vpitch) > 1e-5) {
          turn(vyaw, vpitch);
          const k = Math.exp(-dt * 4);
          vyaw *= k;
          vpitch *= k;
        }
        if (idle > 2.5 && c.autoRotate) {
          turn(c.autoRotate * dt, 0);
        }
      }
      c.changed = dirty;
      dirty = false;
    };
    c.eye = () => {
      const cp = Math.cos(c.pitch);
      return [
        c.target[0] + c.dist * cp * Math.sin(c.yaw),
        c.target[1] + c.dist * Math.sin(c.pitch),
        c.target[2] + c.dist * cp * Math.cos(c.yaw),
      ];
    };
    c.view = () => M.lookAt(c.eye(), c.target);
    c.viewProj = (aspect) => M.mul(M.perspective(c.fov, aspect, c.near, c.far), c.view());
    /** Camera basis for ray-marching shaders: [eye, right, up, forward]. */
    c.basis = () => {
      const eye = c.eye();
      const f = V.norm(V.sub(c.target, eye));
      const r = V.norm(V.cross(f, [0, 1, 0]));
      const u = V.cross(r, f);
      return { eye, right: r, up: u, forward: f };
    };
    return c;
  };

  // ---------------------------------------------------------------- math
  const V = (D.vec3 = {
    sub: (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]],
    add: (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]],
    scale: (a, s) => [a[0] * s, a[1] * s, a[2] * s],
    dot: (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2],
    cross: (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]],
    norm: (a) => {
      const l = Math.hypot(a[0], a[1], a[2]) || 1;
      return [a[0] / l, a[1] / l, a[2] / l];
    },
  });

  // Column-major 4×4 matrices, laid out the way WebGL/WGSL expect.
  const M = (D.mat4 = {
    perspective(fovy, aspect, near, far) {
      const f = 1 / Math.tan(fovy / 2), nf = 1 / (near - far);
      return new Float32Array([f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0]);
    },
    lookAt(eye, at, up = [0, 1, 0]) {
      const z = V.norm(V.sub(eye, at));
      const x = V.norm(V.cross(up, z));
      const y = V.cross(z, x);
      return new Float32Array([
        x[0], y[0], z[0], 0,
        x[1], y[1], z[1], 0,
        x[2], y[2], z[2], 0,
        -V.dot(x, eye), -V.dot(y, eye), -V.dot(z, eye), 1,
      ]);
    },
    mul(a, b) {
      const o = new Float32Array(16);
      for (let c = 0; c < 4; c++) {
        for (let r = 0; r < 4; r++) {
          o[c * 4 + r] = a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3];
        }
      }
      return o;
    },
  });

  /** Small deterministic PRNG (mulberry32) so procedural scenes look the same on every run. */
  D.rng = (seed = 1) => () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  // ---------------------------------------------------------------- WebGL2
  D.webgl2 = (s, attrs = {}) => {
    const gl = s.canvas.getContext('webgl2', {
      antialias: false,
      alpha: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: false,
      powerPreference: 'high-performance',
      ...attrs,
    });
    if (!gl) D.fail('이 기기의 WebView는 WebGL2를 지원하지 않습니다.');
    gl.floatRT = !!gl.getExtension('EXT_color_buffer_float');
    s.canvas.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      D.fail('GPU 컨텍스트가 손실되었습니다. 다시 시작 버튼을 눌러 주세요.');
    });
    return gl;
  };

  /** Throws (with an on-screen message) when float color targets are unavailable. */
  D.requireFloatRT = (gl) => {
    if (!gl.floatRT) D.fail('이 기기의 GPU는 부동소수점 렌더 타깃(EXT_color_buffer_float)을 지원하지 않습니다.');
  };

  const numbered = (src) => src.split('\n').map((l, i) => `${String(i + 1).padStart(3)}  ${l}`).join('\n');

  /**
   * Compiles and links a program. `set({uName: value})` uploads uniforms by their declared GLSL
   * type (numbers or arrays; samplers take a texture unit), skipping ones the compiler dropped.
   */
  D.program = (gl, vs, fs) => {
    const compile = (type, src) => {
      const sh = gl.createShader(type);
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        D.fail(`셰이더 컴파일 실패\n${gl.getShaderInfoLog(sh)}\n${numbered(src)}`);
      }
      return sh;
    };
    const p = gl.createProgram();
    gl.attachShader(p, compile(gl.VERTEX_SHADER, vs));
    gl.attachShader(p, compile(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) D.fail(`셰이더 링크 실패\n${gl.getProgramInfoLog(p)}`);

    const setters = {};
    const count = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < count; i++) {
      const { name, type, size } = gl.getActiveUniform(p, i);
      const loc = gl.getUniformLocation(p, name);
      const key = name.replace(/\[0\]$/, '');
      switch (type) {
        case gl.FLOAT: setters[key] = size > 1 ? (v) => gl.uniform1fv(loc, v) : (v) => gl.uniform1f(loc, v); break;
        case gl.FLOAT_VEC2: setters[key] = (v) => gl.uniform2fv(loc, v); break;
        case gl.FLOAT_VEC3: setters[key] = (v) => gl.uniform3fv(loc, v); break;
        case gl.FLOAT_VEC4: setters[key] = (v) => gl.uniform4fv(loc, v); break;
        case gl.FLOAT_MAT3: setters[key] = (v) => gl.uniformMatrix3fv(loc, false, v); break;
        case gl.FLOAT_MAT4: setters[key] = (v) => gl.uniformMatrix4fv(loc, false, v); break;
        default: setters[key] = size > 1 ? (v) => gl.uniform1iv(loc, v) : (v) => gl.uniform1i(loc, v); // int, bool, samplers
      }
    }
    return {
      p,
      use() {
        gl.useProgram(p);
        return this;
      },
      set(values) {
        for (const k in values) if (setters[k]) setters[k](values[k]);
        return this;
      },
    };
  };

  /** Vertex shader for a single full-screen triangle; pairs with D.drawFullscreen. */
  D.FS_VS = `#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;

  // Attribute-less draws still need a bound VAO; cache one per context.
  D.drawFullscreen = (gl) => {
    if (!gl.emptyVao) gl.emptyVao = gl.createVertexArray();
    gl.bindVertexArray(gl.emptyVao);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  D.hdrFormat = (gl) =>
    gl.floatRT
      ? { internal: gl.RGBA16F, format: gl.RGBA, type: gl.HALF_FLOAT }
      : { internal: gl.RGBA8, format: gl.RGBA, type: gl.UNSIGNED_BYTE };

  D.texture = (gl, w, h, o = {}) => {
    const t = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texImage2D(gl.TEXTURE_2D, 0, o.internal ?? gl.RGBA8, w, h, 0, o.format ?? gl.RGBA, o.type ?? gl.UNSIGNED_BYTE, o.data ?? null);
    const filter = o.filter ?? gl.LINEAR;
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, o.wrap ?? gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, o.wrap ?? gl.CLAMP_TO_EDGE);
    return t;
  };

  /** Framebuffer over `textures` (one per color attachment), plus an optional depth buffer. */
  D.framebuffer = (gl, textures, depthSize = null) => {
    const fb = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    textures.forEach((t, i) => gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, gl.TEXTURE_2D, t, 0));
    let depth = null;
    if (depthSize) {
      depth = gl.createRenderbuffer();
      gl.bindRenderbuffer(gl.RENDERBUFFER, depth);
      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT24, depthSize[0], depthSize[1]);
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depth);
    }
    gl.drawBuffers(textures.map((_, i) => gl.COLOR_ATTACHMENT0 + i));
    const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    if (status !== gl.FRAMEBUFFER_COMPLETE) D.fail(`프레임버퍼 생성 실패 (0x${status.toString(16)})`);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    fb.depth = depth;
    return fb;
  };

  /** Texture + framebuffer pair. `free()` releases both. */
  D.target = (gl, w, h, o = {}) => {
    const tex = D.texture(gl, w, h, o);
    const fbo = D.framebuffer(gl, [tex], o.depth ? [w, h] : null);
    return {
      tex,
      fbo,
      w,
      h,
      free() {
        gl.deleteTexture(tex);
        if (fbo.depth) gl.deleteRenderbuffer(fbo.depth);
        gl.deleteFramebuffer(fbo);
      },
    };
  };

  D.bindTextures = (gl, list) => {
    list.forEach((t, i) => {
      gl.activeTexture(gl.TEXTURE0 + i);
      gl.bindTexture(gl.TEXTURE_2D, t);
    });
  };

  // ---------------------------------------------------------------- bloom post-process
  const BLOOM_DOWN = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform sampler2D uSrc;
uniform vec2 uTexel;
uniform float uThreshold;
void main() {
  vec3 c = texture(uSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb
         + texture(uSrc, vUv + uTexel * vec2( 1.0, -1.0)).rgb
         + texture(uSrc, vUv + uTexel * vec2(-1.0,  1.0)).rgb
         + texture(uSrc, vUv + uTexel * vec2( 1.0,  1.0)).rgb;
  c *= 0.25;
  c = max(c - uThreshold, 0.0);
  o = vec4(c, 1.0);
}`;
  const BLOOM_UP = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform sampler2D uSrc;
uniform vec2 uTexel;
void main() {
  vec2 d = uTexel;
  vec3 c = texture(uSrc, vUv).rgb * 4.0
    + (texture(uSrc, vUv + vec2(d.x, 0.0)).rgb + texture(uSrc, vUv - vec2(d.x, 0.0)).rgb
     + texture(uSrc, vUv + vec2(0.0, d.y)).rgb + texture(uSrc, vUv - vec2(0.0, d.y)).rgb) * 2.0
    + texture(uSrc, vUv + d).rgb + texture(uSrc, vUv - d).rgb
    + texture(uSrc, vUv + vec2(d.x, -d.y)).rgb + texture(uSrc, vUv + vec2(-d.x, d.y)).rgb;
  o = vec4(c / 16.0, 1.0);
}`;
  const BLOOM_COMPOSITE = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 o;
uniform sampler2D uScene;
uniform sampler2D uBloom;
uniform float uStrength;
uniform float uExposure;
uniform float uVignette;
uniform float uGrain;
uniform float uTime;
float hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
void main() {
  vec3 c = texture(uScene, vUv).rgb + texture(uBloom, vUv).rgb * uStrength;
  c = 1.0 - exp(-c * uExposure);
  vec2 q = vUv - 0.5;
  c *= 1.0 - uVignette * dot(q, q) * 2.0;
  c += (hash(gl_FragCoord.xy + fract(uTime) * 917.0) - 0.5) * uGrain;
  o = vec4(c, 1.0);
}`;

  /**
   * Render into `begin()`, then `end()` blurs a mip chain (box down / tent up) and composites
   * scene + bloom to the screen with exposure, vignette and grain.
   */
  D.Bloom = class {
    constructor(gl, { levels = 5, depth = false } = {}) {
      this.gl = gl;
      this.levels = levels;
      this.depth = depth;
      this.fmt = D.hdrFormat(gl);
      this.down = D.program(gl, D.FS_VS, BLOOM_DOWN);
      this.up = D.program(gl, D.FS_VS, BLOOM_UP);
      this.comp = D.program(gl, D.FS_VS, BLOOM_COMPOSITE);
      this.scene = null;
      this.mips = [];
    }
    resize(w, h) {
      const gl = this.gl;
      if (this.scene) this.scene.free();
      this.mips.forEach((m) => m.free());
      this.w = w;
      this.h = h;
      this.scene = D.target(gl, w, h, { ...this.fmt, depth: this.depth });
      this.mips = [];
      let mw = w, mh = h;
      for (let i = 0; i < this.levels; i++) {
        mw = Math.max(1, mw >> 1);
        mh = Math.max(1, mh >> 1);
        this.mips.push(D.target(gl, mw, mh, this.fmt));
      }
    }
    begin() {
      const gl = this.gl;
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.scene.fbo);
      gl.viewport(0, 0, this.w, this.h);
    }
    end({ strength = 0.8, threshold = 0, exposure = 1, vignette = 0.35, grain = 0.025, time = 0 } = {}) {
      const gl = this.gl;
      gl.disable(gl.DEPTH_TEST);
      gl.disable(gl.BLEND);
      gl.activeTexture(gl.TEXTURE0);

      let src = this.scene;
      this.down.use();
      this.mips.forEach((dst, i) => {
        gl.bindFramebuffer(gl.FRAMEBUFFER, dst.fbo);
        gl.viewport(0, 0, dst.w, dst.h);
        gl.bindTexture(gl.TEXTURE_2D, src.tex);
        this.down.set({ uSrc: 0, uTexel: [1 / src.w, 1 / src.h], uThreshold: i === 0 ? threshold : 0 });
        D.drawFullscreen(gl);
        src = dst;
      });

      this.up.use();
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE);
      for (let i = this.levels - 2; i >= 0; i--) {
        const s = this.mips[i + 1], dst = this.mips[i];
        gl.bindFramebuffer(gl.FRAMEBUFFER, dst.fbo);
        gl.viewport(0, 0, dst.w, dst.h);
        gl.bindTexture(gl.TEXTURE_2D, s.tex);
        this.up.set({ uSrc: 0, uTexel: [1 / s.w, 1 / s.h] });
        D.drawFullscreen(gl);
      }
      gl.disable(gl.BLEND);

      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, this.w, this.h);
      D.bindTextures(gl, [this.scene.tex, this.mips[0].tex]);
      this.comp.use().set({
        uScene: 0,
        uBloom: 1,
        uStrength: strength,
        uExposure: exposure,
        uVignette: vignette,
        uGrain: grain,
        uTime: time,
      });
      D.drawFullscreen(gl);
    }
  };

  // ---------------------------------------------------------------- GLSL snippets
  D.GLSL_NOISE = `
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float hash13(vec3 p3) { p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
float noise2(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x),
             mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x), u.y);
}
float noise3(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash13(i), hash13(i + vec3(1, 0, 0)), u.x),
                 mix(hash13(i + vec3(0, 1, 0)), hash13(i + vec3(1, 1, 0)), u.x), u.y),
             mix(mix(hash13(i + vec3(0, 0, 1)), hash13(i + vec3(1, 0, 1)), u.x),
                 mix(hash13(i + vec3(0, 1, 1)), hash13(i + vec3(1, 1, 1)), u.x), u.y), u.z);
}
`;
})();
