<span class="requirements">Prerequisites: none</span>

# Integration with the different platforms

One of the features of the PWA technology is that it is strongly supported by major software and Operating systems publishers, on mobile as well as on desktop: [Google on the Android ecosystem](https://www.nextinpact.com/news/103152-chrome-57-beta-veut-propulser-progressive-web-apps-au-premier-plan-sur-android.htm) and [Microsoft on the Windows ecosystem](https://blogs.windows.com/msedgedev/2016/07/08/the-progress-of-web-apps/#zl4jYkfdeKsPjZRQ.97).

These actors are mobilized on all levels:

- **Specification**: Google, Microsoft and the other companies working with web technologies play a major role on the elaboration of web standards. Many of their employees occupy seats at the W3C and WHATWG.
- **Implementation**: In addition to their contribution to the specifications, Chrome, Firefox and Edge teams experiment a lot on PWA through alpha and beta versions of their respective browsers.
- **Integration**: There is a common will to make more room for PWA within the different operating systems and platforms. In particular, Google puts them at forefront on Android in such a way that they are not distinguished from native apps.

## Setup and app shortcut

The PWA manifest allows the system to retrieve contextual information on the currently opened website. It also allows it to perform tests over its features and content, then eventually to suggest its installation alongside other apps (native apps and PWA). This process is popularized on Android with the denomination *Add to home screen* that originates from the label of the same action.

<figure>
    <img src="../img/add-to-home-screen.gif"
        alt="Démo Add to home screen sur Android" />
    <figcaption>"Add to home screen" demo on Chrome for Android</figcaption>
</figure>

## Publishing on the app stores

Microsoft announced that it intends to [put PWA on the on the forefront of the Windows Store](https://blogs.windows.com/msedgedev/2016/07/08/the-progress-of-web-apps/#zl4jYkfdeKsPjZRQ.97), in the same categories as native Windows apps. The submission of a PWA on the Store follows the same steps of a native app; necessity of a developer account and a review and verification process. However, once validated, updating a PWA on the Store should be as easy as redeploying a website on a server, without any additional review from Microsoft.

On the Google side, they are much more advanced in this subject thanks to the [Chrome Web Store](https://chrome.google.com/webstore/) which allows to install extension which can be shortcuts to PWA. In a near or far future, beyond rumors and speculations about merging ChromeOS and Android (Andromeda project, Fuchsia OS), Google has already laid the foundation with [*WebAPK*](https://www.xda-developers.com/deeply-integrated-progressive-web-apps-are-already-live-for-chrome-on-android/). PWA can in fact be packaged and published under this Android specific format, allowing for a better integration, more permissions and supplementary resources.

## Push notifications

Each platform can use specific features to improve the integration of PWA. We can cite for example the [notifications push](push-notifications), which are used a lot in smartphones and are being used more and more on desktops (macOS, Windows).

-------------------------------------------

[Web App Manifest](manifest.md)

[Push Notification](push-notifications.md)
