const cacheName = 'pwa-cache-v1';
const assetsToCache = [
    '/',
    '/index.html',
    '/css/styles.css',
    '/js/app.js',
    '/img/icon.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(assetsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
