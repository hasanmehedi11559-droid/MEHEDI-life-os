const CACHE_NAME='piedutrack-v12.9-dashboard-account';
const ASSETS = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener("message", event => {
  if(event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", event => {
  if(event.request.method !== "GET") return;
  const url=new URL(event.request.url);
  // Always fetch the app shell from the network first so GitHub Pages updates
  // cannot leave an old JavaScript build controlling the UI.
  if(url.pathname.endsWith('/index.html') || url.pathname.endsWith('/service-worker.js') || url.pathname.endsWith('/manifest.json')){
    event.respondWith(fetch(event.request, {cache:'no-store'}).then(response=>{
      const copy=response.clone(); caches.open(CACHE_NAME).then(c=>c.put(event.request,copy)); return response;
    }).catch(()=>caches.match(event.request)));
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy=response.clone(); caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy)); return response;
    }).catch(()=>cached))
  );
});
