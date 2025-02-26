'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "74ab68693b69a1fdc72cac62a57df297",
"version.json": "dd328afb805092e13297c0e9b9b87ee0",
"index.html": "27127c074e50e06ecbbc43d428dfc416",
"/": "27127c074e50e06ecbbc43d428dfc416",
"main.dart.js": "c75a18a16a8a147053a9b74e0b8dfc6f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "fcf7d8b408b7090479c63ff65c09e560",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "840ffc5d6e6604033388fdd724c665cd",
"assets/AssetManifest.json": "5036cede07165cefb1e2ce7ea99215a4",
"assets/NOTICES": "7743e076319c2bf52f17996e7c0b648d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d149158dde83747d8953863abfb4144c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "83d6185f55440563426e1ce0860dab9b",
"assets/fonts/MaterialIcons-Regular.otf": "5569e50d2b56562a2bdbbc5d27f61af4",
"assets/assets/places/Fly%2520Fish_1.jpg": "d6ccd66cb8945097acb91859c5fbb27b",
"assets/assets/places/SeaWorld_1.jpg": "8563c641c03ceb6a28b34fea13eb47cd",
"assets/assets/places/Miracle%2520Garden_1.jpg": "c8a53a069ab6dc823e617f71b74d83f0",
"assets/assets/places/flyboard.jpeg": "a1e8680a62961668debe3dca8654d4b4",
"assets/assets/places/Royal%2520Safari_1.jpg": "ef09d4c1bd0d700ae41bb119498f609b",
"assets/assets/places/Ocean%2520Empress%2520Dinner%2520Cruise_1.jpg": "4f144d62e1bf71e7b5b8af45a80b00c4",
"assets/assets/places/birthday%2520party.jpg": "ce5e60d09266a42473c44d0cd3504466",
"assets/assets/places/Abu%2520Dhabi%2520City%2520Tour_1.jpg": "0ab944eb006c97cb2c2c8270a438f54f",
"assets/assets/places/Located%2520on%2520floors%252052%2520and%252053_1.jpg": "3fc255b461dfb14e24c4c07990bbaf00",
"assets/assets/places/Inside%2520Burj%2520Al%2520Arab%2520Tours_1.jpg": "2f89e73cb8615a46726649d66d0dffab",
"assets/assets/places/Jet%2520Ski_1.jpg": "79b497e123b4f38f60bf787c77cec9b5",
"assets/assets/places/Dune%2520Buggy%2520Safar_2.jpg": "fefd1af56fdddf83f246bd4b4be36efa",
"assets/assets/places/Dubai%2520Aquarium_1.jpg": "d80e8b143e2c9983c589418592220560",
"assets/assets/places/Flying%2520Cup%2520Dubai_1.jpg": "8acb110896a322cb58aeb5842316ec86",
"assets/assets/places/Glow%2520Garden.jpg": "b7c12e0250f36dfb81b54684af0f3f13",
"assets/assets/places/miracle%2520garden.webp": "6349e782f5ec46c16618241efe6eae09",
"assets/assets/places/Helicopter.jpg": "87d566ca2c03c4c57b5d31025b308a8d",
"assets/assets/places/Global%2520Village_1.jpg": "12d0b428f51781b1694ce407d7b0a731",
"assets/assets/places/yacht_50_1.jpg": "fa0259de72e2c14f35dc34e5d17aa7df",
"assets/assets/places/Quad%2520Bike%2520Safari_2.jpg": "8d75497beb4610872296c90d0a401203",
"assets/assets/places/Aya%2520Universe.jpg": "c2e1431f016e6feeb7194f4a7a12821c",
"assets/assets/places/The%2520View%2520At%2520The%2520Palm_1.jpg": "7f245a85b98859e7cd2598058999250c",
"assets/assets/places/Dubai%2520Frame_1.jpg": "879a2da13d700e85cd8bfdf7776a1b0b",
"assets/assets/places/jet_ski_4.jpg": "13a05a4df478f778d8aba125f04e394d",
"assets/assets/places/La%2520Perle%2520by%2520Dragone%2520Show_1.jpg": "0c4441a07088c04d9a439cb9cfd94b3e",
"assets/assets/places/Donut%2520Ride.jpg": "7afc1f000ecf1cf5d1719f5069add7f2",
"assets/assets/places/paraquedismo.jpg": "27eedae3355b708bd2d8207e2ac9f045",
"assets/assets/places/Donut%2520Ride_1.jpg": "3573dacd7ed80287eb5630a727c60dba",
"assets/assets/places/park_1.jpg": "aa22234330a06cc92c44810ec750c280",
"assets/assets/places/flight_1.jpg": "e19faf676fa1db0e3a58ef8f0dbc228f",
"assets/assets/places/wild%2520wadi.jpeg": "9ce489fa5683c4648235d42b19127ed7",
"assets/assets/places/Horse%2520Riding_1.jpg": "a7f4aec65a1dc3f3b07c4f95bea0734f",
"assets/assets/places/Abu%2520Dhabi%2520Helicopter%2520Tour_1.jpg": "31da77b9ae53a842acc8e40446b5cd9a",
"assets/assets/places/Dubai%2520Marina%2520Dinner%2520Cruise.jpg": "65b8d67a43d82393c9db221257c2b6a4",
"assets/assets/places/At%2520The%2520Top_1.jpg": "4196a9e38ec04a2905405dd8bd9d7690",
"assets/assets/places/Khasab%2520Tour%2520Musandam_2.jpg": "80864b1e41eda599bc07e5ccbc097d62",
"assets/assets/places/Wake%2520Boarding_1.jpg": "ec724ee82b342e1bde0009927d929766",
"assets/assets/places/Knee%2520Boarding_1.jpg": "cc1cf03d13abfeb0041b6b21dffbdac2",
"assets/assets/places/SeaWorld%2520Yas%2520Island%2520_1.jpg": "39c027ce1f049a8993d8a9f386ba6286",
"assets/assets/places/Dinner%2520In%2520The%2520Sky_1.jpg": "6d2e7dd85ae097f85485cb1fdeda343a",
"assets/assets/places/Yacht%2520Cruise_1.jpg": "5542c2730d61f93dd09a0ba68de55eb7",
"assets/assets/places/Meet%2520Greet_1.jpg": "83478477fd8490084d9e78acbb5f9e97",
"assets/assets/places/Morning%2520Desert%2520Safari_2.jpg": "2b05c6891213294b57c574d52009af32",
"assets/assets/places/Atlantis%2520Helicopter%2520Tour_1.jpg": "1152f43c3eabdf4cb29dccc6dc1d4e7c",
"assets/assets/places/Xline%2520Dubai_2.jpg": "d22eebf3cc0cda4e833c9457bf43eaf9",
"assets/assets/places/Lotus%2520Megayacht%2520Dinner%2520Cruise.jpg": "1d03ea39ec9c4c61f1cc2e9b3c4e4d1d",
"assets/assets/places/safari_1.jpg": "b00aff6faf5ea1434f9a52e84947592e",
"assets/assets/places/Evening%2520Desert%2520Safari_1.jpg": "b00a558e94cd8a88fed2086737629a1e",
"assets/assets/places/skydive_1.jpg": "f8a00f903f43546c4e8fa0d724334cbc",
"assets/assets/places/megadow_dinner_cruise_1.jpg": "b1bad159bc9f787cca0e34bb4c0a03e5",
"assets/assets/places/Banana%2520Ride_1.jpg": "a36b52f9521bc55f056060f9c93c749b",
"assets/assets/places/Marriage%2520Proposal.jpg": "efddecf036e08d146a85b2e4faeeb966",
"assets/assets/places/Parasailing.jpeg": "bac287fc9ee53f1d93b8147fafa13753",
"assets/assets/places/At%2520The%2520Top%2520Burj%2520Khalifa_1.jpg": "c4b82989a16313a7c116040c1c24bc4e",
"assets/assets/places/Dubai%2520City%2520Tour_1.jpg": "fde9d99d21f6bb35f594db8f599bf3ca",
"assets/assets/places/rides_1.jpg": "55532ea354064d8d05b801ccd5cc0e2a",
"assets/assets/places/Edge%2520Walk_2.jpg": "d60c4851117c475784e90abfc4112232",
"assets/assets/places/yacht_46_1.jpg": "545c8aacd94e0026c7a830d4f4ff3c34",
"assets/assets/logos/logo_2.jpeg": "8d2b03247217ecf2199cb0831bca7ddd",
"assets/assets/logos/icons8-call-48.png": "85a72cfc6ed88ad9204667aadc030690",
"assets/assets/logos/gb.png": "49614b6f880409f94603526778fdd591",
"assets/assets/logos/icons8-whatsapp-48.png": "148776e80e8b8dd1c29b06559ae77fc8",
"assets/assets/logos/fr.png": "a12244515ecad3491fd03f7b77acd428",
"assets/assets/logos/logo.png": "fcf7d8b408b7090479c63ff65c09e560",
"assets/assets/logos/pt.png": "785e9643572b2a6c17d5a8847126427a",
"assets/assets/logos/icons8-location-48.png": "61e44bfd896b0f2ba61411c76235fa7d",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
