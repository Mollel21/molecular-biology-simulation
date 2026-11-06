
const CACHE_NAME = "molebio-lab-v4";

const BASE_URL = new URL("./", self.registration.scope);

const CORE_FILES = [
    "",
    "index.html",
    "manifest.json",
    "css/style.css",
    "js/app.js"
];

const CACHE_URLS = CORE_FILES.map(file =>
    new URL(file, BASE_URL).href
);

// INSTALL
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(CACHE_URLS))
            .then(() => self.skipWaiting())
    );
});

// ACTIVATE
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames
                    .filter(name =>
                        name.startsWith("molebio-lab-") &&
                        name !== CACHE_NAME
                    )
                    .map(name => caches.delete(name))
            )
        ).then(() => self.clients.claim())
    );
});

// FETCH
self.addEventListener("fetch", event => {

    const request = event.request;

    if (request.method !== "GET") return;

    const url = new URL(request.url);

    // Ignore external requests
    if (url.origin !== self.location.origin) return;

    // Ignore requests outside this application
    if (!url.href.startsWith(BASE_URL.href)) return;

    // HTML navigation: network first, offline fallback
    if (request.mode === "navigate") {

        event.respondWith(
            fetch(request)
                .then(response => {
                    const copy = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache =>
                            cache.put(request, copy)
                        );

                    return response;
                })
                .catch(async () => {
                    return (
                        await caches.match(request) ||
                        await caches.match(
                            new URL("index.html", BASE_URL).href
                        )
                    );
                })
        );

        return;
    }

    // Other resources: cache first
    event.respondWith(
        caches.match(request).then(cached => {

            if (cached) return cached;

            return fetch(request).then(response => {

                if (response.ok) {
                    const copy = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache =>
                            cache.put(request, copy)
                        );
                }

                return response;
            });
        })
    );

});
