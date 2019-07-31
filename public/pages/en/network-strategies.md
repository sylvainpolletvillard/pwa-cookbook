<span class="requirements">Prerequisites: read the page <a href="service-workers.md">Service Workers</a>, advanced knowledge in JavaScript</span>

Common strategies for network cache management
===============================================

First of all, let's define some utility functions which will be used to define our strategies. They need to be included in the service worker:

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

In the following sections, we define some common cache management strategies.

## Fallback cache

The service worker first tries to retrieve the content from the network. If there is a network error or timeout, it serves the cached version if available.

 ```javascript
self.addEventListener('fetch', event => event.respondWith(
    fromNetwork(event.request).catch(() => fromCache(event.request))
));
 ```
## Cache and update

The service worker immediately returns the cached version of the resource if available, and requests the network in parallel to update the cache when the request succeeds.

  ```javascript
self.addEventListener('fetch', function (event) {
    // answer immediately, without waiting for the network response
    event.respondWith(fromCache(event.request));
    // prevent the worker from being killed until the cache is updated
    event.waitUntil(updateCache(event.request));
});
  ```

## Cache, update and refresh

This strategy is a variant of the previous one with the addition of updating the UI when the request succeeds. The page rendering is thus performed twice (once with the cached resource and once with the fresh new version loaded from the network). This strategy is really interesting for frameworks that use a virtual DOM to limit the impact of the second rendering.

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

The service worker pre-caches all the resources to be cached. These resources are listed in a JSON file.

This strategy is useful to ensure that users can immediately access the app in offline mode at first visit. However, this requires a lot of requests and bandwidth as soon as the page is loaded. In this case, it can be compared to a silent app install.

```javascript
self.addEventListener('install', function (event) {
    event.waitUntil(Promise.all([
        caches.open(CACHE),
        fetch('files-to-cache.json').then(res => res.json())
    ]).then(([cache, files]) => cache.addAll(files)))
})
```

## Going further

Other strategies are provided by Mozilla along with their commented code at [serviceworke.rs](http://serviceworke.rs)

---

[Service Workers](service-workers.md)

[Optimistic UI](optimistic-ui.md)

[Browser data caches](data-cache.md)
