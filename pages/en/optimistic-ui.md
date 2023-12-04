<span class="requirements">Prerequisites: Knowing how single page webapps work</span>

# Latency compensation (or *Optimistic UI*)

## Operating principle

The principle behind latency compensation is that all server requests will succeed in the vast majority of cases. Thus, it is not necessary to wait for the server response to continue the navigation and update the display on the client side. It is a frequently used technique in web-mails and instant messaging, where smoothness in the action flow is essential for a good user experience.

<figure>
	<img src="../img/optimistic-ui.png" alt="Schematic representration of Latency compensation">
</figure>

To setup this principle, there are some conditions:

- The client model must be able to be updated without the server response, by assuming a success of the request. This affects nearly all POST / REQUESTS and the GET ones.
- In case of an error, the actions must be reversible; knowing that other actions may happen at the same time.
- The user feedback on errors must be reflected in a way that an unexpected error does not interrupt the user while performing actions. *Example: if the user is modifying a sheet that was badly created, the modification action must not substitute to the creation one*

## Error management

One of the common traps of this technique is that the rollback action may override more recent or currently used data. To avoid this problem, a JavaScript library for state management like Redux or Vuex can be used. On the most complicated situations, some knowledge on operational transformations and write conflict management may turn out to be helpful.

You can of course choose to implement latency compensation only for the simplest cases, and hopefully there are still many of them.

## Advantages of this methodology

The most obvious advantage is that the navigation is nearly instantaneous for the optimized actions. Even if the duration of the requests does not change, they are executed in background and dot not bloc the user experience and his momentum. It is thus a key element for providing a feeling of smoothness and fluidity to your app and satisfy your users.

The compensation of latency is also useful for the developers that want to manage their data model in a way that is asynchronous and resistant to conflicts. This allows to lay the foundations for other features such as offline or a collaborative edition mode. In fact, if we consider that failed request are not frequent, the mechanics of synchronization and the user scenarios are relatively similar to those in offline mode. Only the duration of the failures and the fact that they are predictable change the equation.