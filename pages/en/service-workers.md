<span class="requirements">Prerequisites: good knowledge of JavaScript, basic knwoledge of exchanges in the HTTP protocol</span>

# Introduction

Service Workers (SW) is a new API with great potential. Like [Web Workers](https://www.w3.org/TR/workers/), they run on a different thread than the application's thread, and can keep running in the background when the browser is closed.

Service Workers do not have access to the DOM and to the global scope. However, they can communicate with the application via [the `postMessage` API](https://developer.mozilla.org/fr/docs/Web/API/Worker/postMessage).

# Offline PWA with Service Workers

A SW can be considered as a proxy between your PWA and the network. It can intercept and modify all the requests that are sent by the browser. Thus, it can perform URL redirection or generate responses with files and cached data. Therefore, it is a key element for offline usage.

## Service Workers vs Application Cache

It is also possible to bring offline usage with the [Application Cache](https://developer.mozilla.org/fr/docs/Web/HTML/Utiliser_Application_Cache) API which is largely supported but is **deprecated** today. This API allows to set a simple list of all the resources to cache. However, it is very limited and the updates and resources listing are often tricky, contrary to Service Workers which are more flexible and offer many more possibilities. Some examples are background synchronization and [push notifications](push-notifications.md).

## Setup and life-cycle of a service worker

To install a SW, we first need to register it with Javascript using `navigator.serviceWorker.register`. When the registration is completed, the browser tries to install the SW and then activate it on the website. The `install` event is triggered when the setup successfully completes. After that, the `activate` event is fired when the SW is ready to intercept the `fetch` and `message` events. These events are emitted respectively by a web request and a call to the `postMessage` API.

- Application code :
```javascript
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('sw.js')
  .then(function(registration) {
    // The service worker is registered
  })
  .catch(function(error){
    // SW registration failed
    // Check here the path and HTTPS connection
  })
}
```

- Service Worker code `sw.js` :
```javascript
this.addEventListener('install', function(event) {
  // The service worker is installed
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      // Load a set of files for offline usage
      return cache.addAll([
        '/index.html', '/style.css', '/app.js', '/offline.jpg'
      ]);
    })
  );
});
```

## Cache API

Traditional caching driven by the browser and the HTTP headers `cache-control` and `expires` are still useful, but the developer has very limited control over this cache.

The Cache interface of the ServiceWorker API brings a solution to this problem. In fact, it gives to the developer the responsibility of implementing the mechanics to add, remove and update the items in the cache. This allows to design different [strategies of network cache management](network-strategies.md).

This API let us use different named caches on the specific domain for which the SW is registered. The name of the cache may be notably used for *versioning*, in order to handle cache migration if the service worker has been modified.

The content of the cache consists of a dictionary of object request / response pairs. It is worth noting that it is possible to store multiple responses for the same request on the same cache.

The [documentation of the Cache API is available on MDN](https://developer.mozilla.org/fr/docs/Web/API/Cache).

Here is a typical example of using the Cache API:

```javascript
// When a network request sent by the browser is intercepted
this.addEventListener('fetch', function(event) {
  event.respondWith(
  	caches.match(event.request) // Search the cache
    .catch(() => fetch(event.request)) // Not found, lookup on the network
    .then(response => {
      /* A response can be read only once, 
      we need to clone it in order to store it in the cache */
      const savedResponse = response.clone(); 
     
      // Store the response in the cache for future calls
      caches.open('v1').then(cache => cache.put(event.request, savedResponse)); 
      
      return response
    })
    .catch(error => {
      // The network request failed and the cache is unavailable
    })
  )
});
```

Different approaches of cache management are detailed on the [network cache strategies](network-strategies.md) page.

### Storage limitation of the Cache API

On most of browsers, the storage limit is the same as the one for local data caches : see [data cache](data-cache.md) for more details.

## Developer tools

Browsers that support Service Workers generally provide buttons or shortcuts in their developer tools to debug or disable Service Workers. On chrome or Opera, they are accessible from the *Application* tab or from `chrome://inspect/#service-workers` et `chrome://serviceworker-internals`. On firefox, they are available by entering `about:serviceworkers` in the address bar.

## Browser support

Service Workers are supported by Chrome, Firefox, Opera, and recently Edge. They are under development on Safari. You can find more detailed and up-to-date information on [IsServiceWorkerReadyYet](https://jakearchibald.github.io/isserviceworkerready/).

## Applications of Service Workers

Beyond caching and adding offline, SW have many other uses:

- Send [push notifications](push-notifications.md).
- Background data synchronization
- Reply to requests coming from other domains
- Centralize the reception of data that is computation expensive, such as the geo-location or the gyroscope. This allows different pages to share the same set of data (which is also computed by a single object)
- Perform compile and build processes on the client side: TypeScript, PostCSS, Babel, etc.
- Handle custom templates based on URL patterns
- Improve performance, by pre-loading resources for example

---

[Network cache management strategies](network-strategies.md)

[On the necessity of a network management layer](network-management.md)
