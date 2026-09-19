const CACHE_NAME =
    "molebio-lab-v1";


const FILES_TO_CACHE = [

    "/",

    "/index.html",

    "/css/style.css",

    "/js/app.js",

    "/js/practical-overview.js",

    "/pages/practical-overview.html",

    "/pages/student-dashboard.html",

    "/pages/results.html",

    "/pages/report.html"

];


self.addEventListener(
    "install",
    function (event) {

        event.waitUntil(

            caches.open(CACHE_NAME)

                .then(function (cache) {

                    return cache.addAll(
                        FILES_TO_CACHE
                    );

                })

        );

        self.skipWaiting();

    }
);


self.addEventListener(
    "activate",
    function (event) {

        event.waitUntil(

            caches.keys()

                .then(function (cacheNames) {

                    return Promise.all(

                        cacheNames
                            .filter(
                                name =>
                                    name !== CACHE_NAME
                            )
                            .map(
                                name =>
                                    caches.delete(name)
                            )

                    );

                })

        );

        self.clients.claim();

    }
);


self.addEventListener(
    "fetch",
    function (event) {

        event.respondWith(

            caches.match(event.request)

                .then(function (response) {

                    return response ||
                        fetch(event.request);

                })

        );

    }
);