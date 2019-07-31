<span class="requirements">Prérequis: lecture de la page <a href="service-workers.md">Service Workers</a>, connaissances avancées en JavaScript</span>

Stratégies communes de gestion du cache réseau 
===============================================
 
 Les codes suivants sont à mettre dans le service worker et utilisent ces fonctions utilitaires :
 
 ```javascript
function fromNetwork(request) {
    return new Promise(function (resolve, reject) {
        let timeoutId = setTimeout(reject, TIMEOUT); // reject if timeout

        fetch(request).then(response => {
            clearTimeout(timeoutId);
            resolve(response); // fulfill if success.
        }, reject);  // also reject if network error
    });
}

function fromCache(request) {
    return caches.open(CACHE) // open the cache where the assets are stored
    .then(cache => cache.match(request)) // search for the requested resource
    .then(match => match || Promise.reject('no-match')) // reject if not found
}

function updateCache(request) {
    return caches.open(CACHE) // open the cache where the assets are stored
    .then(cache => fetch(request)) // fetch the network
    .then(response => cache.put(request, response)) // store response in cache
}
 ```
 
 ## Cache en fallback
 
 Le Service Worker essaie dans un premier temps de récupérer le contenu depuis le réseau, mais si la requête prend trop de temps, il dessert la version en cache si disponible. 
 
 ```javascript
self.addEventListener('fetch', event => event.respondWith(
    fromNetwork(event.request).catch(() => fromCache(event.request))
));
 ```
 
  ## Cache et update
 
 Le Service Worker retourne directement la version en cache si disponible, mais requête le réseau en parallèle et met à jour ce cache lorsque la requête aboutit.
 
  ```javascript
self.addEventListener('fetch', function (event) {
    // answer immediately, without waiting for the network response
    event.respondWith(fromCache(event.request));
    // prevent the worker from being killed until the cache is updated
    event.waitUntil(updateCache(event.request));
});
  ```
 
  ## Cache, update et refresh
 
 Une variante de la stratégie précédente qui met à jour l'UI lorsque la requête réseau aboutit. Le rendu de la page est donc déclenché deux fois, ce qui prédispose cette stratégie aux frameworks utilisant un DOM virtuel pour limiter l'impact de ce nouveau rendu.
 
 ```javascript
self.addEventListener('fetch', function (event) {
    event.respondWith(fromCache(event.request));
    event.waitUntil(updateCache(event.request).then(refresh));
});

function refresh(response) {
    return self.clients.matchAll()
    .then(clients => clients.forEach(client => {
        // send a message to be handled by the client
        client.postMessage(JSON.stringify({
            type: 'refresh',
            url : response.url
        }))
    }))
}
```
 
## Precaching

Le Service Worker précharge l'ensemble des ressources à mettre en cache, listées dans un fichier JSON. C'est utile pour disposer immédiatement de l'ensemble du périmètre applicatif en mode offline, mais cela demande beaucoup de requêtes et de bande-passante dès le chargement de la première page.
 
```javascript
self.addEventListener('install', function (event) {
    event.waitUntil(Promise.all([
        caches.open(CACHE),
        fetch('files-to-cache.json').then(res => res.json())
    ]).then(([cache, files]) => cache.addAll(files)))
})
```

## Pour aller plus loin

D'autres stratégies avec le code commenté ont été mises à disposition par Mozilla sur [serviceworke.rs](http://serviceworke.rs)

---

[Les Service Workers](service-workers.md)

[La compensation de latence](optimistic-ui.md)

[Les caches de données du navigateur](data-cache.md)
