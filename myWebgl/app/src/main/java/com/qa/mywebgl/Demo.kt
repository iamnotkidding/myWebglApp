package com.qa.mywebgl

import androidx.compose.ui.graphics.Color

/**
 * One bundled demo. [asset] is a page under `assets/demos/`; [inspiredBy] names the
 * webgpu.com showcase entry whose idea the demo reimplements.
 */
data class Demo(
    val id: String,
    val title: String,
    val subtitle: String,
    val inspiredBy: String,
    val tech: List<String>,
    val accent: List<Color>,
    val asset: String,
)

val demos = listOf(
    Demo(
        id = "particle-life",
        title = "Particle Life 3D",
        subtitle = "4,096개 입자가 6종의 끌림·밀어냄 규칙으로 생명체처럼 군집합니다. 화면을 두 번 탭하면 새 규칙이 생성됩니다.",
        inspiredBy = "3D Life Sim",
        tech = listOf("GPGPU", "Float Texture", "N-body"),
        accent = listOf(Color(0xFFFF4FD8), Color(0xFF7B5CFF), Color(0xFF00E5FF)),
        asset = "particle-life.html",
    ),
    Demo(
        id = "giza-sandstorm",
        title = "Giza Sandstorm",
        subtitle = "레이마칭으로 그린 피라미드와 사구 위로 모래폭풍이 몰아칩니다. 드래그로 시점을 돌려 보세요.",
        inspiredBy = "Ancient Egypt in 3D",
        tech = listOf("Raymarching", "SDF", "Volumetric fog"),
        accent = listOf(Color(0xFFFFB347), Color(0xFFE0703A), Color(0xFF6B3A1F)),
        asset = "sandstorm.html",
    ),
    Demo(
        id = "data-flow",
        title = "Neural Data Flow",
        subtitle = "AI 인프라를 흐르는 데이터 펄스를 시네마틱하게 시각화했습니다. 탭하면 신호 버스트가 퍼집니다.",
        inspiredBy = "Edolus",
        tech = listOf("Custom GLSL", "Additive blending", "Bloom"),
        accent = listOf(Color(0xFF00FFC6), Color(0xFF0091FF), Color(0xFF2A1B6B)),
        asset = "data-flow.html",
    ),
    Demo(
        id = "wireframe-station",
        title = "Wireframe Station",
        subtitle = "다층 지하 역사를 겹겹이 쌓인 와이어프레임 지도로 재구성하고 승객 흐름을 빛으로 표시합니다.",
        inspiredBy = "Shinjuku Station Indoor",
        tech = listOf("Line rendering", "Depth fade", "Orbit camera"),
        accent = listOf(Color(0xFF7CFF6B), Color(0xFF00C2FF), Color(0xFF0B1A3A)),
        asset = "wireframe-station.html",
    ),
    Demo(
        id = "shadow-play",
        title = "Shadow Play",
        subtitle = "빛 대신 그림자가 주인공인 장면. 움직이는 광원이 만드는 소프트 섀도를 손가락으로 조종합니다.",
        inspiredBy = "Artisans d'Idées",
        tech = listOf("Soft shadows", "Ambient occlusion", "SDF"),
        accent = listOf(Color(0xFFF2E8D5), Color(0xFF8A7B66), Color(0xFF1A1611)),
        asset = "shadow-play.html",
    ),
    Demo(
        id = "path-tracer",
        title = "Progressive Path Tracer",
        subtitle = "실내 공간을 몬테카를로 경로 추적으로 점진적으로 렌더링합니다. 재질을 바꾸며 수렴 과정을 지켜보세요.",
        inspiredBy = "Giuseppe Paccione 3D Portfolio",
        tech = listOf("Path tracing", "Accumulation", "PBR"),
        accent = listOf(Color(0xFFFFE08A), Color(0xFFFF6B6B), Color(0xFF3B2A5C)),
        asset = "path-tracer.html",
    ),
    Demo(
        id = "webgpu-boids",
        title = "WebGPU Compute Boids",
        subtitle = "WebGPU 컴퓨트 셰이더로 4,096마리 새 떼를 3D로 시뮬레이션합니다. 미지원 기기에서는 WebGL2로 자동 대체됩니다.",
        inspiredBy = "WebGPU Samples",
        tech = listOf("WebGPU", "WGSL compute", "Instancing"),
        accent = listOf(Color(0xFF9DFF00), Color(0xFF00D47E), Color(0xFF003B3B)),
        asset = "boids.html",
    ),
    Demo(
        id = "life-sim",
        title = "3D Life Sim",
        subtitle = "수십만 개 입자가 군집·필라멘트·격자를 이루는 인공생명 시뮬레이터 원작을 그대로 담았습니다. ☰ 메뉴에서 프리셋과 물리 값을 조절하세요. WebGPU 필요.",
        inspiredBy = "3D Life Sim (MIT, kajukabla)",
        tech = listOf("WebGPU", "WGSL compute", "200K particles"),
        accent = listOf(Color(0xFFAADFD3), Color(0xFFF5D996), Color(0xFF0B2A26)),
        asset = "life-sim/index.html",
    ),
    Demo(
        id = "fluid",
        title = "WebGPU Fluid",
        subtitle = "Stable Fluids 유체 시뮬레이션을 컴퓨트 셰이더로 구현했습니다. 손가락으로 휘저으면 물감이 소용돌이칩니다(멀티터치). WebGPU 필요.",
        inspiredBy = "WebGPU Fluid Simulation",
        tech = listOf("WebGPU", "Navier–Stokes", "Vorticity"),
        accent = listOf(Color(0xFFFF4FD8), Color(0xFF3AE0FF), Color(0xFF1B0B3A)),
        asset = "fluid.html",
    ),
    Demo(
        id = "grassland",
        title = "Above the Grassland",
        subtitle = "끝없는 초원 위를 낮게 미끄러지는 시네마틱 비행. 바람에 일렁이는 풀잎, 날씨 프리셋, 자막과 바람 소리가 분위기를 만듭니다.",
        inspiredBy = "Above the Grassland",
        tech = listOf("Instancing", "Vertex wind", "Volumetric fog"),
        accent = listOf(Color(0xFFE8C46A), Color(0xFF8DB255), Color(0xFF2B3A1C)),
        asset = "grassland.html",
    ),
    Demo(
        id = "patina",
        title = "Patina",
        subtitle = "구리 조각이 세월에 따라 갈색으로 변색되고 홈과 빗물 자국을 따라 녹청이 번지는 과정을 실시간 절차적 PBR로 보여 줍니다.",
        inspiredBy = "Patina Preview",
        tech = listOf("Procedural PBR", "Cavity masks", "GGX"),
        accent = listOf(Color(0xFF6FC2A6), Color(0xFFD9895F), Color(0xFF1E2A26)),
        asset = "patina.html",
    ),
)
