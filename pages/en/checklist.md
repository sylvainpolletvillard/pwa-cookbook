<span class="requirements">Prerequisites: quick read of all the previous sections</span>

# PWA development checklist

Here is a resume of all the actions and features you should implement to have a great Progressive Web Application, sorted by priority. 

You can check the boxes, their state will be saved the next time you come back.

## Priority 1 - Essential

- A [web application manifest](manifest.md) is available
- The app and all its resources are served with HTTPS
- The app is using a responsive, mobile-friendly design. [Do the test](https://search.google.com/search-console/mobile-friendly)
- The homepage is loading offline thanks to a [Service Worker](service-workers.md)
- The app is well tested on Chrome, Edge, Firefox and Safari, at least.

## Priority 2 - Important

- Every page of the application has its own URL, which can be indexed and is accessible from a new tab.
- The application content is correctly indexed on all pages. [Do the test](https://support.google.com/webmasters/answer/6066468)
- The initial loading time on a low-cost mobile and a 3G connexion takes less than 5 seconds.
- The actions and page transitions are not blocking, there is an immediate feedback even with bad connections.
- The navigation history is handled with the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- The application is working on older browsers (IE 11, Firefox 3), at least in a degraded mode.
- Offline navigation is possible on all or part of the content.

## Priority 3 - Potentially interesting

- The pages can be rendered on the server side (SSR) for clients without JavaScript support, or to optimize the first load / first visit scenario.
- Push notifications are proposed when relevant. These notifications follow the [current best practices](push-notifications.md).
- Navigation using the Back / Forward button preserves the scroll position of the user.
- The page is not jumping around when some content is loading (images, AJAX etc.)
- The application informs the user when he lost or retrieve its connexion.

## Priority 4 - Optional

- The "Add to Screen" action is proposed at a convenient time for the user, depending on his current actions. 
- Critical CSS for initial display is extracted and put *inline* in the HTML document
- The [Schema.org metadata](https://schema.org/) are filled for a better indexation by search engines
- Some metadata used by social networks are filled when appropriate.
- Subscription and login are done through the [Credential Management API](https://developers.google.com/web/fundamentals/security/credential-management/)
- Payments are done through the [Payment Request API](https://developers.google.com/web/fundamentals/discovery-and-monetization/payment-request/)

 ---
 
 [Audit tools](audit-tools.md)
