<span class="requirements">Prérequis: lecture de la page <a href="network-management.md">Couche de gestion réseau</a></span>

Gestion des requêtes en échec et relances
==========================================

Les fonctions `http` décrites dans les codes ci-dessous sont des surcouches à l'API `fetch` et sont à utiliser pour tous les appels AJAX dans le code applicatif. Le rôle de cette surcouche est de traiter les erreurs de requête que les stratégies de cache du Service Worker n'ont pas suffit à régler. 

## Relance au choix de l'utilisateur

Cet exemple basique bloque l'utilisateur en cas d'erreur réseau et lui demande s'il souhaite relancer la requête en échec ou abandonner.

```javascript
function http(...args){
    return fetch(...args).catch(err => {
       	if(confirm(`La requête a échoué: ${err.message} ; Réessayer ?`))
       		return http(...args)
       	else throw err
    })
}
```

Cette boîte de dialogue bloquante est une solution très limitée et agaçante pour l'utilisateur, nous allons donc voir comment améliorer cela.

## Relance automatique avec délai progressif

Ici, les requêtes en échec sont automatiquement relancées en attendant un délai de plus en plus long entre chaque tentative. Dans cet exemple, ce délai s'étend indéfiniment, mais on peut bien sûr ajouter une condition d'arrêt qui rejette la Promise.

```javascript
const wait = time => new Promise(resolve => setTimeout(resolve, time));

function http(url, params, delay=1000){
    return fetch(url, params).catch(err => {
    	 // wait 1 second then increase the delay (fibonacci style)       	
       	return wait(delay).then(() => http(url, params, delay * 21/13))
    })
}
```

## Pile de requêtes en échec

Les deux stratégies précédentes ne se soucient pas de l'ordre d'appel des callbacks. S'il est important de traiter les réponses dans l'ordre dans lequel les requêtes ont été effectuées, on stocke les requêtes dans une file d'attente et on exécute chaque requête l'une après l'autre. En cas d'échec, on attend 5 secondes avant de réessayer la même requête.

```javascript
const requestQueue = [];

function http(...args){
	return new Promise(resolve => {
		requestQueue.push({ args, resolve }); // add to the queue
		if(requestQueue.length === 1) tryNextRequest() // try immediately if first
	})
}

function tryNextRequest(){
	let request = requestQueue[0]; // try first request in stack
	return request && fetch(...request.args).then(response => {
		request.resolve(response); // success, resolve http() promise
		requestQueue.shift(); // remove successful request from queue
		tryNextRequest() // try the next one in stack
	}).catch(err => wait(5000).then(tryNextRequest)) // fail, try again later
}
```

Cette stratégie convient bien aux modes offline plus complexes où on permet à l'utilisateur d'effectuer certaines actions qui dépendent d'actions précédentes n'ayant pas encore été traitées côté serveur: lorsque la connexion est retrouvée, il est alors essentiel de relancer ces requêtes dans l'ordre.

Comme améliorations, on peut remplacer le délai fixe par un délai progressif comme pour la solution précédente, ou encore détecter les doublons dans la file d'attente. A vous de consolider votre stratégie progressivement.

---

[Couche de gestion réseau](network-management.md)

[Stratégies de gestion du cache réseau](network-strategies.md)
