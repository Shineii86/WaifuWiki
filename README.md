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
  <img src="https://img.shields.io/badge/Version-1.1.0-f43f8e?style=flat-square&logoColor=white" alt="Version"/>
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
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Configuration](#-configuration)
- [Waifu Data Schema](#-waifu-data-schema)
- [Design System](#-design-system)
- [Deployment](#-deployment)
- [Available Scripts](#-available-scripts)
- [Screenshots](#-screenshots)
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

---

## ✨ Features

<table>
  <tr>
    <td>

### 🏠 Home Page
- Dynamic waifu grid with staggered card animations
- Real-time search by name, source, or tags
- Filter by type (Anime, Manhwa, Webtoon)
- Sort by rating, name, or type
- Collapsible tag filter panel
- Stats overview (total characters, average rating)

    </td>
    <td>

### 📄 Detail Pages
- Full character profile with rich metadata
- High-quality image with glow effects
- Rating stars with numeric display
- Voice actor & first appearance info
- Traits, likes, and dislikes sections
- Image gallery with lightbox viewer
- Keyboard navigation (arrows, Escape)

    </td>
  </tr>
  <tr>
    <td>

### 🎨 Design System
- Outfit font for display headings
- Inter font for body text
- Rose-violet gradient accents
- Glassmorphism navbar & footer
- Floating orb background animations
- Custom scrollbar styling
- Noise texture overlay

    </td>
    <td>

### 🔧 Developer Experience
- TypeScript for type safety
- Tailwind CSS utility classes
- Framer Motion animations
- shadcn/ui component library
- ESLint for code quality
- Hot Module Replacement (HMR)
- Static export ready

    </td>
  </tr>
</table>

---

## 🎬 Demo

> 🌐 **Live Preview** — Deploy your own instance and see it in action!

<p align="center">
  <img src="https://github.com/Shineii86/WaifuWiki/blob/main/images/MaiSakurajima/MaiSakurajima0.png" alt="WaifuWiki Preview" width="600" style="border-radius: 12px; border: 2px solid rgba(244, 63, 142, 0.3);"/>
</p>

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|:---|:---|:---|
| ⚛️ [React](https://react.dev/) | UI library | 19.2 |
| 🔷 [TypeScript](https://www.typescriptlang.org/) | Type safety | 5.9 |
| ⚡ [Vite](https://vite.dev/) | Build tool & dev server | 7.2 |
| 🎨 [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS | 3.4 |
| 🎭 [Framer Motion](https://www.framer.com/motion/) | Animations | 12.40 |
| 🧭 [React Router](https://reactrouter.com/) | Client-side routing | 7.6 |
| 🧱 [shadcn/ui](https://ui.shadcn.com/) | UI components | Latest |
| 📦 [Lucide React](https://lucide.dev/) | Icons | 0.562 |
| 🔤 [Outfit](https://fonts.google.com/specimen/Outfit) | Display typography | — |
| 🔤 [Inter](https://fonts.google.com/specimen/Inter) | Body typography | — |

---

## 📁 Project Structure

```
WaifuWiki/
├── 📂 .github/
│   └── 📂 workflows/
│       └── 📄 deploy.yml          # GitHub Pages deployment
├── 📂 images/                     # Character image assets
│   ├── 📂 MaiSakurajima/
│   ├── 📂 Navier/
│   ├── 📂 Rem/
│   ├── 📂 SeoYuna/
│   └── 📂 YorForger/
├── 📂 src/
│   ├── 📂 components/             # Reusable UI components
│   │   ├── 📂 ui/                 # shadcn/ui primitives (40+)
│   │   ├── 📄 Navbar.tsx          # Sticky glassmorphism navbar
│   │   ├── 📄 Footer.tsx          # Site footer with links
│   │   ├── 📄 WaifuCard.tsx       # Character preview card
│   │   ├── 📄 FilterBar.tsx       # Search, filter & sort controls
│   │   └── 📄 ImageGallery.tsx    # Lightbox image viewer
│   ├── 📂 pages/                  # Route pages
│   │   ├── 📄 HomePage.tsx        # Main collection grid
│   │   ├── 📄 WaifuPage.tsx       # Individual character profile
│   │   └── 📄 NotFoundPage.tsx    # 404 error page
│   ├── 📂 data/
│   │   └── 📄 waifus.json         # ⭐ Character data (edit this!)
│   ├── 📂 hooks/
│   │   └── 📄 use-mobile.ts       # Mobile detection hook
│   ├── 📂 lib/
│   │   └── 📄 utils.ts            # Utility functions
│   ├── 📄 App.tsx                 # Root component with routing
│   ├── 📄 main.tsx                # Entry point
│   └── 📄 index.css               # Global styles & CSS variables
├── 📄 CHANGELOG.md                # Version history
├── 📄 LICENSE                     # MIT License
├── 📄 README.md                   # This file
├── 📄 components.json             # shadcn/ui configuration
├── 📄 eslint.config.js            # ESLint configuration
├── 📄 index.html                  # HTML entry point
├── 📄 netlify.toml                # Netlify deployment config
├── 📄 package.json                # Dependencies & scripts
├── 📄 postcss.config.js           # PostCSS configuration
├── 📄 tailwind.config.js          # Tailwind CSS configuration
├── 📄 tsconfig.json               # TypeScript config
├── 📄 vercel.json                 # Vercel deployment config
└── 📄 vite.config.ts              # Vite build configuration
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ (recommended: 20)
- **npm** 9+ (or yarn / pnpm)

### Installation

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

### Build for Production

```bash
# Build static files
npm run build

# Preview the build locally
npm run preview
```

> 📦 Output is in the `dist/` directory — ready for deployment.

---

## ⚙️ Configuration

All character data lives in a single file: **`src/data/waifus.json`**

### Adding a New Character

Append a new object to the array:

```json
{
  "slug": "zero-two",
  "name": "Zero Two",
  "source": "DARLING in the FRANXX",
  "type": "Anime",
  "image": "https://example.com/zero-two-main.jpg",
  "images": [
    "https://example.com/zero-two-1.jpg",
    "https://example.com/zero-two-2.jpg"
  ],
  "description": "Zero Two is the deuteragonist of DARLING in the FRANXX...",
  "firstAppearance": "Episode 1",
  "voiceActor": "Haruka Tomatsu (Japanese), Tia Ballard (English)",
  "traits": ["Bold", "Mysterious", "Playful", "Fierce"],
  "likes": ["Hiro", "Strelizia", "Fighting", "Mischief"],
  "dislikes": ["APE", "Being controlled", "Loneliness"],
  "rating": 9,
  "tags": ["mecha", "pilot", "darling", "horns"]
}
```

### Editing a Character

Modify any field directly in `waifus.json`. Changes are reflected on rebuild.

### Deleting a Character

Remove the object from the array and rebuild.

---

## 📋 Waifu Data Schema

| Field | Type | Required | Description |
|:---|:---|:---:|:---|
| `slug` | `string` | ✅ | URL-safe unique identifier |
| `name` | `string` | ✅ | Character's display name |
| `source` | `string` | ✅ | Anime / Manhwa / Webtoon title |
| `type` | `string` | ✅ | `"Anime"`, `"Manhwa"`, or `"Webtoon/Manhwa"` |
| `image` | `string` | ✅ | URL to the main character image |
| `images` | `string[]` | ✅ | Array of gallery image URLs |
| `description` | `string` | ✅ | Detailed character biography |
| `firstAppearance` | `string` | ✅ | Episode / chapter of first appearance |
| `voiceActor` | `string` | ❌ | Voice actor name(s) |
| `traits` | `string[]` | ✅ | Character personality traits |
| `likes` | `string[]` | ✅ | Things the character likes |
| `dislikes` | `string[]` | ✅ | Things the character dislikes |
| `rating` | `number` | ✅ | Rating from 1–10 |
| `tags` | `string[]` | ✅ | Searchable tags |

---

## 🎨 Design System

### Color Palette

| Token | HSL Value | Usage |
|:---|:---|:---|
| `--background` | `250 20% 6%` | Page background |
| `--card` | `250 16% 9%` | Card surfaces |
| `--primary` | `330 90% 60%` | Primary actions, links |
| `--secondary` | `270 70% 55%` | Secondary accents |
| `--accent` | `290 75% 55%` | Highlights |
| `--muted` | `250 10% 14%` | Muted backgrounds |
| `--foreground` | `0 0% 96%` | Body text |

### Typography

| Role | Font | Weight |
|:---|:---|:---|
| Display / Headings | **Outfit** | 600–900 |
| Body / UI | **Inter** | 300–700 |

### Animations

| Name | Duration | Easing | Usage |
|:---|:---|:---|:---|
| `orb-float` | 20s | ease-in-out | Background orbs |
| `heartbeat` | 1.8s | ease-in-out | Heart icons |
| `shimmer` | 3s | ease-in-out | Loading states |
| Card hover | 0.35s | cubic-bezier | Card lift effect |
| Image zoom | 0.6s | cubic-bezier | Image hover zoom |

---

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Vercel auto-detects Vite — no config needed
4. Your site is live! 🎉

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and connect your repo
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy! 🎉

### GitHub Pages

1. Push your code to GitHub
2. Go to **Settings > Pages > Source**
3. Select **GitHub Actions**
4. The workflow (`.github/workflows/deploy.yml`) handles the rest
5. Your site deploys automatically on every push! 🎉

> 💡 All deployment configs are included: `vercel.json`, `netlify.toml`, `.github/workflows/deploy.yml`

---

## 📜 Available Scripts

| Command | Description |
|:---|:---|
| `npm run dev` | 🔥 Start development server with HMR |
| `npm run build` | 📦 Build for production (`tsc -b && vite build`) |
| `npm run preview` | 👀 Preview production build locally |
| `npm run lint` | 🔍 Run ESLint for code quality checks |

---

## 📸 Screenshots

> 💡 Add your own screenshots by replacing the placeholder URLs below.

| Home Page | Detail Page |
|:---|:---|
| ![Home](https://github.com/Shineii86/WaifuWiki/blob/main/images/MaiSakurajima/MaiSakurajima1.png) | ![Detail](https://github.com/Shineii86/WaifuWiki/blob/main/images/Rem/Rem0.png) |

---

## 🔧 Troubleshooting

| Problem | Cause | Solution |
|:---|:---|:---|
| `npm install` fails | Node.js version too old | Upgrade to Node.js 18+ |
| Images not loading | CORS or invalid URL | Check image URLs in `waifus.json` |
| Blank page after deploy | Base path mismatch | Ensure `vite.config.ts` has `base: './'` |
| Build fails with TS errors | Type mismatch | Run `npx tsc --noEmit` to check types |
| Styles not applying | Cache issue | Hard refresh (`Ctrl+Shift+R`) or clear cache |

---

## ❓ FAQ

<details>
<summary><b>How do I add a new character?</b></summary>
<br/>
Edit <code>src/data/waifus.json</code> and append a new waifu object. See the <a href="#-waifu-data-schema">Waifu Data Schema</a> section for the required fields. Then rebuild and redeploy.
</details>

<details>
<summary><b>Can I use this with a backend or CMS?</b></summary>
<br/>
Currently, WaifuWiki is a static frontend app. You can replace <code>waifus.json</code> with an API call to any headless CMS (Strapi, Contentful, etc.) by modifying the data import in <code>HomePage.tsx</code> and <code>WaifuPage.tsx</code>.
</details>

<details>
<summary><b>How do I change the theme colors?</b></summary>
<br/>
Edit the CSS variables in <code>src/index.css</code> under the <code>:root</code> selector. The HSL values control the entire color system.
</details>

<details>
<summary><b>Does it support multiple languages?</b></summary>
<br/>
Not built-in, but you can add an i18n library like <code>react-i18next</code> and translate the UI labels. Character data in <code>waifus.json</code> can be in any language.
</details>

<details>
<summary><b>Can I add more pages?</b></summary>
<br/>
Yes! Create a new component in <code>src/pages/</code> and add a route in <code>src/App.tsx</code>. Follow the existing patterns with Navbar and Footer.
</details>

---

## 🗺️ Roadmap

- [ ] 🌙 Light mode toggle
- [ ] 🔖 Favorites / bookmarks (localStorage)
- [ ] 📊 Advanced sorting (by date added, alphabetical, random)
- [ ] 🏷️ Tag-based filtering on detail pages
- [ ] 📤 Share button for individual characters
- [ ] 🖼️ Image lazy loading with blur placeholders
- [ ] 📝 Markdown support in descriptions
- [ ] 🔗 Related characters section
- [ ] 📱 PWA support (installable on mobile)
- [ ] 🌐 Multi-language support

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Test your changes before submitting
- Update the CHANGELOG.md with your changes
- Keep PRs focused — one feature per PR

---

## 🙏 Acknowledgements

- **Character data and images** belong to their respective creators and licensors
- [React](https://react.dev/) — The library for web and native user interfaces
- [Vite](https://vite.dev/) — Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) — A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) — Production-ready motion library
- [shadcn/ui](https://ui.shadcn.com/) — Re-usable components built with Radix UI
- [Lucide](https://lucide.dev/) — Beautiful & consistent icons
- [Google Fonts](https://fonts.google.com/) — Outfit & Inter typography

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

```
MIT License — Free to use, modify, and distribute.
```

---

## 👤 Author

<p align="center">
  <a href="https://github.com/Shineii86">
    <img src="https://github.com/Shineii86.png" width="100" style="border-radius: 50%; border: 3px solid #f43f8e;" alt="Shineii86"/>
  </a>
  <br/>
  <b>Shineii86</b>
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

---

<p align="center">
  <b>Made with 💖 by <a href="https://github.com/Shineii86">Shineii86</a></b>
  <br/><br/>
  <img src="https://komarev.com/ghpvc/?username=Shineii86&repo=WaifuWiki&color=f43f8e&style=for-the-badge" alt="Profile views"/>
</p>
