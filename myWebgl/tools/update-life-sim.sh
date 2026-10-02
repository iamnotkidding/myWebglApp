#!/usr/bin/env bash
# Rebuilds the bundled 3D Life Sim (MIT, https://github.com/kajukabla/3d-life-sim) into
# app/src/main/assets/demos/life-sim. Needs git and Node.js 22+ (pnpm is fetched via npx).
#   tools/update-life-sim.sh [commit]     default: the pinned commit below
set -euo pipefail

REPO=https://github.com/kajukabla/3d-life-sim.git
COMMIT=${1:-c482627d7c966053d060c6043fd16851eaa337dc}
ROOT=$(cd "$(dirname "$0")/.." && pwd)
DEST="$ROOT/app/src/main/assets/demos/life-sim"
WORK=$(mktemp -d)
trap 'rm -rf "$WORK"' EXIT

git clone -q "$REPO" "$WORK/src"
git -C "$WORK/src" checkout -q "$COMMIT"
(
  cd "$WORK/src"
  npx -y pnpm@10.28.2 install --frozen-lockfile
  # Relative base so the bundle works from any directory inside the APK.
  npx -y pnpm@10.28.2 exec vite build --base=./
)

rm -rf "$DEST"
mkdir -p "$DEST"
cp -r "$WORK/src/dist/index.html" "$WORK/src/dist/assets" "$DEST/"
cp "$WORK/src/LICENSE" "$DEST/LICENSE.txt"
cp "$WORK/src/THIRD_PARTY_NOTICES.md" "$DEST/THIRD_PARTY_NOTICES.md"

# Load the app's adapter (fps report for timed runs, hud=0) before the simulation module.
sed -i 's|    <script type="module" crossorigin|    <!-- myWebgl: fps report + HUD toggle for adb test runs (see ../life-sim-hook.js) -->\n    <script src="../life-sim-hook.js"></script>\n    <script type="module" crossorigin|' "$DEST/index.html"
echo "3D Life Sim $COMMIT -> $DEST"
