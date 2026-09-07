const cacheName = "hello-pwa";
const filesToCache = [
    "/",
    "index.html",
    "style.css",
    "main.js",
]

self.addEventListener("install", function(evt) {
    evt.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    )
});

self.addEventListener("fetch", function(evt) {
    evt.waitUntil(
        caches.match(evt.request).then(function(response) {
            return response || fetch(evt.request);
        })
    )
})