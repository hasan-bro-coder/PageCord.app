const CACHE_VERSION = 'v1';

// Install event: Cache files when the service worker is registered
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => {
        return cache.addAll([
          '/', // Cache the root URL
          '/index.html', // Cache important HTML files
          '/styles.css', // Cache CSS files
          '/script.js', // Cache JavaScript files
          '/images/logo.png' // Cache image files
          // Add more files and URLs you want to cache here
        ]);
      })
  );
});

// Activate event: Delete old caches and activate the current one
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_VERSION) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event: Intercept network requests and serve cached files when available
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});