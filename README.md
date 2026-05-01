# Coverage Schematic Landing Page

Phase 1 landing page for Coverage Schematic, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

If a previously running dev server shows a blank page after a production build,
restart it or run a fresh preview on another port:

```bash
npm run dev -- -p 3001
```

## Build

```bash
npm run build
```

## Notes

- All visuals are placeholder UI built from HTML and Tailwind classes.
- Buttons currently link to `#pricing` and `#sample-export`.
- The horizontal process section uses a sticky viewport and maps vertical scroll progress to horizontal movement with Framer Motion.
