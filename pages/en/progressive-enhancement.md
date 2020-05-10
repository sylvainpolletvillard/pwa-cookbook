<span class="requirements">Prerequisites: basic knowledge of Web languages</span>

# Progressive enhancement

The word *Progressive* in *Progressive Web Apps* is a reference to the **Progressive Enhancement** strategy. over time, this term has gained a wider meaning in the same way that *Responsive* is nowadays used in contexts other than the *Responsive Web Design*.

The objective of progressive enhancement is to make the content and the services accessible to a every audience. In fact, in order to exploit all their potential, PWAs resort to diverse technologies and recent API that are only available on recent versions of web browsers. In contrast, the most important aspect of the Web that makes PWA interesting is its **universality** and being open to the largest group of connected users: the internet users. This is why **it is essential to not discriminate the users and to not introduce a technological break**: all the users no matter what browser they use and their degree of software and hardware obsolescence must be able to both use services and to exploit the content provided by the PWA.

As opposed to **Graceful Degradation**, progressive enhancement is said to be a *bottom-up* strategy. This means that we develop the different layers one by one starting with the most basic and universal layer, and then we progressively add more complex layers, which are more specific and restrictive.

We can already identify three main layers, initially linked to the history of the web and its fundamental languages:

- The **semantic layer (HTML)**: it allows to describe the textual and media content of the application and define its hierarchy. We'd like to draw your attention on a matter which is often neglected in this layer: it is the [accessibility](http://www.accessiweb.org/). Good semantics are essential for disabled people, but also for consuming content from external agents, robots and search engines.
- The **visual layer (CSS)**: once the content has been described, we can work on its layout as well as the readability and the usability of the app. This layer consists also in optimizing the display depending on the user context (screen size, orientation, environment, device...). These principles are defined as the [Responsive Web Design](https://developers.google.com/web/fundamentals/design-and-ui/responsive/).
- The **interactive layer (Javascript)**: this layer which is used a lot in PWAs describes the application logic and the behaviors in reaction to the user and system events. Because javaScript provides a lot information on the user and his device, this allows to go very far in the adaptation, the optimization and the customization of the services specifically for each client.

<figure>
	<img src="../img/progressive-enhancement.jpg" alt="The three layers of progressive enhancement illustrated using an M&M's">
	<figcaption>A representation of the three layers of progressive enhancement</figcaption>
</figure>

For each layer, it is necessary to take into account the evolution of the associated programming language and to provide alternative or downgraded versions when some features are not supported. We can use [polyfills](https://fr.wikipedia.org/wiki/Polyfill) when it is technically possible, or use fallback solutions. Websites such as [HTML5Please](http://html5please.com/) or [CanIUse](http://caniuse.com/) allow to know which features are available on the different browsers and provides the existing alternative solutions.

Even if PWAs do not strictly follow the progressive enhancement strategy, notably on the independence with regards to JavaScript, this methodology has largely influenced the specifications and the features that are centered around PWAs. Thus, the P from "Progressive"

-----------------------------------------------------

[What is a PWA?](pwa.md)

[Audit tools](audit-tools.md)
