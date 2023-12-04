<span class="requirements">Prérequis: reading the page <a href="service-workers.md">Service Workers</a>, good knowledge of JavaScript</span>

# Push Notifications

It is possible to send push notifications using Javascript in different ways:

- Directly via the application when the web page is opened.
- Using a Service Worker that is registered for sending push notifications. This works even when the application is closed.

These notifications are multi-platform and adapt to the target platform; Android notifications or Windows 10 notifications for example.

## Best practices and recommendations

Excessive usage of notifications can quickly become annoying for the user, it is hence recommended to follow some good practices:

- The notifications must be useful and understandable.
- They must be displayed at the right times and at an appropriate frequency.
- The application must provide a way to enable or disable them.
- The user must have spent some time using the application before asking him for the authorization to receive notifications.

## Web Notifications

These notifications can be sent using the client application code, when the browser is open and the web page is loaded.

### User permission

The user must allow the notifications for a given domain so that the application or the Service Worker can become able to send notifications.

```javascript
if (window.Notification && Notification.permission !== "granted") {
  Notification.requestPermission(function (status) {
    if (status === "granted") {
      // The user has given his permission, we can now send notifications
    }
  });
}
```

### Sending a web notification

The `Notification` constructor allow to simply create a notification with a title, an icon and a descriptive text. Once created, the notification is immediately presented.

```javascript
var notification = new Notification("Hello notification !", {
  lang : "en", // language of the notification (BCP 47 language tag).
  body : "The is the description of the notification",
  tag : "myNotification", // an identifier that allow to get a reference to this notification later if needed
  icon : "icon_url.png"
})
```

### Events related to notifications

It is possible in Javascript to trigger an event when a notification is shown(`show`), closed (`close`), clicked (`click`) or has failed (`error`) :

```javascript
notification.addEventListener("click", function(){
  // the user has clicked on the notification
})
```

## Push Notifications using the Push API

The push API allows a Service Worker to present push messages from the server to the user, whether the web page is loaded or not. This implies using a [push service](http://pushproviders.com/) such as [Firebase Cloud Messenger](https://firebase.google.com/docs/cloud-messaging/) (FCM, previously GCM).

The process is carried out in the following way:

<figure>
	<img src="../img/push-server.png" alt="Push notification scenario">
</figure>

1. An active service worker subscribes to the push server using the method `pushManager.subscribe()` which returns a `Promise` of `PushSubscription`.
1. The `PushSubscription` object has the notable property `endpoint` which is the subscription URL. We store this one in the server (back-end).
1. When the server wants to send a push notification, it reuses the stored endpoint URL and sends a request to the push server.
1. The push server then takes care of sending the push notification to the user.

Here is a code snippet that shows an example implementation of the first two steps:

```javascript
navigator.serviceWorker.register('service-worker.js')
.then(registration => registration.pushManager.getSubscription())
.then(subscription => subscription || registration.pushManager.subscribe())
.then(subscription => {
  // We store the endpoint of the user in the server
  fetch('./register-push', {
    method: "POST",
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ endpoint: subscription.endpoint }
    })
})
```

Many more options are can be provided to a notification, such as the language, an associated image or a vibration pattern or the actions that can be performed from the notification. More comprehensive examples are available on [serviceworke.rs](https://serviceworke.rs/push-rich.html).

---

[Platform integration](integration.md)
