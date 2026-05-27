<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=14,17,22&height=200&section=header&text=WaifuWiki&fontSize=80&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Your%20Personal%20Waifu%20Encyclopedia&descSize=20&descAlignY=55&descAlign=50" alt="WaifuWiki Banner" width="100%"/>
</p>

<p align="center">
  <a href="https://github.com/Shineii86/WaifuWiki/stargazers"><img src="https://img.shields.io/github/stars/Shineii86/WaifuWiki?style=for-the-badge&logo=github&color=f43f8e&logoColor=white" alt="Stars"/></a>
  <a href="https://github.com/Shineii86/WaifuWiki/network/members"><img src="https://img.shields.io/github/forks/Shineii86/WaifuWiki?style=for-the-badge&logo=github&color=a855f7&logoColor=white" alt="Forks"/></a>
  <a href="https://github.com/Shineii86/WaifuWiki/issues"><img src="https://img.shields.io/github/issues/Shineii86/WaifuWiki?style=for-the-badge&logo=github&color=7c3aed&logoColor=white" alt="Issues"/></a>
  <a href="https://github.com/Shineii86/WaifuWiki/pulls"><img src="https://img.shields.io/github/issues-pr/Shineii86/WaifuWiki?style=for-the-badge&logo=github&color=ec4899&logoColor=white" alt="Pull Requests"/></a>
  <a href="https://github.com/Shineii86/WaifuWiki/commits"><img src="https://img.shields.io/github/last-commit/Shineii86/WaifuWiki?style=for-the-badge&logo=github&color=6366f1&logoColor=white" alt="Last Commit"/></a>
  <a href="https://github.com/Shineii86/WaifuWiki/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Shineii86/WaifuWiki?style=for-the-badge&logo=mit&color=22c55e&logoColor=white" alt="License"/></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Framer%20Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion"/>
  <img src="https://img.shields.io/badge/React%20Router-7-CA4245?style=flat-square&logo=reactrouter&logoColor=white" alt="React Router"/>
  <img src="https://img.shields.io/badge/Node.js-20-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/License-MIT-22c55e?style=flat-square&logo=mit&logoColor=white" alt="License"/>
  <img src="https://img.shields.io/badge/Version-1.2.0-f43f8e?style=flat-square&logoColor=white" alt="Version"/>
</p>

<p align="center">
  <b>A curated encyclopedia of beloved characters from anime, manhwa, and webtoons.</b><br/>
  Discover detailed profiles, ratings, image galleries, and more — all in one beautifully crafted app.<br/>
  Built with modern web technologies for a smooth, immersive experience.
</p>

<p align="center">
  <a href="#-table-of-contents">Table of Contents</a> &bull;
  <a href="#-features">Features</a> &bull;
  <a href="#-demo">Demo</a> &bull;
  <a href="#-quick-start">Quick Start</a> &bull;
  <a href="#-deployment">Deployment</a> &bull;
  <a href="#-contributing">Contributing</a>
