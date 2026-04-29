@echo off
REM NLNB Risk Assessment Tool - one-click launcher (Windows)
REM Serves the pre-built dist\ folder and opens it in the default browser.

cd /d "%~dp0"

set PORT=8000

if not exist "dist" (
    echo dist\ folder missing. Building now ^(requires Node.js + npm^)...
    call npm install
    call npm run build
)

echo Starting local server on http://localhost:%PORT%
echo Press Ctrl+C to stop.

start "" "http://localhost:%PORT%"

where python >nul 2>&1
if %ERRORLEVEL%==0 (
    python -m http.server %PORT% --directory dist
    goto :eof
)

where py >nul 2>&1
if %ERRORLEVEL%==0 (
    py -m http.server %PORT% --directory dist
    goto :eof
)

echo Python not found. Trying npx serve...
npx --yes serve dist -l %PORT%
