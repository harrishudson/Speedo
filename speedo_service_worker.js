'use strict';

var cacheVersion = ' speedo_cache_version_0002';
var currentCache = {
  offline: 'offline-cache' + cacheVersion
};

const offlineUrl = 'speedo.html';
const offlineUrls = [
 'speedo.html',
 'favicon.svg',
 'speedo.webmanifest'
];

this.addEventListener('install', event => {
 event.waitUntil(
  caches.open(currentCache.offline).then(function(cache) {
    return cache.addAll(offlineUrls); 
  })
 );
});

this.addEventListener('fetch', event => {
 // request.mode = navigate isn't supported in all browsers
 // so include a check for Accept: text/html header.
 if (event.request.mode==='navigate'||(event.request.method==='GET'&&event.request.headers.get('accept').includes('text/html'))) {
  event.respondWith(
  fetch(event.request.url).catch(error => {
   // Return the offline page
   return caches.match(offlineUrl,{ignoreSearch:true});
   })
  );
 }
 else{
  // Respond with everything else if we can
  event.respondWith(caches.match(event.request,{ignoreSearch:true})
   .then(function (response) {
    return response || fetch(event.request) ;
   })
  );
 }
});
