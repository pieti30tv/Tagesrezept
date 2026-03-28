# Tagesrezept

A minimal web app that displays a random German recipe each day — at the press of a button.

---

## Features

- One button — press it, recipe appears.
- Daily quote, visible automatically without any interaction, changes every day.
- 300 recipes from German, Austrian, and South Tyrolean cuisine.
- Fully offline — no external API.
- Clean, warm design.

---

## Preview

```
TAGESREZEPT

Dein Rezept.
Für heute.

Jeden Morgen ein neues Rezept. Frisch für dich.

"Essen ist ein Bedürfnis, genießen ist eine Kunst."

        [ Rezept holen ]

┌─────────────────────────────────┐
│  Wiener Schnitzel               │
│  Österreich · Hauptgericht      │
│                                 │
│  Zutaten:                       │
│  ☐ 4 Kalbsschnitzel             │
│  ☐ 2 Eier                       │
│  ☐ 150 g Semmelbrösel           │
│  ...                            │
│                                 │
│  Zubereitung:                   │
│  1. Schnitzel klopfen...        │
│  2. Würzen und panieren...      │
└─────────────────────────────────┘
```

---

## Project Structure

```
tagesrezept/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── quotes.js
    └── recipes.js
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open at: http://localhost:5173

```bash
# Production build
npm run build
```

---

## Recipes

300 recipes across three cuisines:

| Cuisine        | Examples                                                   |
| -------------- | ---------------------------------------------------------- |
| German         | Sauerbraten, Rouladen, Kartoffelsuppe, Königsberger Klopse |
| Austrian       | Wiener Schnitzel, Tafelspitz, Kaiserschmarrn, Apfelstrudel |
| South Tyrolean | Schlutzkrapfen, Speckknödel, Tirtlan, Graukäsesuppe        |

All recipes are in German, with ingredients and step-by-step instructions.

---

## Quotes

300 quotes, changing daily — stable throughout the day (index based on calendar day). Sources include:

- Julia Child, Auguste Escoffier, Eckart Witzigmann
- German and Austrian proverbs
- Goethe, Schiller, Rilke
- Classic English quotes with German translation

---

## Design

| Element    | Value                    |
| ---------- | ------------------------ |
| Background | `#faf7f2`                |
| Accent     | `#b94a2c`                |
| Headlines  | Playfair Display (serif) |
| Body       | Inter (sans-serif)       |

No dark mode, no gradients, no glassmorphism.

---

## Compatibility

- Tablet and desktop
- All modern browsers

---

## Stack

- React 18
- Vite
- Google Fonts (Playfair Display, Inter)
- Plain CSS
