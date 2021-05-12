const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached
const PRECACHE_URLS = [
  'index.html',
  './', //alias for index.html
  'gallery.html',
  'cocktail.html',
  'css/style.css',
  'css/style1.css',
  'css/style3.css',

  'js/app.js',
  'js/main.js',
  'images/hello-icon-128.png',
  'images/hello-icon-144.png',
  'images/hello-icon-152.png',
  'images/hello-icon-192.png',
  'images/hello-icon-196maskable.png',
  'images/hello-icon-256.png',
  'images/hello-icon-512.png',

  'images/aztecCal.png',
  'images/calendar.png',
  'images/CDMXmus.png',
  'images/favicon.png',
  'images/Huitz.svg',
  'images/pulqueMus.png',
  'images/star.png',
  'images/temploMus.png',
  'images/teqymezMus',
  'images/tymMus.png',

  
  'sw.js'
  ];

// The install handler takes care of precaching our resources as directed
self.addEventListener('install',function(event){
  event.waitUntil(
    caches.open(PRECACHE).then(function(cache){
      return cache.addAll(PRECACHE_URLS);
    })
    );
});

// The activate handler 
self.addEventListener('activate',event => {
  console.log('Service worker activating . . . ');
});

// The fetch handler
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
    );
});