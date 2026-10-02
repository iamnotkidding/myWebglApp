# myWebgl

[webgpu.com](https://www.webgpu.com/) 쇼케이스에서 영감을 받은 실시간 GPU 그래픽 데모 9종을 담은 Android 앱입니다.
모든 데모는 APK에 포함된 순수 WebGL2/WebGPU 코드로 동작하며 **네트워크 없이(오프라인)** 실행됩니다
(앱에 `INTERNET` 권한 없음, WebView 네트워크 차단).

| # | id | 데모 | 기술 |
|---|----|------|------|
| 1 | `particle-life` | Particle Life 3D | WebGL2 GPGPU N-body, 잔상 |
| 2 | `sandstorm` | Giza Sandstorm | 레이마칭 SDF, 볼류메트릭 먼지 |
| 3 | `data-flow` | Neural Data Flow | 인스턴싱 패킷, 블룸 |
| 4 | `wireframe-station` | Wireframe Station | 라인 렌더링, 에이전트 시뮬레이션, 블룸 |
| 5 | `shadow-play` | Shadow Play | SDF 소프트 섀도, AO |
| 6 | `path-tracer` | Progressive Path Tracer | 몬테카를로 경로 추적, NEE |
| 7 | `boids` | WebGPU Compute Boids | WGSL 컴퓨트 (미지원 시 WebGL2 대체) |
| 8 | `life-sim` | 3D Life Sim | [kajukabla/3d-life-sim](https://github.com/kajukabla/3d-life-sim) 원본 번들 (MIT), WebGPU 필요 |
| 9 | `fluid` | WebGPU Fluid | Stable Fluids 컴퓨트 셰이더 자체 구현, WebGPU 필요 |

## 빌드

- Android Studio 최신 버전, 또는 `JAVA_HOME`을 Android Studio JBR로 지정 후 `gradlew assembleDebug`
- AGP 9.4.1 (내장 Kotlin), Kotlin 2.4.20, Gradle 9.7.1, Compose BOM 2026.09.00
- compileSdk 37 / targetSdk 36 / minSdk 29
- 패키지명 `com.qa.mywebgl`

## 테스트 제어 (intent)

모든 명령은 `adb shell am start`로 보냅니다. 앱이 실행 중이면 현재 화면에 전달되고, 꺼져 있으면 앱을 실행합니다.
extra는 타입을 가리지 않습니다(`--es`, `--ei`, `--ef`, `--ez` 모두 가능).

```sh
A=com.qa.mywebgl
```

### START — 데모 실행

```sh
# 전체 데모를 각 60초씩, 2회 반복
adb shell am start -n $A/.MainActivity -a $A.action.START --es demo all --es duration 60 --ei loops 2

# 특정 데모만, 해상도 고정 75%, HUD 숨김, 데모 옵션 지정
adb shell am start -n $A/.MainActivity -a $A.action.START \
    --es demo sandstorm,boids --es duration 5m --es scale 75% --ez hud false --es params "'storm=1&time=1'"
```

| extra | 값 | 설명 |
|-------|----|------|
| `demo` | `all`(기본), id, 파일명, 번호(1–9), 쉼표 목록 | 실행할 데모와 순서 |
| `duration` | `90`, `90s`, `5m`, `1h30m`, `0`/`off` | 데모당 테스트 시간. 0이면 STOP 전까지 계속 |
| `loops` | `1`(기본)…, `0`/`inf` | 데모 목록 반복 횟수 |
| `scale` | `auto`, `0.1`–`1`, `10`–`100`, `50%` | 렌더 해상도 고정(자동 조절 끔) |
| `hud` | `true`/`false` | fps·옵션 버튼·뒤로 버튼 표시 |
| `params` | 쿼리 문자열 | 데모별 옵션(아래 표). `&`가 있으면 `"'a=1&b=2'"`처럼 따옴표 두 겹 |

START의 `duration`/`loops`/`scale`/`hud`는 이번 실행에만 적용되고, 지정하지 않은 값은 저장된 설정을 따릅니다.

### STOP — 중지

```sh
adb shell am start -n $A/.MainActivity -a $A.action.STOP              # 갤러리로 복귀
adb shell am start -n $A/.MainActivity -a $A.action.STOP --ez exit true  # 앱 종료
```

### SETTINGS — 기본 설정 저장

```sh
adb shell am start -n $A/.MainActivity -a $A.action.SETTINGS --es duration 10m --ei loops 3 --es scale auto --ez hud true
adb shell am start -n $A/.MainActivity -a $A.action.SETTINGS --ez reset true   # 기본값으로
adb shell am start -n $A/.MainActivity -a $A.action.SETTINGS                   # 설정 화면 열기
```

저장된 설정은 갤러리에서 데모를 직접 열 때, ▶(전체 연속 실행) 버튼, START intent에 모두 적용됩니다.
갤러리 상단의 ⚙ 버튼으로도 같은 설정을 바꿀 수 있습니다.

### 데모별 옵션 (`params`)

| 데모 | 키 = 값 |
|------|---------|
| particle-life | `preset`=0 세포 / 1 사냥꾼 / 2 은하 / 3 랜덤, `trails`=0 보통 / 1 길게 / 2 끄기, `count`=512–16384 |
| sandstorm | `time`=0 황혼 / 1 한낮 / 2 달밤, `storm`=0 보통 / 1 강하게 / 2 맑음 |
| data-flow | `palette`=0 오로라 / 1 인페르노 / 2 매트릭스, `speed`=0 1× / 1 2× / 2 0.5× |
| wireframe-station | `explode`=0/1, `floor`=0 전체 / 1–5 층, `scan`=0 켜짐 / 1 꺼짐 |
| shadow-play | `light`=0 촛불 / 1 달빛 / 2 네온 / 3 백색, `shadow`=0 보통 / 1 선명 / 2 흐림 |
| path-tracer | `material`=0 유리 / 1 거울 / 2 무광 / 3 골드, `lighting`=0 따뜻한 / 1 차가운 / 2 무드 |
| boids | `backend`=webgpu / webgl, `count`=입자 수(64 단위) |
| life-sim | 원본 옵션: `settings`=file-default-json / file-electric-current-json / file-ice-flower-json / file-viridian-aurora-json (또는 `Ice%20Flower`처럼 이름), `particles`=입자 수, `playing`=0 |
| fluid | `color`=0 무지개 / 1 네온 / 2 불꽃 / 3 바다, `vortex`=0 보통 / 1 강하게 / 2 끄기, `shading`=0 입체 / 1 평면, `trails`=0 보통 / 1 길게, `sim`=격자(기본 128), `dye`=물감 해상도(기본 768) |

번호 대신 버튼에 표시되는 이름(예: `time=한낮`)도 쓸 수 있습니다.

### 결과 확인

테스트 시간이 끝나면 각 데모의 프레임 통계(첫 1초 워밍업 제외)를 기록합니다.

```sh
adb logcat -s myWebglTest                                              # 실시간 로그
adb shell cat /sdcard/Android/data/com.qa.mywebgl/files/results.jsonl  # 누적 결과 (JSON Lines)
```

로그 이벤트: `SESSION_START`, `RUN_START`, `RESULT`, `SESSION_DONE`, `SESSION_STOPPED`, `SETTINGS`, `INVALID`

```json
{"time":"2026-10-03T07:30:40+09:00","demo":"giza-sandstorm","outcome":"finished","position":1,"total":2,"loop":1,
 "durationSec":12,"scaleSetting":0,"params":"storm=1&time=1",
 "report":{"avgFps":53.1,"minFps":47.2,"maxFps":79.4,"frames":575,"seconds":10.83,"width":656,"height":1423,
           "scale":0.8,"backend":"WebGL2 · ray-marched SDF","failed":false,"error":null}}
```

`outcome`은 `finished`(시간 종료) 또는 `stopped:<사유>`(back, intent)이며, WebView 렌더러가 죽으면
`report.failed=true`로 기록하고 다음 데모로 넘어갑니다. 테스트 중에는 화면이 꺼지지 않습니다.

`life-sim`과 `fluid`는 WebGPU 전용입니다. WebGPU가 없는 기기(예: 에뮬레이터)에서는 안내 메시지가 표시되고 결과에 `failed`로 기록됩니다.
`life-sim`은 `scale` 설정을 적용하지 않으며(원본이 자체적으로 해상도·입자 수를 조절), `hud=false`이면 원본의 ☰ 메뉴를 숨깁니다.

## 서드파티 / 출처

- **3D Life Sim** — © 2026 kajukabla, MIT License. 커밋 `c482627`을 빌드해 `app/src/main/assets/demos/life-sim/`에 포함했습니다.
  라이선스 전문은 같은 폴더의 `LICENSE.txt`, 포함된 Fluoddity(MIT) 등의 고지는 `THIRD_PARTY_NOTICES.md`에 있습니다.
  다시 빌드하려면 `tools/update-life-sim.sh [commit]`을 실행합니다. 앱 연동용 `life-sim-hook.js`(fps 통계, HUD 숨김)만 추가했고 원본 코드는 수정하지 않았습니다.
- **WebGPU Fluid** — [kishimisu/WebGPU-Fluid-Simulation](https://github.com/kishimisu/WebGPU-Fluid-Simulation)에서 영감을 받았지만,
  해당 저장소에는 라이선스가 없어 코드를 가져오지 않고 공개 알고리즘(Jos Stam *Stable Fluids*, GPU Gems 38장)으로 새로 구현했습니다.
- 나머지 데모 1–7은 [webgpu.com](https://www.webgpu.com/) 쇼케이스 작품의 아이디어만 참고한 자체 구현입니다.
