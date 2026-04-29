# NLNB Risk Assessment Tool — How to Run

## Easiest option (pre-built, no install required)

A production build is already included in the `dist/` folder. You just need a local web server to open it (double-clicking `index.html` will not work because modern browsers block JavaScript modules loaded from `file://`).

### Mac / Linux

```bash
./start.sh
```

This starts a local server and opens the tool in your browser at http://localhost:8000.

### Windows

Double-click `start.bat` (or run it from a command prompt). Same result — opens at http://localhost:8000.

### Manual fallback (any OS with Python installed)

```bash
cd dist
python3 -m http.server 8000
```

Then open http://localhost:8000 in a browser.

## Developer option (rebuild from source)

Requires Node.js 18+ (https://nodejs.org).

```bash
npm install
npm run dev
```

Opens at http://localhost:5173 with hot-reload.

To rebuild the production `dist/` folder:

```bash
npm run build
```

## Public deployment

The `dist/` folder is a fully static site. It can be dropped into Vercel, Netlify, GitHub Pages, or any static host without further configuration. `vite.config.js` is set to `base: './'` so it works from any path.
