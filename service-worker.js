const CACHE_NAME = "molebio-lab-v3";

const BASE_PATH = "/molecular-biology-simulation/";

const FILES_TO_CACHE = [
    BASE_PATH,
    BASE_PATH + "index.html",
    BASE_PATH + "manifest.json",
    BASE_PATH + "css/style.css",
    BASE_PATH + "js/app.js"
];

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME).then(cache => {

            return cache.addAll(FILES_TO_CACHE);

        })

    );

    self.skipWaiting();

});


self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(cacheNames => {

            return Promise.all(

                cacheNames
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))

            );

        })

    );

    self.clients.claim();

});


self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request).then(response => {

            return response || fetch(event.request);

        })

    );

});