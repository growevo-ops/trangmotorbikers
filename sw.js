const CACHE='trangmotorbikers-v3';
const ASSETS=['./','./index.html','./styles.css','./app.js','./chat.js','./manifest.json',
  './icons/icon-192.png','./icons/icon-512.png',
  './img/hero-bg.jpg','./img/ebike-section-header.jpeg','./img/ccbike-section-header.jpeg',
  './img/bike-E-1.jpeg','./img/bike-E-2.jpeg','./img/bike-E-3.jpeg',
  './img/bike-CC-1.jpeg','./img/bike-CC-2.jpeg','./img/bike-CC-3.jpeg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
    const cp=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return res;
  }).catch(()=>caches.match('./index.html'))));
});
