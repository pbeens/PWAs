self.addEventListener('install', e => {
    e.waitUntil(
      caches.open('pyscript-store').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/app.js',
          '/favicon.ico',
          'https://pyscript.net/latest/pyscript.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', e => {
    e.respondWith(
      caches.match(e.request).then(response => {
        return response || fetch(e.request);
      })
    );
  });
  