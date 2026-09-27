# Adrian Neubauer — Portfolio

🌐 **Live:** https://vgclp.github.io/adrian-portfolio/

Persönliche Bewerbungswebsite für IT-Ausbildungen & Praktika
(Fachinformatiker für Systemintegration).

## Stack

Next.js 14 · React 18 · Tailwind CSS 3 · Framer Motion · Lucide Icons

## Starten

```bash
cd /home/vgz/portfolio
npm install
npm run dev      # Entwicklung: http://localhost:3000
npm run build && npm run start   # Produktion
```

## Struktur

- `app/layout.tsx` — SEO-Meta, Fonts (Space Grotesk + JetBrains Mono)
- `app/page.tsx` — Hero + Über mich (mit Typing-Animation, Statistiken)
- `app/globals.css` — Glassmorphism, Neon-Effekte, Grid-/Hex-Background
- `components/` — Preloader, ScrollProgress, CursorGlow, Background,
  Navbar, Skills, Projects, Ausbildung (Bewerbung + klickbare Timeline),
  Contact, Footer

## Features

Ladeanimation, Scroll-Progress-Bar, Typing-Animation, Maus-Parallax,
animierte Partikel + Grid/Hexagon-Hintergrund, Cursor-Glow, animierte
Zähler, klickbare Projekt-Karten & Timeline, Taste `C` öffnet Kontakt,
Smooth Scrolling, voll responsiv, SEO-optimiert.
