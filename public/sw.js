importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

const {setCatchHandler, setDefaultHandler} = workbox.routing;
const {NetworkOnly} = workbox.strategies;

const pageFallback = 'offline.html';
const imageFallback = false;
const fontFallback = false;
 
setDefaultHandler(new NetworkOnly());

// self.addEventListener('push', (event) => {
//   event.waitUntil(
//     self.registration.showNotification('new notification for no reason', {
//       body: 'idk why am i sending notification',
//       icon: './android/android-launchericon-144-144.png',
//     });
//     );
// });
// self.addEventListener('notificationclick', (event) => {
//   event.notification.close(); 
//   var fullPath = self.location.origin + event.notification.data.path; 
//   clients.openWindow(fullPath); 
// });

self.addEventListener('install', event => {
  const files = [pageFallback];
  if (imageFallback) {
    files.push(imageFallback);
  }
  if (fontFallback) {
    files.push(fontFallback);
  }

  event.waitUntil(
    self.caches
      .open('workbox-offline-fallbacks')
      .then(cache => cache.addAll(files))
  );
});

const handler = async options => {
  const dest = options.request.destination;
  const cache = await self.caches.open('workbox-offline-fallbacks');

  if (dest === 'document') {
    return (await cache.match(pageFallback)) || Response.error();
  }

  if (dest === 'image' && imageFallback !== false) {
    return (await cache.match(imageFallback)) || Response.error();
  }

  if (dest === 'font' && fontFallback !== false) {
    return (await cache.match(fontFallback)) || Response.error();
  }

  return Response.error();
};

setCatchHandler(handler);