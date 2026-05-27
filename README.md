# WaifuWiki

Your Personal Waifu Encyclopedia — A curated collection of beloved characters from anime, manhwa, and webtoons.

![WaifuWiki](https://img.shields.io/badge/version-1.0.0-pink)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC)
![Vite](https://img.shields.io/badge/Vite-7-646CFF)

## Overview

WaifuWiki is a personal wiki for tracking and showcasing your favorite characters from various media. Simply edit the `waifus.json` config file and redeploy!

## Tech Stack

- **React 19** + **TypeScript** + **Vite 7**
- **Tailwind CSS** with custom dark theme (rose-violet palette)
- **Framer Motion** for smooth animations
- **React Router** for client-side navigation
- **Outfit** + **Inter** for display/body typography
- Static site generation for easy deployment

## Project Structure

```
.
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── WaifuCard.tsx
│   │   ├── FilterBar.tsx
│   │   └── ImageGallery.tsx
│   ├── pages/            # Page components
│   │   ├── HomePage.tsx
│   │   ├── WaifuPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── data/
│   │   └── waifus.json   # The config file — edit this!
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── CHANGELOG.md
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## How to Add/Edit/Delete Waifus

1. Open `src/data/waifus.json`
2. The file contains an array of waifu objects
3. **Add**: Append a new waifu object to the array
4. **Edit**: Modify any existing object's values
5. **Delete**: Remove an object from the array
6. After editing, rebuild and redeploy

### Waifu Object Structure

```json
{
  "slug": "unique-url-slug",
  "name": "Character Name",
  "source": "Anime/Manhwa Title",
  "type": "Anime|Manhwa|Webtoon/Manhwa",
  "image": "https://example.com/image.jpg",
  "images": ["https://example.com/gallery1.jpg"],
  "description": "Long description...",
  "firstAppearance": "Episode 1",
  "voiceActor": "Voice Actor Name",
  "traits": ["Trait1", "Trait2"],
  "likes": ["Like1", "Like2"],
  "dislikes": ["Dislike1"],
  "rating": 10,
  "tags": ["tag1", "tag2"]
}
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Deployment

The site is built as a static site in the `dist/` directory. You can deploy it to:
- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use the `dist/` folder
- **Any static host**: Upload the `dist/` folder contents

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history.

## License

Personal project. All character images and names belong to their respective owners.
