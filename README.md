# Aman Ullah · Live TV

Watch 80+ free live HD TV channels online — News, Sports, Entertainment, Music, Kids, Religious & Regional. Single-file, no signup, instant streaming.

**Live:** [aman-live-tv.vercel.app](https://aman-live-tv.vercel.app/)

## Features

- 🔴 84+ live channels across 8 categories (Entertainment, News, Sports, Music, Kids, Religious, Documentary, Regional)
- 📺 HLS.js powered m3u8 streaming with native HLS fallback for Safari
- ⚡ Adaptive quality selector (Auto + manual resolution switch)
- 🔍 Live search + category tabs to filter channels
- ⏮️ ⏭️ Prev / Next navigation between channels
- 🎨 Dark gold glassmorphism UI with ambient gold particle effect
- 📱 Mobile-first responsive layout with sticky pill-shaped profile navbar
- 🚫 Basic DevTools-blocking protection
- 🔎 SEO-ready: meta tags, Open Graph, Twitter Card, JSON-LD, sitemap & robots.txt

## Tech Stack

- HTML5 + CSS3 (no framework)
- Vanilla JavaScript
- [HLS.js](https://github.com/video-dev/hls.js) for adaptive stream playback
- Google Fonts (Orbitron)
- Deployed on [Vercel](https://vercel.com)

## Project Structure

```
├── index.html      # Markup, SEO meta tags, JSON-LD
├── style.css       # All styling (dark gold glassmorphism theme)
├── script.js       # Channel data, player logic, search/filter, particle effect
├── sitemap.xml     # SEO sitemap
└── robots.txt      # Crawler rules
```

## Running Locally

No build step needed — it's static.

```bash
git clone <repo-url>
cd aman-live-tv
```

Open `index.html` directly in a browser, or serve it locally:

```bash
npx serve .
```

## Deployment

Deployed on Vercel. Push to your connected Git repo or run:

```bash
vercel --prod
```

Make sure `index.html`, `style.css`, `script.js`, `sitemap.xml`, and `robots.txt` are all in the project root — `sitemap.xml` and `robots.txt` are served as static files automatically.

## Adding / Updating Channels

Channel list lives in `script.js` inside the `channels` array:

```js
{ name: "Channel Name", logo: "https://logo-url.png", url: "https://stream-url.m3u8", cat: "Category" }
```

Valid `cat` values: `Entertainment`, `News`, `Sports`, `Music`, `Kids`, `Religious`, `Documentary`, `Regional`.

> ⚠️ Stream URLs (m3u8) are third-party and can go offline or change without notice — check periodically and update as needed.

## Credits

Created by **Aman Ullah** ([HN-AMAN](https://aman-live-tv.vercel.app/))

- TikTok: [@amanullah.736](https://www.tiktok.com/@amanullah.736)
- WhatsApp Channel: [Join here](https://whatsapp.com/channel/0029Vb8Hsxs72WU1Dx57eu1q)

## License

© 2026 All Rights Reserved. Created by Aman Ullah.
