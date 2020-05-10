<span class="requirements">Prerequisites: none</span>

# PWA features in popular JS frameworks

Addy Osmani gave a talk on this subject during Google IO 2017:

[Production Progressive Web Apps With JavaScript Frameworks](https://www.youtube.com/watch?v=aCMbSyngXB4)

## React: [create-react-app](https://github.com/facebook/create-react-app)

React has been one of the first frameworks to embrace PWA in their tooling. This choice is a safe bet but React is used at its best in the hands of experienced Javascript developers who have some knowledge of functional reactive programming.

`create-react-app` is a tool that allows you to quickly setup a React project. Since its version 1.0, this tool provides a PWA experience by default. This includes an auto generated app manifest and a Service Worker configured with an Offline-First cache strategy.

On the server side, [Next.js](https://learnnextjs.com/) from Zeit is the most popular option and the simplest to apprehend. Following the example of create-react-app, the team may want to offer an offline-first approach by default in a future version, but this is still [being discussed](https://github.com/zeit/next.js/issues/861).

## Preact: [Preact CLI](https://github.com/developit/preact-cli)

Preact is a lightweight alternative (3kb) to React and is baed on the same API, making it very simple to reuse the ecosystem and the tooling associated with React. Its small size makes it particularly well suited for mobiles. In addition to that, its new CLI tool allows to start in 30 seconds a Preact PWA which has a [score of 100/100 on Lighthouse](https://googlechrome.github.io/lighthouse/viewer/?gist=142af6838482417af741d966e7804346).

We recommend it to React developers who want to further optimize and simplify their tooling.

## Vue.js: [PWA Template](https://github.com/vuejs-templates/pwa)

Vue.js is a framework which is more accessible than React and Angular. It takes the best features from concurrent frameworks and merges them into a simple and minimalist solution which is modular and flexible enough to adapt to advanced uses. Vue.js is recommended for beginners and for those who quickly want to get results; such as a POC.

Since its version 3, `vue-cli` makes it easy to start a Vue project and proposes to configure a PWA from the beginning, with `@vue/cli-plugin-pwa`. A graphical interface is also proposed to further simplify the configuration of the manifest and the Service Worker.

In the same way that `Next.js` brings server side rendering to React, [Nuxt for Vue](https://nuxtjs.org/) offers practically the same features and the same approach. Sébastien and Alexandre Chopin, the two brothers behind Nuxt, have announced their interest for PWA and want to offer an offline-ready experience by default on Nuxt projects.

## Angular

Angular is a framework with a broader scope than React and Vue, aiming to propose a consistent and comprehensive experience on all aspects of the developement of your web application. The built-in PWA support took a little longer to come up compared to its competitors, but since Angular CLI v6, there is a module for that: `@angular/pwa` (currently in beta)

Instructions for starting a PWA with Angular are available here: [https://pwa.ng/](https://pwa.ng/). Here is also an [article](https://medium.com/p/turning-an-angular-6-app-into-a-progressive-web-app-9e6fc6361ba6) by Yassine Benabbas explaining the transformation of a regular Angular application into a PWA.

---

[Audit tools](audit-tools.md)
