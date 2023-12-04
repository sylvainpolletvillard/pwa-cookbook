<span class="requirements">Prerequisite: Basic knowledge of Javascript</span>

# Introduction

A cache consists of the backbend data that is stored locally, either fully or partially. This section tackles the subjects of the different caching possibilities of Progressive Web Apps.

# Caches on the client side

Web browsers have different Javascript APIs that allow to store data for a short or long duration, locally on the user's device. Using these caches is obviously essential in order to add offline to a PWA. In addition to that, caches can be used to optimize the application by avoiding redundant request and by implementing strategies for *latency compensation*.

## The different local storage APIs

All browser caches are isolated by browser, user account and domain name. It is not possible to interact with the cache of another domain or another browser. However, on the other hand, these caches are synchronized if different tabs for the same domain are opened.

### LocalStorage

The `LocalStorage` is a very simple but limited storage. It stores data using a key-value pair structure (associative table like a *hashmap*). Read and writes are performed synchronously. LocalStorage entries are persisted on the user's drive, without any expiration delay.

```javascript
// fetch
const userPrefs = JSON.parse(localStorage.getItem('userPrefs')) || {};

// save
localStorage.setItem('userPrefs', JSON.stringify(userPrefs));
```

### SessionStorage

`SessionStorage` is an API which is very similar to `LocalStorage` with the exception that it stores data temporarily. The cache is in fact cleared when the browser is closed.

```javascript
sessionStorage.setItem('temporary', JSON.stringify(tempData));
```

### IndexedDB

This API provides a substitute to a database that is stored on the user's hard drive. It allows to perform selection requests on structured data using Javascript . It is event-based and works with *web workers* and *service workers*. It is largely [supported nowadays](http://caniuse.com/#feat=indexeddb).

Since there are implementation bugs in some browsers, it is recommended to use a library that plays the role of an abstraction layer rather than directly using the API.

```javascript
// With Dexie.js library
const db = new Dexie('MyDatabase');

// Definition of a schema
db.version(1).stores({ friends: 'name, age' });

// Opening the database
db.open().catch(error => console.error('Oups: ' + error));

// Search query
db.friends
  .where('age').above(75)
  .each(friend => console.log(friend.name));    		

// Add query
db.friends.add({ name: 'Camilla', age: 25 });
```

### Cache API

Dedicated to the (request, response) couples. See section [Service Workers](service-workers.md)

## How much local data can we store

The storage limit of the different caches depend on different criteria: the browser, the operating system, the remaining storage space on the device, etc. In addition to that, browsers can decide to remove all the caches of an origin when it becomes necessary. Here are the identified rules of the different browsers on august 2016. Beware that they may change at any time:

- **Chrome and Opera**: there is a shared quota between all the storage APIs which is specific for each domain.
- **Firefox**: there is no storage limit, but a confirmation message is presented to the user when the storage exceeds 50 MB.
- **Safari desktop**: Unlimited with a confirmation message beyond 5 MB.
- **Safari Mobile** : 50 MB max.
- **Internet Explorer**: maximum of 250 MB with a confirmation after reaching 10 MB.

It is possible to request the available and used quota using Javascript thanks to the [Quota Management API](https://www.w3.org/TR/quota-api/) on browsers that support it.

## Notable libraries

- [Store.js](https://github.com/marcuswestin/store.js/): a wrapper for the different storage APIs, except for IndexedDB. It chooses the best storage among the options available on the browser and provides some new features such as expiration time, events, push/shift operations, and so on.
- [Dexie.js](http://dexie.org/): a minimal wrapper around IndexDB that provides a simplified API and handles the different browsers' implementations.
- [Lovefield](https://github.com/google/lovefield): a relational database running on browsers which is maintained by Google. It relies on IndexedDB an provides API that is similar to SQL.

## Which storage to use and in which circumstances

Here are some elements to help you answer this question:

For storing resources reachable by a URL, use [Service Workers and the Cache API](service-workers.md)

For temporary storage, the `sessionStorage` can handle some information that were usually stored as cookies and that were uselessly making requests heavier.

Finally, for dynamic data, this depends on their size and complexity. If there are not a lot of them (less than 500 KB) and can be serialized to JSON, then the `localStorage` is the choice of simplicity.

For other situations, using an IndexedDB library or wrapper such as *Dexie* or *Lovefield* will provide much more possibilities for manipulating the data. It is useful for example when the internet connection is unavailable and you want to reproduce on the client side some requests normally handled by the back-end using locally stored data.

 ---

 [Offline and Service Workers](service-workers.md)
