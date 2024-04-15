var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/estilo.css',

        './assets/css/main.css',

        './assets/css/fontawesome-all.min.css',

        './assets/css/outra_pag_estilo.css',

        './assets/js/main.js',

        './assets/js/jquery.min.js',

        '.img/background.png',
        '.img/logo.png',
        './images/icons/29.png',
        './images/icons/40.png',
        './images/icons/57.png',
        './images/icons/58.png',
        './images/icons/60.png',
        './images/icons/80.png',
        './images/icons/87.png',
        './images/icons/114.png',
        './images/icons/120.png',
        './images/icons/180.png',
        './images/icons/1024.png',
        
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});