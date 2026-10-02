// Aman Live TV service worker: caches the app shell only.
// Live streams (.m3u8/.ts) are never cached, they always go to the network.
const VERSION = 'v5';
const SHELL_CACHE = 'aman-tv-shell-' + VERSION;
const RUNTIME_CACHE = 'aman-tv-runtime-' + VERSION;
const SHELL = [
  '/',
  '/manifest.webmanifest'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => ![SHELL_CACHE, RUNTIME_CACHE].includes(k)).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Never touch video streams or playlists
  if (/\.(m3u8|ts|m4s|mp4|aac|key)(\?|$)/i.test(url.pathname) || (url.hostname.endsWith('tamashaweb.com') && !/\.(webp|png|jpg|jpeg)$/i.test(url.pathname))) return;

  // Pages: network first, fall back to cached shell when offline
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(SHELL_CACHE).then((c) => c.put('/', copy));
          return res;
        })
        .catch(() => caches.match('/'))
    );
    return;
  }

  // Static assets (own files, fonts, CDN libs, channel logos): stale-while-revalidate
  event.respondWith(
    caches.open(RUNTIME_CACHE).then((cache) =>
      cache.match(req).then((cached) => {
        const fetched = fetch(req)
          .then((res) => {
            if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
            return res;
          })
          .catch(() => cached);
        return cached || fetched;
      })
    )
  );
});
