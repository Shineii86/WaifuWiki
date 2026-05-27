# Changelog

All notable changes to the WaifuWiki project will be documented in this file.

## 1.2.0 - 2026-05-27
- Added MIT LICENSE file
- Completely rewrote README.md with detailed sections, emojis, badges, table of contents
- Added banner image, feature table, tech stack table, project structure tree
- Added Waifu Data Schema documentation with field types
- Added Design System documentation (colors, typography, animations)
- Added deployment guides for Vercel, Netlify, and GitHub Pages
- Added screenshots section, troubleshooting table, FAQ accordion
- Added roadmap with planned features
- Added contributing guidelines
- Added star history chart and profile view counter

## 1.1.0 - 2026-05-27
- Added Vercel deployment config (vercel.json)
- Added Netlify deployment config (netlify.toml) with SPA redirect
- Added GitHub Pages deployment via Actions workflow (.github/workflows/deploy.yml)

## 1.0.0 - 2026-05-27
- Complete UI/UX redesign with modern anime wiki aesthetic
- Added Outfit (display) + Inter (body) Google Fonts for typography
- Revamped color palette: deeper dark backgrounds with rose-violet gradient accents
- Improved glassmorphism navbar and footer with better blur/saturation
- Added floating orb background animations on hero and detail pages
- Added shimmer and noise texture overlay CSS utilities
- Redesigned WaifuCard with smoother hover animations and better tag/trait layout
- Redesigned FilterBar with icon labels and improved tag filter UX
- Enhanced ImageGallery with keyboard navigation (arrow keys, Escape)
- Improved WaifuPage with info cards, side-by-side likes/dislikes, and better layout
- Redesigned 404 page with animated orbs and spring entrance
- Added mobile hamburger menu to Navbar
- Added proper meta tags and Open Graph tags in index.html
- Upgraded package version to 1.0.0
- Removed unused debug plugin (kimi-plugin-inspect-react)
- Removed default Vite boilerplate files (Home.tsx, App.css)
- Added proper .gitignore
- Added GitHub link and author credit in Footer

## 0.1.0 - 2026-05-27
- Initial setup with Vite, React, TypeScript, and Tailwind CSS
- Created waifus.json config file with 6 sample waifus (Mai Sakurajima, Rem, Yor Forger, Seo Yuna, Shuli von Neuschwanstein, Navier Ellie Trovi)
- Built home page with waifu grid, search, filters, and sorting
- Built dynamic waifu detail pages with React Router
- Created reusable components: Navbar, Footer, WaifuCard, FilterBar, ImageGallery
- Implemented dark theme with pink/purple accents
- Added lightbox image gallery for waifu detail pages
- Added 404 not-found page
- Static export configured for deployment
