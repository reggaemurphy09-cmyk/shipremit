self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("shipremit").then(function(cache) {
      return cache.addAll([
        "/",
        "index.html",
        "login.html",
        "home.html",
        "send.html",
        "history.html",
        "profile.html",
        "admin.html",
        "manifest.json",
        "icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
