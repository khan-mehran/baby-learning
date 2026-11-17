// Baby Learn service worker: makes the app installable and usable offline.
// Bump VERSION to force every device to drop its old cache.
const VERSION = 'v3';
const CACHE = `baby-learn-${VERSION}`;

const SHELL = [
  '/',
  '/manifest.webmanifest',
  '/icon.svg',
  '/icon-192.png',
  '/icon-512.png',
  '/apple-touch-icon.png',
  '/sounds/dog.wav',
  '/sounds/cat.wav',
  '/sounds/lion.wav',
];

const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      await cache.addAll(SHELL);

      // The JS/CSS file names are hashed at build time, so read them out of
      // the page itself and cache them too. Without this the first visit
      // would not work offline.
      try {
        const html = await (await fetch('/', { cache: 'no-store' })).text();
        const assets = [...html.matchAll(/(?:src|href)="(\/static\/[^"]+)"/g)].map((m) => m[1]);
        await cache.addAll([...new Set(assets)]);
      } catch {
        // Offline during install: assets get cached as they are requested.
      }

      await self.skipWaiting();
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === self.location.origin;

  // Pages: try the network so updates arrive, fall back to the cached app.
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE);
        try {
          const fresh = await fetch(request);
          if (fresh.ok) cache.put('/', fresh.clone());
          return fresh;
        } catch {
          return (await cache.match('/')) ?? Response.error();
        }
      })(),
    );
    return;
  }

  if (!sameOrigin && !FONT_HOSTS.includes(url.hostname)) return;

  // Assets and fonts: answer from cache at once, refresh in the background.
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      // Audio players ask for byte ranges; ignore that when looking in the cache.
      const cached = await cache.match(request.url);
      const refresh = fetch(request)
        .then((res) => {
          // 206 is a partial audio download, which cannot be cached.
          if (res.status === 200 || res.type === 'opaque') cache.put(request, res.clone());
          return res;
        })
        .catch(() => undefined);
      if (cached) {
        event.waitUntil(refresh);
        return cached;
      }
      return (await refresh) ?? Response.error();
    })(),
  );
});