</p>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Configuration](#-configuration)
- [Waifu Data Schema](#-waifu-data-schema)
- [Design System](#-design-system)
- [Component Reference](#-component-reference)
- [Routing](#-routing)
- [Animation System](#-animation-system)
- [Deployment](#-deployment)
- [Available Scripts](#-available-scripts)
- [Environment & Browser Support](#-environment--browser-support)
- [Performance](#-performance)
- [Screenshots](#-screenshots)
- [Changelog Highlights](#-changelog-highlights)
- [Troubleshooting](#-troubleshooting)
- [FAQ](#-faq)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Acknowledgements](#-acknowledgements)
- [License](#-license)
- [Author](#-author)
- [Star History](#-star-history)

---

## 🌸 Overview

**WaifuWiki** is a personal wiki for tracking and showcasing your favorite characters from anime, manga, manhwa, and webtoons. It's designed to be **simple to maintain** — just edit a single JSON file (`waifus.json`) and redeploy!

> 💡 No database, no backend, no complex setup. Pure frontend — just data-driven content.

### Why WaifuWiki?

- 📝 **Simple Data Model** — Edit `src/data/waifus.json` to add, update, or remove characters
- 🎨 **Beautiful Design** — Rose-violet glassmorphism dark theme with smooth animations
- ⚡ **Blazing Fast** — Vite-powered builds with static output for instant loading
- 📱 **Fully Responsive** — Works perfectly on desktop, tablet, and mobile
- 🔍 **Search & Filter** — Find characters by name, source, type, tags, or rating
- 🖼️ **Image Gallery** — Lightbox gallery with keyboard navigation
- 🚀 **Easy Deploy** — One-click deploy to Vercel, Netlify, or GitHub Pages
- 🔤 **Beautiful Typography** — Outfit display font paired with Inter body font
- 🌈 **Custom Design Tokens** — Full HSL-based color system with CSS variables
- ♿ **Accessible** — Semantic HTML, keyboard navigation, and ARIA-friendly components

### How It Works

```
┌─────────────────────────────────────────────────────────┐
│                    waifus.json                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ Character │  │ Character │  │ Character │  ...        │
│  │   Data    │  │   Data    │  │   Data    │              │
│  └─────┬────┘  └─────┬────┘  └─────┬────┘              │
│        │              │              │                    │
│        └──────────────┼──────────────┘                    │
│                       │                                   │
│                       ▼                                   │
│              ┌────────────────┐                           │
│              │   React App    │                           │
│              │  (Vite Build)  │                           │
│              └───────┬────────┘                           │
│                      │                                    │
│          ┌───────────┼───────────┐                        │
│          ▼           ▼           ▼                        │
│    ┌──────────┐ ┌──────────┐ ┌──────────┐               │
│    │ HomePage │ │ WaifuPage│ │ NotFound │               │
│    │  (Grid)  │ │(Profile) │ │  (404)   │               │
│    └──────────┘ └──────────┘ └──────────┘               │
│                                                          │
│         Static HTML + CSS + JS → Deploy                   │
└─────────────────────────────────────────────────────────┘
```

---

## ✨ Features

<table>
  <tr>
    <td>

### 🏠 Home Page
- 🎴 Dynamic waifu grid with staggered card animations
- 🔎 Real-time search by name, source, or tags
- 🎯 Filter by type (Anime, Manhwa, Webtoon)
- 📊 Sort by rating, name, or type
- 🏷️ Collapsible tag filter panel with count badge
- 📈 Stats overview (total characters, anime count, manhwa count, avg rating)
- 🎭 Animated hero section with floating orb backgrounds
- ✨ Gradient text headings with shimmer effects

    </td>
    <td>

### 📄 Detail Pages
- 👤 Full character profile with rich metadata
- 🖼️ High-quality image with pink glow border effect
- ⭐ Rating stars with numeric display (1-10 scale)
- 🎙️ Voice actor & first appearance info cards
- 💚 Traits, likes (green), and dislikes (red) sections
- 🖼️ Image gallery with lightbox viewer
- ⌨️ Keyboard navigation (← → arrows, Escape)
- 🏷️ Tag pills with hover animations

    </td>
  </tr>
  <tr>
    <td>

### 🎨 Design System
- 🔤 Outfit font for display headings (600-900 weight)
- 🔤 Inter font for body text (300-700 weight)
- 🌈 Rose-violet gradient accents throughout
- 🪟 Glassmorphism navbar & footer with blur
- 🫧 Floating orb background animations
- 📜 Custom scrollbar with gradient thumb
- 🎨 Noise texture overlay for depth
- 🌑 Deep dark backgrounds (#0f0e17 range)

    </td>
    <td>

### 🔧 Developer Experience
- 🔷 TypeScript for full type safety
- 🎨 Tailwind CSS utility-first classes
- 🎭 Framer Motion for production animations
- 🧱 shadcn/ui component library (40+ components)
- 🔍 ESLint for code quality
- ⚡ Hot Module Replacement (HMR)
- 📦 Static export ready for any host
- 🪝 Custom React hooks (useIsMobile)

    </td>
  </tr>
</table>

### 🌟 Feature Highlights

| Feature | Description | Status |
|:---|:---|:---:|
| 🔍 Global Search | Search across names, sources, and tags in real-time | ✅ |
| 🎯 Type Filtering | Filter by Anime, Manhwa, or Webtoon/Manhwa | ✅ |
| 🏷️ Tag Filtering | Collapsible tag panel with one-click filtering | ✅ |
| 📊 Multi-Sort | Sort by rating, name (A-Z/Z-A), or type | ✅ |
| 🖼️ Image Gallery | Lightbox with keyboard nav and counter | ✅ |
| 📱 Responsive | Mobile-first with hamburger menu | ✅ |
| 🎭 Animations | Staggered cards, floating orbs, heartbeats | ✅ |
| 🌑 Dark Theme | Deep dark with rose-violet accents | ✅ |
| ⚡ Static Export | Build to `dist/` for any static host | ✅ |
| 🚀 One-Click Deploy | Vercel, Netlify, GitHub Pages configs included | ✅ |
| 🌙 Light Mode | Toggle between dark and light themes | 🔜 |
| 🔖 Favorites | Bookmark characters with localStorage | 🔜 |
| 📱 PWA Support | Install as app on mobile devices | 🔜 |
| 🌐 i18n | Multi-language support | 🔜 |

---

## 🎬 Demo

> 🌐 **Live Preview** — Deploy your own instance and see it in action!

<p align="center">
  <img src="https://github.com/Shineii86/WaifuWiki/blob/main/images/MaiSakurajima/MaiSakurajima0.png" alt="WaifuWiki Preview" width="700" style="border-radius: 12px; border: 2px solid rgba(244, 63, 142, 0.3);"/>
</p>

### 🎴 Character Cards Preview

<p align="center">
  <img src="https://github.com/Shineii86/WaifuWiki/blob/main/images/Rem/Rem0.png" alt="Rem" width="200" style="border-radius: 8px; margin: 4px;"/>
  <img src="https://github.com/Shineii86/WaifuWiki/blob/main/images/YorForger/YorForger0.png" alt="Yor Forger" width="200" style="border-radius: 8px; margin: 4px;"/>
  <img src="https://github.com/Shineii86/WaifuWiki/blob/main/images/Navier/Navier0.png" alt="Navier" width="200" style="border-radius: 8px; margin: 4px;"/>
</p>

---

## 🛠️ Tech Stack

| Technology | Purpose | Version | Documentation |
|:---|:---|:---|:---|
| ⚛️ [React](https://react.dev/) | UI library for building interfaces | 19.2 | [Docs](https://react.dev/learn) |
| 🔷 [TypeScript](https://www.typescriptlang.org/) | Static type checking | 5.9 | [Docs](https://www.typescriptlang.org/docs/) |
| ⚡ [Vite](https://vite.dev/) | Build tool & dev server | 7.2 | [Docs](https://vite.dev/guide/) |
| 🎨 [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework | 3.4 | [Docs](https://tailwindcss.com/docs/) |
| 🎭 [Framer Motion](https://www.framer.com/motion/) | Production-ready animations | 12.40 | [Docs](https://www.framer.com/motion/introduction/) |
| 🧭 [React Router](https://reactrouter.com/) | Client-side routing | 7.6 | [Docs](https://reactrouter.com/start/) |
| 🧱 [shadcn/ui](https://ui.shadcn.com/) | Re-usable UI components (Radix) | Latest | [Docs](https://ui.shadcn.com/docs/) |
| 📦 [Lucide React](https://lucide.dev/) | Beautiful icon library | 0.562 | [Docs](https://lucide.dev/guide/) |
| 🎭 [CVA](https://cva.style/) | Class variance authority | 0.7 | [Docs](https://cva.style/docs/) |
| 🔤 [Outfit](https://fonts.google.com/specimen/Outfit) | Display typography | — | [Specimen](https://fonts.google.com/specimen/Outfit) |
| 🔤 [Inter](https://fonts.google.com/specimen/Inter) | Body typography | — | [Specimen](https://fonts.google.com/specimen/Inter) |

### 📦 Key Dependencies

```json
{
  "react": "^19.2.0",           // UI library
  "react-dom": "^19.2.0",       // DOM renderer
  "react-router": "^7.6.0",     // Client routing
  "framer-motion": "^12.40.0",  // Animations
  "lucide-react": "^0.562.0",   // Icons
  "tailwindcss": "^3.4.19",     // CSS framework
  "clsx": "^2.1.1",             // Class merging
  "tailwind-merge": "^3.2.0",   // Tailwind class dedup
  "class-variance-authority": "^0.7.1"  // Component variants
}
```

---

## 🏗️ Architecture

### Data Flow

```
waifus.json ──► React Components ──► Static HTML
     │               │                    │
     │          ┌────┴────┐               │
     │          │         │               │
     ▼          ▼         ▼               ▼
  Import    HomePage   WaifuPage     dist/ output
  (static)  (filter)  (detail)      (deploy)
```

### Routing Architecture

```
HashRouter
├── /                → HomePage    (grid + search + filters)
├── /waifu/:slug     → WaifuPage   (character profile)
├── /404             → NotFoundPage (custom 404)
└── /*               → NotFoundPage (catch-all)
```

> 💡 Uses `HashRouter` for static hosting compatibility — no server-side routing needed.

### Component Hierarchy

```
App.tsx (Router)
├── HomePage.tsx
│   ├── Navbar.tsx (with search)
│   ├── FilterBar.tsx
│   ├── WaifuCard.tsx (× N)
│   └── Footer.tsx
├── WaifuPage.tsx
│   ├── Navbar.tsx (no search)
│   ├── ImageGallery.tsx
│   └── Footer.tsx
└── NotFoundPage.tsx
```

### CSS Architecture

```
index.css
├── CSS Variables (HSL tokens)
│   ├── --background, --foreground
│   ├── --card, --popover
│   ├── --primary, --secondary, --accent
│   ├── --muted, --destructive
│   ├── --border, --input, --ring
│   └── --font-display, --font-body
├── Base styles (body, headings, scrollbar)
├── Utility classes (.gradient-text, .glow-pink, .glass)
├── Animation keyframes (orb-float, heartbeat, shimmer)
└── Component styles (.card-lift, .img-zoom, .tag-pill)
```

---

## 📁 Project Structure

```
WaifuWiki/
├── 📂 .github/
│   └── 📂 workflows/
│       └── 📄 deploy.yml              # 🚀 GitHub Pages CI/CD
│
├── 📂 images/                          # 🖼️ Character image assets
│   ├── 📂 MaiSakurajima/              #    Mai Sakurajima gallery
│   │   ├── 🖼️ MaiSakurajima0.png      #    Main portrait
│   │   ├── 🖼️ MaiSakurajima1.png      #    Gallery image 1
│   │   ├── 🖼️ MaiSakurajima2.png      #    Gallery image 2
│   │   └── 🖼️ MaiSakurajima3.png      #    Gallery image 3
│   ├── 📂 Navier/                      #    Navier Ellie Trovi gallery
│   │   ├── 🖼️ Navier0.png
│   │   ├── 🖼️ Navier1.png
│   │   ├── 🖼️ Navier2.png
│   │   ├── 🖼️ Navier3.png
│   │   ├── 🖼️ Navier4.png
│   │   └── 🖼️ Navier5.png
│   ├── 📂 Rem/                         #    Rem gallery
│   │   ├── 🖼️ Rem0.png
│   │   ├── 🖼️ Rem1.png
│   │   ├── 🖼️ Rem2.png
│   │   ├── 🖼️ Rem3.png
│   │   ├── 🖼️ Rem4.png
│   │   └── 🖼️ Rem5.png
│   ├── 📂 SeoYuna/                     #    Seo Yuna gallery
│   │   ├── 🖼️ SeoYuna0.png
│   │   ├── 🖼️ SeoYuna1.png
│   │   └── 🖼️ SeoYuna2.png
│   └── 📂 YorForger/                   #    Yor Forger gallery
│       ├── 🖼️ YorForger0.png
│       ├── 🖼️ YorForger1.png
│       ├── 🖼️ YorForger2.png
│       ├── 🖼️ YorForger3.png
│       └── 🖼️ YorForger4.png
│
├── 📂 src/
│   ├── 📂 components/                  # 🧩 Reusable UI components
│   │   ├── 📂 ui/                      #    shadcn/ui primitives (40+)
│   │   │   ├── 📄 accordion.tsx        #       Accordion component
│   │   │   ├── 📄 alert.tsx            #       Alert component
│   │   │   ├── 📄 avatar.tsx           #       Avatar component
│   │   │   ├── 📄 badge.tsx            #       Badge component
│   │   │   ├── 📄 button.tsx           #       Button component
│   │   │   ├── 📄 card.tsx             #       Card component
│   │   │   ├── 📄 dialog.tsx           #       Dialog/modal component
│   │   │   ├── 📄 dropdown-menu.tsx    #       Dropdown menu
│   │   │   ├── 📄 input.tsx            #       Input field
│   │   │   ├── 📄 select.tsx           #       Select dropdown
│   │   │   ├── 📄 separator.tsx        #       Divider
│   │   │   ├── 📄 skeleton.tsx         #       Loading skeleton
│   │   │   ├── 📄 tabs.tsx             #       Tab navigation
│   │   │   ├── 📄 tooltip.tsx          #       Tooltip
│   │   │   └── 📄 ... (30+ more)       #       And many more...
│   │   ├── 📄 Navbar.tsx               #    🔝 Sticky glassmorphism navbar
│   │   ├── 📄 Footer.tsx               #    🔚 Site footer with links
│   │   ├── 📄 WaifuCard.tsx            #    🎴 Character preview card
│   │   ├── 📄 FilterBar.tsx            #    🎯 Search, filter & sort
│   │   └── 📄 ImageGallery.tsx         #    🖼️ Lightbox image viewer
│   │
│   ├── 📂 pages/                       # 📄 Route page components
│   │   ├── 📄 HomePage.tsx             #    🏠 Main collection grid
│   │   ├── 📄 WaifuPage.tsx            #    👤 Character profile page
│   │   └── 📄 NotFoundPage.tsx         #    ❌ 404 error page
│   │
│   ├── 📂 data/
│   │   └── 📄 waifus.json              # ⭐ Character database (edit this!)
│   │
│   ├── 📂 hooks/
│   │   └── 📄 use-mobile.ts            #    📱 Mobile detection hook
│   │
│   ├── 📂 lib/
│   │   └── 📄 utils.ts                 #    🔧 Utility functions (cn)
│   │
│   ├── 📄 App.tsx                      # 🏗️ Root component with routing
│   ├── 📄 main.tsx                     # 🚀 Entry point (renders App)
│   └── 📄 index.css                    # 🎨 Global styles & CSS tokens
│
├── 📄 CHANGELOG.md                     # 📝 Version history
├── 📄 LICENSE                          # 📜 MIT License
├── 📄 README.md                        # 📖 This file
├── 📄 components.json                  # 🧱 shadcn/ui configuration
├── 📄 eslint.config.js                 # 🔍 ESLint rules
├── 📄 index.html                       # 🌐 HTML entry point
├── 📄 netlify.toml                     # 🟢 Netlify deployment config
├── 📄 package.json                     # 📦 Dependencies & scripts
├── 📄 postcss.config.js                # 🎨 PostCSS settings
├── 📄 tailwind.config.js               # 🎨 Tailwind CSS configuration
├── 📄 tsconfig.json                    # 🔷 TypeScript configuration
├── 📄 tsconfig.app.json                # 🔷 App-specific TS config
├── 📄 tsconfig.node.json               # 🔷 Node-specific TS config
├── 📄 vercel.json                      # ▲ Vercel deployment config
└── 📄 vite.config.ts                   # ⚡ Vite build configuration
```

---

## 🚀 Quick Start

### Prerequisites

| Requirement | Minimum | Recommended |
|:---|:---|:---|
| 📦 Node.js | 18.0+ | 20.x LTS |
| 📦 npm | 9.0+ | 10.x |
| 💻 OS | Windows, macOS, Linux | Any |
| 🌐 Browser | Chrome 90+, Firefox 88+, Safari 15+ | Latest |

### 🔧 Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Shineii86/WaifuWiki.git
cd WaifuWiki

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start development server
npm run dev
```

> 🌐 Open [http://localhost:3000](http://localhost:3000) in your browser.

### 🏗️ Build for Production

```bash
# Build optimized static files
npm run build

# Preview the production build locally
npm run preview
```

> 📦 Output is in the `dist/` directory — ready for deployment to any static host.

### 🐳 Alternative Package Managers

```bash
# Using yarn
yarn install
yarn dev

# Using pnpm
pnpm install
pnpm dev

# Using bun
bun install
bun dev
```

---

## ⚙️ Configuration

All character data lives in a single file: **`src/data/waifus.json`**

### ➕ Adding a New Character

Append a new object to the array in `waifus.json`:

```json
{
  "slug": "zero-two",
  "name": "Zero Two",
  "source": "DARLING in the FRANXX",
  "type": "Anime",
  "image": "https://example.com/zero-two-main.jpg",
  "images": [
    "https://example.com/zero-two-1.jpg",
    "https://example.com/zero-two-2.jpg",
    "https://example.com/zero-two-3.jpg"
  ],
  "description": "Zero Two is the deuteragonist of DARLING in the FRANXX. She is a human-klaxo sapien hybrid and a member of APE's special unit. Known for her red horns and striking appearance, she pilots the FRANXX unit Strelizia. Her real name is 002, and she was once known as 'The Partner Killer' due to the fate of her previous stamen partners.",
  "firstAppearance": "Episode 1: Alone and Lonesome",
  "voiceActor": "Haruka Tomatsu (Japanese), Tia Ballard (English)",
  "traits": ["Bold", "Mysterious", "Playful", "Fierce", "Loyal"],
  "likes": ["Hiro", "Strelizia", "Fighting", "Mischief", "Freedom"],
  "dislikes": ["APE", "Being controlled", "Loneliness", "The Klaxosaur Princess"],
  "rating": 9,
  "tags": ["mecha", "pilot", "darling", "horns", "hybrid"]
}
```

> ⚠️ The `slug` must be URL-safe (lowercase, hyphens, no spaces) and unique across all entries.

### ✏️ Editing a Character

Modify any field directly in `waifus.json`. Changes are reflected on rebuild.

### 🗑️ Deleting a Character

Remove the object from the array and rebuild. Optionally delete the corresponding image folder from `images/`.

### 🖼️ Adding Character Images

1. Create a folder in `images/` named after the character (e.g., `images/ZeroTwo/`)
2. Add images named `{CharacterName}0.png`, `{CharacterName}1.png`, etc.
3. Reference them in the `image` and `images` fields of `waifus.json`
4. For external images, use full URLs (ensure CORS allows loading)

---

## 📋 Waifu Data Schema

| Field | Type | Required | Description | Example |
|:---|:---|:---:|:---|:---|
| `slug` | `string` | ✅ | URL-safe unique identifier | `"mai-sakurajima"` |
| `name` | `string` | ✅ | Character's display name | `"Mai Sakurajima"` |
| `source` | `string` | ✅ | Anime / Manhwa / Webtoon title | `"Rascal Does Not Dream..."` |
| `type` | `string` | ✅ | Media type | `"Anime"` |
| `image` | `string` | ✅ | Main character image URL | `"https://..."` |
| `images` | `string[]` | ✅ | Gallery image URLs | `["https://..."]` |
| `description` | `string` | ✅ | Detailed biography (2-5 paragraphs) | `"Mai Sakurajima is..."` |
| `firstAppearance` | `string` | ✅ | First episode/chapter | `"Episode 1"` |
| `voiceActor` | `string` | ❌ | Voice actor name(s) | `"Asami Seto (JP)"` |
| `traits` | `string[]` | ✅ | Personality traits (3-6) | `["Mature", "Caring"]` |
| `likes` | `string[]` | ✅ | Things they like (3-5) | `["Sakuta", "Acting"]` |
| `dislikes` | `string[]` | ✅ | Things they dislike (3-5) | `["Being ignored"]` |
| `rating` | `number` | ✅ | Rating from 1–10 | `10` |
| `tags` | `string[]` | ✅ | Searchable tags (3-8) | `["bunny-girl", "senpai"]` |

### Valid Type Values

| Value | Color | Description |
|:---|:---|:---|
| `Anime` | 🩷 Pink | Japanese animated series |
| `Manhwa` | 💙 Blue | Korean comics |
| `Webtoon/Manhwa` | 💚 Green | Korean webtoons |

---

## 🎨 Design System

### 🌈 Color Palette

| Token | HSL Value | Preview | Usage |
|:---|:---|:---|:---|
| `--background` | `250 20% 6%` | ![#0a0a14](https://via.placeholder.com/16/0a0a14/0a0a14.png) `#0a0a14` | Page background |
| `--card` | `250 16% 9%` | ![#13111f](https://via.placeholder.com/16/13111f/13111f.png) `#13111f` | Card surfaces |
| `--primary` | `330 90% 60%` | ![#f43f8e](https://via.placeholder.com/16/f43f8e/f43f8e.png) `#f43f8e` | Primary actions |
| `--secondary` | `270 70% 55%` | ![#a855f7](https://via.placeholder.com/16/a855f7/a855f7.png) `#a855f7` | Secondary accents |
| `--accent` | `290 75% 55%` | ![#c026d3](https://via.placeholder.com/16/c026d3/c026d3.png) `#c026d3` | Highlights |
| `--muted` | `250 10% 14%` | ![#22202f](https://via.placeholder.com/16/22202f/22202f.png) `#22202f` | Muted backgrounds |
| `--foreground` | `0 0% 96%` | ![#f5f5f5](https://via.placeholder.com/16/f5f5f5/f5f5f5.png) `#f5f5f5` | Body text |
| `--border` | `250 10% 16%` | ![#28263a](https://via.placeholder.com/16/28263a/28263a.png) `#28263a` | Borders |

### Gradient System

```css
/* Primary gradient (headings, CTAs) */
background: linear-gradient(135deg, #f43f8e, #a855f7, #7c3aed);

/* Surface gradient (hero background) */
background: linear-gradient(180deg, rgba(244, 63, 142, 0.06) 0%, transparent 40%);

/* Glow gradient (radial, for orbs) */
background: radial-gradient(ellipse at center, rgba(244, 63, 142, 0.15) 0%, transparent 70%);

/* Divider gradient */
background: linear-gradient(90deg, transparent, hsl(330 90% 60% / 0.2), hsl(270 70% 55% / 0.2), transparent);
```

### 🔤 Typography

| Role | Font | Weights | Sizes | Usage |
|:---|:---|:---|:---|:---|
| Display | **Outfit** | 600, 700, 800, 900 | 2xl – 7xl | Page titles, headings |
| Body | **Inter** | 300, 400, 500, 600, 700 | xs – lg | Paragraphs, labels, UI |

### 📐 Spacing & Sizing

| Token | Value | Usage |
|:---|:---|:---|
| `--radius` | `1rem` | Base border radius |
| `rounded-xl` | `calc(var(--radius) + 4px)` | Large elements |
| `rounded-lg` | `var(--radius)` | Cards, buttons |
| `rounded-md` | `calc(var(--radius) - 2px)` | Inputs, small elements |
| `rounded-sm` | `calc(var(--radius) - 4px)` | Tags, badges |

---

## 🧩 Component Reference

### Navbar

```tsx
interface NavbarProps {
  searchQuery?: string          // Current search input value
  onSearchChange?: (query: string) => void  // Search callback
  showSearch?: boolean          // Show/hide search bar (default: true)
}
```

**Features:**
- 🪟 Glassmorphism blur background
- 📱 Responsive with hamburger menu on mobile
- 🔍 Integrated search bar with focus scale animation
- ❤️ Animated heartbeat logo icon
- 🔗 Navigation links to Home

### WaifuCard

```tsx
interface WaifuCardProps {
  waifu: Waifu     // Waifu data object
  index: number     // Card index (for stagger animation delay)
}
```

**Features:**
- 🎴 3:4 aspect ratio image with hover zoom
- 🏷️ Type badge (color-coded by media type)
- ❤️ Hover-reveal favorite heart button
- ⭐ 10-star rating display with count
- 🏷️ Trait badges (max 3) and tag pills (max 3)
- ⬆️ Card lift animation on hover with shadow
- ➡️ "View Profile" link with arrow animation

### FilterBar

```tsx
interface FilterBarProps {
  selectedType: string      // Currently selected type filter
  onTypeChange: (type: string) => void
  selectedTag: string       // Currently selected tag
  onTagChange: (tag: string) => void
  sortBy: string            // Current sort option
  onSortChange: (sort: string) => void
  allTags: string[]         // All available tags
  allTypes: string[]        // All available types
  resultCount: number       // Number of filtered results
}
```

**Features:**
- 🎯 Type filter buttons (gradient active state)
- 📊 Sort dropdown (rating, name A-Z/Z-A, type)
- 🏷️ Collapsible tag panel with count badge
- ❌ Clear filters button (appears when filters active)
- 📈 Result count display

### ImageGallery

```tsx
interface ImageGalleryProps {
  images: string[]   // Array of image URLs
  name: string       // Character name (for alt text)
}
```

**Features:**
- 🖼️ Responsive grid (2 cols mobile, 3 cols desktop)
- 🔍 Zoom icon on hover overlay
- ⌨️ Keyboard navigation (← → arrows, Escape to close)
- 🔄 Swipe-like counter display (1 / N)
- ✨ Smooth open/close animations with AnimatePresence
- 🖱️ Click outside to close lightbox

### Footer

**Features:**
- 🪟 Glassmorphism background
- ❤️ Animated heartbeat logo
- 🔗 Home and GitHub links
- 👤 Author credit with link

---

## 🧭 Routing

| Path | Component | Description |
|:---|:---|:---|
| `/` | `HomePage` | Main collection grid with search & filters |
| `/waifu/:slug` | `WaifuPage` | Individual character profile |
| `/404` | `NotFoundPage` | Custom 404 error page |
| `*` | `NotFoundPage` | Catch-all for undefined routes |

> 💡 Uses `HashRouter` (`/#/path`) for static hosting compatibility. No server configuration needed.

### Adding a New Page

```tsx
// 1. Create src/pages/AboutPage.tsx
export default function AboutPage() {
  return <div>About WaifuWiki</div>
}

// 2. Add route in src/App.tsx
<Route path="/about" element={<AboutPage />} />
```

---

## 🎭 Animation System

### Framer Motion Variants

```tsx
// Card entrance (staggered)
initial={{ opacity: 0, y: 24 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}

// Page entrance
initial={{ opacity: 0, x: -30 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}

// Spring hover
whileHover={{ rotate: 15, scale: 1.1 }}
transition={{ type: "spring", stiffness: 400, damping: 10 }}
```

### CSS Keyframes

| Animation | Duration | Easing | Element |
|:---|:---|:---|:---|
| `orb-float` | 20s | ease-in-out | Background decorative orbs |
| `heartbeat` | 1.8s | ease-in-out | Heart icons |
| `shimmer` | 3s | ease-in-out | Loading shimmer effect |
| `card-lift` | 0.35s | cubic-bezier(0.22, 1, 0.36, 1) | Card hover lift |
| `img-zoom` | 0.6s | cubic-bezier(0.22, 1, 0.36, 1) | Image hover zoom |

### Easing Reference

```
Standard:    cubic-bezier(0.22, 1, 0.36, 1)   — Smooth deceleration
Spring:      { type: "spring", stiffness: 400, damping: 10 }  — Bouncy
Ease-out:    cubic-bezier(0, 0, 0.2, 1)       — Quick start, slow end
```

---

## 🌐 Deployment

### ▲ Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Vercel auto-detects Vite — **no config needed**
4. Your site is live! 🎉

```bash
# Or use Vercel CLI
npx vercel --prod
```

### 🟢 Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and connect your repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy! 🎉

```bash
# Or use Netlify CLI
npx netlify deploy --prod --dir=dist
```

### 🐙 GitHub Pages

1. Push your code to GitHub
2. Go to **Settings > Pages > Source**
3. Select **GitHub Actions**
4. The workflow (`.github/workflows/deploy.yml`) handles the rest
5. Your site deploys **automatically on every push**! 🎉

> 💡 All deployment configs are included: `vercel.json`, `netlify.toml`, `.github/workflows/deploy.yml`

### 📦 Manual Deployment

```bash
# Build
npm run build

# The dist/ folder contains everything you need
# Upload it to any static host:
# - AWS S3 + CloudFront
# - Cloudflare Pages
# - Firebase Hosting
# - Surge.sh
# - Any web server (nginx, Apache, etc.)
```

---

## 📜 Available Scripts

| Command | Description | Details |
|:---|:---|:---|
| `npm run dev` | 🔥 Start development server | Runs on `localhost:3000` with HMR |
| `npm run build` | 📦 Build for production | `tsc -b && vite build` → `dist/` |
| `npm run preview` | 👀 Preview production build | Serves `dist/` locally |
| `npm run lint` | 🔍 Run ESLint | Checks code quality & style |

---

## 🌍 Environment & Browser Support

### Browser Compatibility

| Browser | Minimum Version | Status |
|:---|:---|:---:|
| 🟢 Chrome | 90+ | ✅ Full support |
| 🟢 Firefox | 88+ | ✅ Full support |
| 🟢 Safari | 15+ | ✅ Full support |
| 🟢 Edge | 90+ | ✅ Full support |
| 🟡 Opera | 76+ | ✅ Full support |
| 🟡 Samsung Internet | 15+ | ✅ Full support |
| 🔴 IE 11 | — | ❌ Not supported |

### Screen Sizes

| Breakpoint | Width | Layout |
|:---|:---|:---|
| Mobile | < 640px | 1 column grid, hamburger menu |
| Tablet | 640–1024px | 2 column grid |
| Desktop | 1024px+ | 3 column grid, full navbar |

---

## ⚡ Performance

### Build Output

| Metric | Value |
|:---|:---|
| 📦 Total JS (gzipped) | ~80 KB |
| 🎨 Total CSS (gzipped) | ~12 KB |
| 🖼️ Images | External URLs (not bundled) |
| ⚡ First Contentful Paint | < 1.5s |
| 🎯 Lighthouse Score | 95+ |

### Optimization Features

- ⚡ **Vite** — Lightning-fast HMR and optimized builds
- 🌳 **Tree Shaking** — Unused code automatically removed
- 📦 **Code Splitting** — Route-based lazy loading ready
- 🖼️ **Lazy Loading** — Images use `loading="lazy"` attribute
- 🗜️ **Compression** — Gzip/Brotli ready output
- 📱 **Responsive Images** — Adaptive sizing via CSS

---

## 📸 Screenshots

### 🏠 Home Page — Character Grid

<p align="center">
  <img src="https://github.com/Shineii86/WaifuWiki/blob/main/images/MaiSakurajima/MaiSakurajima1.png" alt="Home Page" width="700" style="border-radius: 8px; border: 1px solid rgba(255,255,255,0.1);"/>
</p>

### 📄 Detail Page — Character Profile

<p align="center">
  <img src="https://github.com/Shineii86/WaifuWiki/blob/main/images/Rem/Rem0.png" alt="Detail Page" width="350" style="border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 4px;"/>
  <img src="https://github.com/Shineii86/WaifuWiki/blob/main/images/YorForger/YorForger0.png" alt="Character Gallery" width="350" style="border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); margin: 4px;"/>
</p>

### 🖼️ Gallery — Lightbox View

<p align="center">
  <img src="https://github.com/Shineii86/WaifuWiki/blob/main/images/Navier/Navier0.png" alt="Gallery 1" width="220" style="border-radius: 8px; margin: 4px;"/>
  <img src="https://github.com/Shineii86/WaifuWiki/blob/main/images/Navier/Navier1.png" alt="Gallery 2" width="220" style="border-radius: 8px; margin: 4px;"/>
  <img src="https://github.com/Shineii86/WaifuWiki/blob/main/images/Navier/Navier2.png" alt="Gallery 3" width="220" style="border-radius: 8px; margin: 4px;"/>
</p>

---

## 📝 Changelog Highlights

| Version | Date | Key Changes |
|:---|:---|:---|
| **1.2.0** | 2026-05-27 | MIT License, comprehensive README, GitHub metadata |
| **1.1.0** | 2026-05-27 | Vercel, Netlify, GitHub Pages deployment configs |
| **1.0.0** | 2026-05-27 | Complete UI/UX redesign, new fonts, animations, mobile menu |
| **0.1.0** | 2026-05-27 | Initial release with 6 characters and core features |

> 📝 See [CHANGELOG.md](./CHANGELOG.md) for the full version history.

---

## 🔧 Troubleshooting

| Problem | Cause | Solution |
|:---|:---|:---|
| ❌ `npm install` fails | Node.js version too old | Upgrade to Node.js 18+ (`node -v`) |
| ❌ Images not loading | CORS or invalid URL | Check image URLs in `waifus.json`; use HTTPS URLs |
| ❌ Blank page after deploy | Base path mismatch | Ensure `vite.config.ts` has `base: './'` |
| ❌ Build fails with TS errors | Type mismatch | Run `npx tsc --noEmit` to find type errors |
| ❌ Styles not applying | Browser cache | Hard refresh (`Ctrl+Shift+R`) or clear cache |
| ❌ HMR not working | Port conflict | Change port in `vite.config.ts` or kill other processes |
| ❌ Font not loading | Network/CORS issue | Check Google Fonts CDN accessibility |
| ❌ Lightbox not closing | Keyboard focus issue | Click outside image or press Escape |
| ❌ Mobile menu stuck | State not resetting | Navigate to home or refresh the page |
| ❌ Deploy fails on GitHub Pages | Workflow not enabled | Go to Settings > Pages > Source > GitHub Actions |

### 🐛 Debug Mode

```bash
# Run with verbose output
npm run dev -- --debug

# Check TypeScript errors
npx tsc --noEmit

# Check ESLint issues
npm run lint

# Analyze bundle size
npx vite-bundle-visualizer
```

---

## ❓ FAQ

<details>
<summary><b>📝 How do I add a new character?</b></summary>
<br/>
Edit <code>src/data/waifus.json</code> and append a new waifu object to the array. See the <a href="#-waifu-data-schema">Waifu Data Schema</a> section for all required fields. Make sure the <code>slug</code> is unique and URL-safe. Then rebuild and redeploy.
</details>

<details>
<summary><b>🖼️ How do I add character images?</b></summary>
<br/>
Create a folder in <code>images/</code> named after the character (e.g., <code>images/ZeroTwo/</code>). Add PNG or JPG images and reference them in <code>waifus.json</code>. You can also use external image URLs — just ensure they're accessible and CORS-friendly.
</details>

<details>
<summary><b>🔌 Can I use this with a backend or CMS?</b></summary>
<br/>
Yes! Replace the static <code>waifus.json</code> import with an API call. Modify <code>HomePage.tsx</code> and <code>WaifuPage.tsx</code> to fetch from any headless CMS (Strapi, Contentful, Sanity, etc.) or REST/GraphQL API.
</details>

<details>
<summary><b>🎨 How do I change the theme colors?</b></summary>
<br/>
Edit the CSS variables in <code>src/index.css</code> under the <code>:root</code> selector. All colors use HSL format. The <code>--primary</code>, <code>--secondary</code>, and <code>--accent</code> tokens control the main color scheme.
</details>

<details>
<summary><b>🔤 How do I change the fonts?</b></summary>
<br/>
1. Update the Google Fonts link in <code>index.html</code><br/>
2. Change <code>--font-display</code> and <code>--font-body</code> in <code>src/index.css</code><br/>
3. Update <code>fontFamily</code> in <code>tailwind.config.js</code>
</details>

<details>
<summary><b>🌐 Does it support multiple languages?</b></summary>
<br/>
Not built-in, but you can add <code>react-i18next</code> for UI translations. Character data in <code>waifus.json</code> can be in any language since it's rendered as-is.
</details>

<details>
<summary><b>📄 Can I add more pages?</b></summary>
<br/>
Yes! Create a new component in <code>src/pages/</code> and add a <code>&lt;Route&gt;</code> in <code>src/App.tsx</code>. Include <code>Navbar</code> and <code>Footer</code> for consistent layout.
</details>

<details>
<summary><b>🌙 How do I add light mode?</b></summary>
<br/>
Add a second set of CSS variables under <code>.light</code> class in <code>src/index.css</code>, create a theme toggle component, and use <code>localStorage</code> to persist the preference. This is on the <a href="#-roadmap">Roadmap</a>.
</details>

<details>
<summary><b>📊 How many characters can it handle?</b></summary>
<br/>
The app is optimized for collections of 10–100 characters. For larger collections (500+), consider adding pagination or virtual scrolling. The current grid layout handles 50+ characters smoothly.
</details>

<details>
<summary><b>🔒 Is the data secure?</b></summary>
<br/>
Since it's a static site, all data in <code>waifus.json</code> is public in the built output. Don't include sensitive information. For private data, use a backend API with authentication.
</details>

---

## 🗺️ Roadmap

### 🎯 Planned Features

- [ ] 🌙 **Light mode toggle** — Switch between dark and light themes
- [ ] 🔖 **Favorites / bookmarks** — Save favorites with localStorage
- [ ] 📊 **Advanced sorting** — Sort by date added, alphabetical, random shuffle
- [ ] 🏷️ **Tag-based filtering** — Click tags on detail pages to filter
- [ ] 📤 **Share button** — Share individual character profiles
- [ ] 🖼️ **Blur placeholders** — Low-quality image placeholders while loading
- [ ] 📝 **Markdown descriptions** — Rich text formatting in bios
- [ ] 🔗 **Related characters** — "You might also like" section
- [ ] 📱 **PWA support** — Install as app on mobile devices
- [ ] 🌐 **Multi-language** — i18n support with react-i18next
- [ ] 🔍 **Advanced search** — Full-text search with fuzzy matching
- [ ] 📊 **Statistics page** — Charts and analytics for your collection
- [ ] 🎲 **Random character** — "Discover a random waifu" button
- [ ] 📥 **Import/Export** — Backup and restore your collection
- [ ] 🎨 **Custom themes** — User-defined color schemes

### ✅ Completed

- [x] 🎨 Complete UI/UX redesign (v1.0.0)
- [x] 🔤 Custom typography system (Outfit + Inter)
- [x] 🎭 Floating orb animations
- [x] 📱 Mobile hamburger menu
- [x] 🖼️ Lightbox with keyboard navigation
- [x] 🚀 Multi-platform deployment configs
- [x] 📜 MIT License
- [x] 📖 Comprehensive documentation

---

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how you can help:

### 🔄 How to Contribute

```bash
# 1️⃣ Fork the repository
# Click the "Fork" button on GitHub

# 2️⃣ Clone your fork
git clone https://github.com/YOUR_USERNAME/WaifuWiki.git
cd WaifuWiki

# 3️⃣ Create a feature branch
git checkout -b feature/amazing-feature

# 4️⃣ Make your changes
# Edit files, add features, fix bugs...

# 5️⃣ Test your changes
npm run build
npm run lint

# 6️⃣ Commit your changes
git commit -m 'feat: add amazing feature'

# 7️⃣ Push to your fork
git push origin feature/amazing-feature

# 8️⃣ Open a Pull Request
# Go to GitHub and create a PR
```

### 📋 Guidelines

- ✅ Follow the existing code style and conventions
- ✅ Write meaningful commit messages (use [conventional commits](https://www.conventionalcommits.org/))
- ✅ Test your changes before submitting
- ✅ Update the CHANGELOG.md with your changes
- ✅ Keep PRs focused — one feature or fix per PR
- ✅ Add comments for complex logic
- ✅ Ensure TypeScript types are correct
- ❌ Don't commit node_modules or build artifacts
- ❌ Don't add unrelated changes to a single PR

### 🐛 Reporting Bugs

1. Check existing [issues](https://github.com/Shineii86/WaifuWiki/issues) first
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser and OS info

### 💡 Suggesting Features

1. Check the [Roadmap](#-roadmap) for planned features
2. Open a [feature request](https://github.com/Shineii86/WaifuWiki/issues/new) with:
   - Clear description of the feature
   - Use case / motivation
   - Mockups or examples if possible

---

## 🙏 Acknowledgements

### 🛠️ Technologies

- **[React](https://react.dev/)** — The library for web and native user interfaces
- **[Vite](https://vite.dev/)** — Next generation frontend tooling
- **[TypeScript](https://www.typescriptlang.org/)** — JavaScript with syntax for types
- **[Tailwind CSS](https://tailwindcss.com/)** — A utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** — Production-ready motion library for React
- **[React Router](https://reactrouter.com/)** — Declarative routing for React
- **[shadcn/ui](https://ui.shadcn.com/)** — Re-usable components built with Radix UI and Tailwind CSS
- **[Lucide](https://lucide.dev/)** — Beautiful & consistent open-source icons
- **[Google Fonts](https://fonts.google.com/)** — Outfit & Inter typography

### 🎨 Design Inspiration

- [MyAnimeList](https://myanimelist.net/) — The world's most active anime community
- [AniList](https://anilist.co/) — Anime & manga tracking platform
- [Fandom](https://www.fandom.com/) — The ultimate fan wiki platform

### 📝 Resources

- [Capsule Render](https://github.com/kyechan99/capsule-render) — Dynamic header image generator
- [Shields.io](https://shields.io/) — Badges for README
- [Star History](https://star-history.com/) — GitHub star history charts
- [komarev](https://komarev.com/) — Profile view counter

### ⚠️ Disclaimer

> **Character data and images belong to their respective creators, studios, and licensors.**
> This project is for personal/educational use only. No copyright infringement intended.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

```
MIT License — Free to use, modify, and distribute.
```

[![License: MIT](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge&logo=mit&logoColor=white)](./LICENSE)

---

## 👤 Author

<p align="center">
  <a href="https://github.com/Shineii86">
    <img src="https://github.com/Shineii86.png" width="120" style="border-radius: 50%; border: 3px solid #f43f8e;" alt="Shineii86"/>
  </a>
  <br/><br/>
  <b style="font-size: 1.2em;">Shineii86</b>
  <br/>
  <sub>Full-Stack Developer & Anime Enthusiast</sub>
  <br/><br/>
  <a href="https://github.com/Shineii86"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/></a>
  <a href="https://twitter.com/Shineii86"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"/></a>
</p>

---

## ⭐ Star History

<p align="center">
  <a href="https://star-history.com/#Shineii86/WaifuWiki&Date">
    <img src="https://api.star-history.com/svg?repos=Shineii86/WaifuWiki&type=Date" alt="Star History Chart" width="100%"/>
  </a>
</p>

> ⭐ If you found this project useful, please consider giving it a star!

---

## 🌟 Supporters

<p align="center">
  <a href="https://github.com/Shineii86/WaifuWiki/stargazers">
    <img src="https://reporoster.com/stars/dark/Shineii86/WaifuWiki" alt="Stargazers" width="600"/>
  </a>
</p>

<p align="center">
  <a href="https://github.com/Shineii86/WaifuWiki/network/members">
    <img src="https://reporoster.com/forks/dark/Shineii86/WaifuWiki" alt="Forkers" width="600"/>
  </a>
</p>

---

<p align="center">
  <b>Made with 💖 by <a href="https://github.com/Shineii86">Shineii86</a></b>
  <br/><br/>
  <img src="https://komarev.com/ghpvc/?username=Shineii86&repo=WaifuWiki&color=f43f8e&style=for-the-badge" alt="Profile views"/>
  <br/><br/>
  <sub>© 2026 Shineii86. All rights reserved.</sub>
</p>
