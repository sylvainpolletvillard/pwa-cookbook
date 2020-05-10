<span class="requirements">Prérequis: bonne connaissance de JavaScript, connaissances de base sur les échanges HTTP</span>

Usage hors-ligne avec les Service Workers
===========================================

Les Service Workers (SW) sont une nouvelle API avec un très grand potentiel. Tout comme les [Web Workers](https://www.w3.org/TR/workers/), ils s'exécutent dans un thread en parallèle de celui de l'application, et peuvent tourner en tâche de fond lorsque le navigateur est fermé. Le Service Worker n'a pas accès au DOM et au scope global de l'application, mais il est possible de communiquer entre SW et application via [l'API `postMessage`](https://developer.mozilla.org/fr/docs/Web/API/Worker/postMessage).

Un Service Worker peut être considéré comme un proxy s'intercalant entre votre application et le réseau, et permettant d'intercepter et de modifier toutes les requêtes en partance du navigateur. Il peut ainsi effectuer des redirections d'URL, ou répondre avec des fichiers et des données en cache. Il s'agit donc de l'élément clé pour l'usage hors-ligne.
 
## Comparaison avec Application Cache
 
L'usage hors-ligne est également possible avec l'API [Application Cache](https://developer.mozilla.org/fr/docs/Web/HTML/Utiliser_Application_Cache), supportée plus largement mais aujourd"hui **dépréciée**. Cette API permet de lister de manière assez simple toutes les ressources à mettre en cache. Mais elle était également très limitée et les procédés de mises à jour et de listage du contenu étaient très fastidieux, là où les Service Workers offrent beaucoup plus de flexibilité et ouvrent la port à bien d'autres fonctionnalités, comme la synchronisation en arrière-plan ou les [notifications push](push-notifications.md).

## Installation et cycle de vie d'un Service Worker

Pour installer un Service Worker sur une application, il faut l'enregistrer en JavaScript via `navigator.serviceWorker.register`. Après l'enregistrement du service worker, le navigateur tente d'installer puis d'activer le service worker sur le site. L'événement `install` est déclenché lorsque l'installation se termine avec succès. L'événement `activate` est déclenché peu après, au moment où le SW est prêt à intercepter les événements `fetch` et `message` émis respectivement par une requête serveur ou un appel via l'API `postMessage`. 

- Code côté application :
```javascript
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('sw.js')
  .then(function(registration) {
    // le Service Worker est enregistré    
  })
  .catch(function(error){
    // l'enregistrement du SW a échoué
    // vérifiez le chemin et la connexion HTTPS
  })
}
```

- Code côté Service Worker `sw.js` :
```javascript
this.addEventListener('install', function(event) {
  // le Service Worker est installé	
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      // on charge en cache un ensemble de fichiers pour l'usage offline
      return cache.addAll([
        '/index.html', '/style.css', '/app.js', '/offline.jpg'
      ]);
    })
  );
});
```


## Cache API

La mise en cache classique pilotée par le navigateur et par les headers HTTP `cache-control` et `expires` est toujours très utile, mais la marge de contrôle de ce cache par le développeur reste limitée. 

L'interface Cache de l'API ServiceWorker vient apporter une solution à ce problème, puisqu'elle donne la responsabilité au développeur d'implémenter les mécaniques de mise en cache et de mise à jour. Ce qui permet d'imaginer par la suite différentes [stratégies de gestion du cache réseau](network-strategies.md).

Cette API permet de gérer plusieurs caches nommés spécifiques au domaine sur lequel est inscrit le Service Worker. Le nom du cache peut notamment être utilisé pour le *versionning*, afin de s'assurer que le contenu d'un cache est toujours exploitable après des modifications sur le code du Service Worker. 

Le contenu d'un cache est une collection de paires d'objets requête / réponse. A noter qu'il est possible de stocker plusieurs réponses pour une même requête dans un même cache. 

La [documentation de cette API peut être consultée sur le MDN](https://developer.mozilla.org/fr/docs/Web/API/Cache).

Voici un exemple d'utilisation classique de l'API Cache

```javascript
// à l'interception d'une requête réseau en partance du navigateur
this.addEventListener('fetch', function(event) {
  event.respondWith(
  	caches.match(event.request) // on cherche dans le cache
    .catch(() => fetch(event.request)) // non trouvé, on requête le réseau
    .then(response => {
      /* une réponse ne peut être lue qu'une seule fois,
     	 on doit donc la clôner pour la stocker en cache */
      const savedResponse = response.clone(); 
     
      // on stocke la réponse en cache pour les futurs appels
      caches.open('v1').then(cache => cache.put(event.request, savedResponse)); 
      
      return response
    })
    .catch(error => {
      // la requête réseau a échoué et le cache est indisponible      
    })
  )
});
```

Diverses approches pour la gestion de ce cache sont détaillées sur la page [Stratégies de cache réseau](network-strategies.md).

### Limite de stockage de l'API Cache

Sur la plupart des navigateurs, la limite de stockage est la même que pour celles des caches de données : voir [la section correspondante](data-cache.md)

### Outils développeur

Les navigateurs supportant les Service Workers proposent généralement des raccourcis dans leurs outils développeur pour les déboguer ou les retirer. Sur Chrome et Opera, ils sont accessibles via l'onglet *Application* ou via `chrome://inspect/#service-workers` et `chrome://serviceworker-internals`. Sur Firefox, ils sont disponibles via `about:serviceworkers`.

### Support des navigateurs

Les Service Workers sont supportés sur Chrome, Firefox et Opera, et plus récemment Edge. Leur implémentation est en cours sur Safari. Vous pouvez trouver des informations plus détaillées et à jour sur [IsServiceWorkerReadyYet](https://jakearchibald.github.io/isserviceworkerready/).

## Le champ d'application des Service Workers

Au delà du cache et de l'usage hors-ligne, les Service Workers peuvent potentiellement être utilisés à bien d'autres effets:
- envoyer des [notifications push](push-notifications.md)
- synchroniser des données en tâche de fond
- répondre à des requêtes venant d'autres domaines
- centraliser la réception de données coûteuses à calculer comme la géolocalisation ou le gyroscope, afin que plusieurs pages puissent partager un seul set de données
- effectuer des processus de build et de la compilation côté client: TypeScript, PostCSS, Babel etc.
- gérer des templates personnalisés basés sur des patterns d'URL
- améliorer les performances, par exemple en préchargeant des ressources

---

[Stratégies de gestion de cache réseau](network-strategies.md)

[De la nécessité d'une couche de gestion réseau](network-management.md)
