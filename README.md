# newdesign

Next.js (App Router, TypeScript) site for MAX design.

```bash
npm install
npm run dev
```

- `components/Navbar.tsx` — navbar (Figma frame 1728 × 98)
- `components/Hero.tsx` — hero on the 1920 × 1017 Home artboard; coordinates in `Hero.module.css` are the Figma values (`--u` = 1px at 1920)
- `components/CtaButton.tsx` — pill button shared by the navbar and hero
- `components/About.tsx` — about section (Figma frame: 1920 × 1108, Tailwind CSS)
- `public/images/` — logo, pill graphic, background texture, video poster (exported from Figma)
- `public/video/` — hero intro clip, web-encoded (WebM + MP4)
- `app/fonts/` — Poppins, self-hosted via `next/font/local`
