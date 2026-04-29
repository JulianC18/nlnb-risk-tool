#!/usr/bin/env bash
# NLNB Risk Assessment Tool — one-click launcher (Mac / Linux)
# Serves the pre-built dist/ folder and opens it in the default browser.

set -e
cd "$(dirname "$0")"

PORT=8000

if [ ! -d "dist" ]; then
  echo "dist/ folder missing. Building now (requires Node.js + npm)..."
  npm install
  npm run build
fi

echo "Starting local server on http://localhost:$PORT"
echo "Press Ctrl+C to stop."

# Prefer python3, fall back to python
if command -v python3 >/dev/null 2>&1; then
  (sleep 1 && open "http://localhost:$PORT") &
  python3 -m http.server "$PORT" --directory dist
elif command -v python >/dev/null 2>&1; then
  (sleep 1 && open "http://localhost:$PORT") &
  python -m http.server "$PORT" --directory dist
else
  echo "Python not found. Trying npx serve..."
  npx --yes serve dist -l "$PORT"
fi
