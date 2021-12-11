self.addEventListener('install', e => {
    const cacheProm = caches.open('cacheproject')
    .then(cache => {
        return cache.addAll([
            '/',
            '/index.html',
            '/css/style.css',
            '/js/app.js',
            'img/cuervos.jpg',
        ]);
    });
    e.waitUntil(cacheProm)
});

self.addEventListener('fetch', e =>{
    e.respondWith(caches.match(e.request));
});