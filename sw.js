const CACHE_NAME = 'bayul-dream-v1';
const urlsToCache = ['/','/index.html'];

self.addEventListener('install',event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondwith(
    caches.match(event.request).then(response => response|| fetch(event.request))
  );
});