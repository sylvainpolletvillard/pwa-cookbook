<span class="requirements">Prérequis: connaissances de base en JavaScript</span>

Les caches de données côté client
====================================

Les navigateurs disposent de plusieurs API JavaScript  permettant de stocker à court ou long terme des données localement sur le poste client. Utiliser ces caches est évidemment essentiel pour disposer d'un mode hors-ligne dans votre application, mais ces caches peuvent également servir à optimiser votre application en éliminant les requêtes redondantes et en mettant en oeuvre des stratégies de *compensation de latence*.

## Les différentes API de stockage local

Tous les caches navigateurs sont isolés par navigateur, compte utilisateur et nom de domaine. Il n'est pas possible d'interagir avec le cache d'un autre domaine ou d'un autre navigateur. En revanche, ces caches sont synchronisés si le même domaine est ouvert dans plusieurs onglets.

### LocalStorage

Le localStorage est un stockage très simple à l'utilisation mais assez limité. Il stocke les données sous la forme de paires clé-valeur comme une *hashmap* (tableau associatif). Les lectures et écritures sont faites de manière synchrone. Les entrées sont conservées de manière persistante sur le disque utilisateur, sans délai d'expiration.

```javascript
// fetch
const userPrefs = JSON.parse(localStorage.getItem('userPrefs')) || {};

// save
localStorage.setItem('userPrefs', JSON.stringify(userPrefs));
```

### SessionStorage

Le sessionStorage a une API très similaire au localStorage mais stocke les données temporairement. Le cache est en effet nettoyé à la fermeture du navigateur.

```javascript
sessionStorage.setItem('temporary', JSON.stringify(tempData));
```

### IndexedDB

Cette API fournit un ersatz de base de données stockée sur le disque dur de l'utilisateur, permettant d'effectuer des requêtes de recherche en JavaScript sur des données structurées. Elle est basée sur les événements, fonctionne avec les *Web Workers* et *Service Workers*, et est aujourd'hui [largement supportée](http://caniuse.com/#feat=indexeddb).

Compte-tenu des bugs d'implémentation dans certains navigateurs, il est recommandé de passer par une bibliothèque servant de couche d'abstraction plutôt que d'utiliser directement l'API.

```javascript
// Avec la bibliothèque Dexie.js
const db = new Dexie('MyDatabase');

// Definition d'un schéma
db.version(1).stores({ friends: 'name, age' });

// Ouvre la base de données
db.open().catch(error => console.error('Oups: ' + error));

// Requête de recherche
db.friends
  .where('age').above(75)
  .each(friend => console.log(friend.name));    		

// Requête d'ajout
db.friends.add({ name: 'Camilla', age: 25 });
```

### Cache API

Dédié aux couples requêtes/réponses. Voir la section [Service Workers](service-workers.md)

## Combien peut-on stocker de données localement ?

La limite de stockage dans ces caches dépend de divers critères : le navigateur, le système d'exploitation, l'espace physique restant sur l'appareil... De plus, les navigateurs peuvent décider de supprimer tous les caches d'une origine lorsque cela s'avère nécessaire. Voici les règles identifiées en août 2016 pour les différents navigateurs, sachant qu'elles sont susceptibles d'évoluer à tout moment:
- **Chrome et Opera** : il y a un quota partagé par toutes les API de stockage et spécifique à chaque nom de domaine
- **Firefox** : il n'y a pas de limite, mais un message de confirmation est affiché à l'utilisateur au delà de 50 Mo
- **Safari Desktop** : illimité et message de confirmation après 5 Mo
- **Safari Mobile** : 50 Mo max
- **Internet Explorer 10+** : maximum 250 Mo avec confirmation à partir de 10 Mo
  
Il est possible de requêter le quota disponible et utilisé en JavaScript via la [Quota Management API](https://www.w3.org/TR/quota-api/) sur les navigateurs qui la supportent.
  
## Bibliothèques notables

- [Store.js](https://github.com/marcuswestin/store.js/) : un wrapper autour des diverses API de stockage simple (hors IndexedDB) ; il choisit le meilleur stockage parmi les disponibles sur le navigateur et fournit quelques nouvelles fonctionnalités (temps d'expiration, événements, opérations push/shift etc...)

- [Dexie.js](http://dexie.org/) : un wrapper minimaliste autour de IndexedDB qui fournit une API simplifiée et lisse les différences d'implémentation des navigateurs.

- [Lovefield](https://github.com/google/lovefield) : une base de données relationnelle sur navigateur maintenue par Google ; elle fournit une API proche de SQL par-dessus IndexedDB.

## Quel stockage utiliser et dans quelles circonstances ?

Pour stocker des ressources adressables par URL, utilisez un [Service Worker et la Cache API](service-workers.md)

Pour du stockage temporaire, le `sessionStorage` est adapté notamment pour décharger certaines informations que vous aviez l'habitude de faire transiter par cookies, et qui encombraient inutilement chaque requête. 

Enfin, pour les autres données dynamiques, cela dépend de leur volume et de leur complexité. S'il n'y en a pas beaucoup (moins de 500 Ko) et qu'elles sont sérialisables en JSON, le `localStorage` est le choix de la simplicité. 

Sinon, utiliser une bibliothèque autour de IndexedDB comme Dexie ou Lovefield vous fournira beaucoup plus de fonctionnalités pour chercher/trier des données. C'est par exemple utile quand la connexion est indisponible et que vous voulez reproduire côté client certaines requêtes normalement faites en back avec les données dont vous disposez localement. 
 
 ---
 
 [Mode hors-ligne et Service Workers](service-workers.md)
