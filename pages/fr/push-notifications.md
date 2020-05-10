<span class="requirements">Prérequis: lecture de la page <a href="service-workers.md">Service Workers</a>, bonne connaissance de JavaScript</span>

Notifications Push
===================

Il est possible d'émettre des notifications Push en JavaScript, directement via l'application lorsque la page est ouverte, ou bien via un Service Worker enregistré pour votre application web afin d'émettre des notifications même quand le navigateur est fermé. Ces notifications sont multi-plateformes, elles s'adapteront donc à la plate-forme cible: notifications Android ou centre de notifications de Windows 10 par exemple.

## Bonnes pratiques et recommandations

L'usage de notifications peut vite devenir agaçant pour l'utilisateur, c'est pourquoi il convient de respecter certaines bonnes pratiques: 
- les notifications doivent être utiles et compréhensibles
- les notifications doivent être affichées aux moments adéquats, à une fréquence convenable
- l'utilisateur doit pouvoir les activer ou les désactiver via un contrôle dans l'application.
- l'utilisateur doit avoir passé un certain moment à naviguer sur l'application avant de demander l'autorisation d'émettre des notifications

## Notifications web
 
Ces notifications peuvent être émises via le code applicatif, lorsque le navigateur est ouvert et l'application web chargée.

### Permission de l'utilisateur

L'utilisateur doit autoriser les notifications pour le domaine donné avant que l'application ou le Service Worker soient en mesure d'émettre des notifications push.

```javascript
if (window.Notification && Notification.permission !== "granted") {
  Notification.requestPermission(function (status) {
    if (status === "granted") {
      // l'utilisateur a accepté, on peut désormais émettre des notifications
    }
  });
}
```

### Envoyer une notification web

Le constructeur `Notification` permet de créer simplement une notification avec un titre, une icône et un texte descriptif. Une fois créée, la notification sera immédiatement affichée.

```javascript
var notification = new Notification("Bonjour !", {
  lang : "fr", // langue de la notif (BCP 47 language tag).
  body : "Ceci est la description de ma notification",
  tag : "maNotif", // un identifiant pour récupérer la notification plus tard si besoin
  icon : "icon_url.png"
})
```

### Récupérer des évènements sur la notification

Il est possible de détecter en JavaScript quand une notification est affichée (`show`), fermée (`close`), cliquée (`click`) ou en erreur (`error`) :

```javascript
notification.addEventListener("click", function(){
  // l'utilisateur a cliqué sur la notification
}) 
```

## Notifications push via la Push API

La Push API permet via un service worker de pousser des messages à l'utilisateur depuis le serveur, peu importe si la web app est chargée ou non sur l'appareil de l'utilisateur. Cela implique l'utilisation d'un [service de push](http://pushproviders.com/) tel que Google Cloud Messenger. Le processus se déroule de cette manière :

<figure>
	<img src="../img/push-server.png" alt="Scénario de notification push">
</figure>

1. Un Service Worker actif s'inscrit au serveur Push via la méthode `pushManager.subscribe()` qui retourne une `Promise` de `PushSubscription`. 
2. L'objet `PushSubscription` contient notamment la propriété `endpoint` qui est l'URL d'inscription. On stocke celle-ci sur le serveur applicatif .
3. Lorsque le serveur souhaite envoyer une notification push, il réutilise l'URL endpoint stockée et envoie une requête au serveur Push
4. Le serveur Push s'occupe ensuite d'envoyer la notification push à l'utilisateur.

Exemple d'implémentation côté client pour les étapes 1 et 2 :
 
```javascript
navigator.serviceWorker.register('service-worker.js')
.then(registration => registration.pushManager.getSubscription())
.then(subscription => subscription || registration.pushManager.subscribe())
.then(subscription => {
	// on stocke le endpoint de push de l'utilisateur sur le serveur applicatif
	fetch('./register-push', {
		method: "POST",
		headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ endpoint: subscription.endpoint })
	})
})
``` 

Bien d'autres options peuvent etre renseignées pour une notification: la langue, une image associée, un pattern de vibration, des actions pouvant être réalisées à partir de la notification...  Des exemples plus complets sont disponibles sur [serviceworke.rs](https://serviceworke.rs/push-rich.html).

---

[Integration avec les plates-formes](integration.md)
