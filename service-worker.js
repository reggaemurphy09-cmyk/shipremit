const CACHE_NAME = "shipremit-v1";

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll([
        "./",
        "./index.html",
        "./login.html",
        "./signup.html",
        "./home.html",
        "./send.html",
        "./history.html",
        "./profile.html",
        "./admin-login.html",
        "./admin-dashboard.html",
        "./setup.html",
        "./upload.html",
        "./firebase-config.js",
        "./manifest.json",
        "./icon.png"
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(name) {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
