const CACHE_NAME = 'psycho-organizer-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/karpman.html',
  '/roles.html', 
  '/spheres.html',
  '/egregores.html',
  '/manifest.json'
];

// Установка Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Обработка запросов
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});