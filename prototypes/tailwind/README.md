# Thesis Prototype: Tailwind CSS Implementation

This repository contains the Tailwind CSS implementation of the standardized `AdminPanel X` dashboard prototype. It is created as part of a bachelor thesis comparing different CSS frameworks (Bootstrap, Bulma, Foundation, and Tailwind CSS).

## Performance Comparison Note

To ensure fair performance, load-time, and resource-size measurements across all CSS frameworks, this implementation compiles all styles locally into a static, minified CSS stylesheet (`dist/output.css`). 

Unlike the Tailwind Play CDN, which loads a large runtime JavaScript engine into the browser to parse class names dynamically, this static setup compiles the stylesheet ahead of time (AOT) and includes **only the utility classes actually used in the HTML file**. This reflects a realistic production environment and produces a standardized resource size for the comparison framework.

---

## Getting Started

Follow the steps below to set up, build, and run the Tailwind CSS prototype.

### 1. Install Dependencies
Initialize and install the required Tailwind CSS CLI tool as specified in `package.json`:
```bash
npm install
```

### 2. Build the Tailwind CSS File
To compile the source `input.css` (which contains core Tailwind directives) into a minified static production file `dist/output.css`:
```bash
npm run build
```

Alternatively, to start Tailwind's active watch mode (which rebuilds the stylesheet automatically whenever you modify `index.html`):
```bash
npm run watch
```

### 3. Local Preview
To preview the styled dashboard inside your web browser, you can host a simple static server in the root of the project directory.

For example, using Node's built-in `npx` utility:
```bash
npx live-server
```
or
```bash
npx serve
```

Alternatively, you can open `index.html` directly in any web browser.

---

## File Structure

- `index.html` — Replicated HTML structure containing Tailwind utility classes, standardized measurement hooks (`data-section`), comments, and a minimal mobile menu toggling script.
- `input.css` — Core Tailwind compilation entry point.
- `tailwind.config.js` — Scans `index.html` to generate only active utility classes.
- `package.json` — Manages scripts and devDependencies.
- `dist/output.css` — Compiled, optimized, and minified CSS stylesheet linked by `index.html`.
- `README.md` — Setup and run documentation.
