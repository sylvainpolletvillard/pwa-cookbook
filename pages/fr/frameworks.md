<span class="requirements">Prérequis: aucun</span>

# L'offre PWA au sein des frameworks web client

Addy Osmani a consacré un talk à ce sujet à la Google IO 2017 :
[Production Progressive Web Apps With JavaScript Frameworks](https://www.youtube.com/watch?v=aCMbSyngXB4)

## React: [create-react-app](https://github.com/facebook/create-react-app)

React a été parmi les premiers frameworks à vouloir mieux intégrer l'aspect PWA dans leur outillage. Ce choix est une valeur sûre mais React s'adresse aux développeurs JavaScript expérimentés et initiés à la programmation réactive fonctionnelle.

`create-react-app` est un outil permettant de démarrer très rapidement un projet React avec tout l'outillage adéquat. Il propose depuis sa version 1.0 une expérience PWA par défaut. Cela comprend notamment un manifeste d'application autogénéré et un Service Worker proposant une stratégie de cache Offline-First.

Pour une solution avec rendu côté serveur, [Next.js](https://learnnextjs.com/) de Zeit est l'option la plus populaire et la plus simple à appréhender. L'équipe réfléchit à l'instar de create-react-app à proposer une approche Offline-First par défaut dans une prochaine version majeure, mais c'est toujours [en cours de discussion](https://github.com/zeit/next.js/issues/861).

## Preact: [Preact CLI](https://github.com/developit/preact-cli)

Preact est une alternative à React beaucoup plus légère (3kb) et basée sur la même API, ce qui permet de réutiliser une bonne partie de l'écosystème et de l'outillage associé à React. Sa faible taille le rend particulièrement bien adapté à l'usage mobile, et son nouvel outil en ligne de commande permet de démarrer en 30 secondes une PWA Preact avec directement un [score de 100/100 sur Lighthouse](https://googlechrome.github.io/lighthouse/viewer/?gist=142af6838482417af741d966e7804346).
A recommander aux développeurs React souhaitant encore aller plus loin dans l'optimisation et la simplification de leur outillage.

## Vue.js: [Template PWA](https://github.com/vuejs-templates/pwa)

Vue.js est un framework beaucoup plus accessible comparé à React et Angular. Il copie les meilleures fonctionnalités des frameworks concurrents pour les regrouper dans une solution simple et minimaliste, mais suffisamment modulaire et flexible pour s'adapter aux usages avancés. Vue.js est à conseiller aux débutants et à ceux qui veulent rapidement un résultat, pour la réalisation de preuves de concept par exemple.

Depuis sa version 3, l'outil `vue-cli` permet de démarrer facilement un projet Vue et propose de configurer dès le départ une PWA, via le plugin `@vue/cli-plugin-pwa`. Une interface graphique est également proposée pour encore simplifier la configuration du manifeste et du Service Worker.

De la même manière que Next.js apporte le rendu côté serveur à React, il existe [Nuxt pour Vue](https://nuxtjs.org/) qui propose quasiment les mêmes fonctionnalités et la même approche. Sébastien et Alexandre Chopin, les deux frères français à l'origine de Nuxt, ont fait savoir leur fort intérêt pour les PWA et veulent proposer une expérience Offline-ready par défaut pour tous les projets Nuxt.

## Angular

Angular est un framework avec un périmètre plus large que React et Vue, cherchant à proposer une expérience cohérente et exhaustive sur tous les aspects du développement de votre application web. Le support intégré des PWA a mis un peu plus de temps à arriver par rapport à la concurrence, mais depuis Angular CLI v6, il est proposé un module (en beta à l'heure actuelle): `@angular/pwa`

Des instructions pour initier une PWA avec Angular sont disponibles ici : [https://pwa.ng/](https://pwa.ng/). Voici également [un article](https://medium.com/p/turning-an-angular-6-app-into-a-progressive-web-app-9e6fc6361ba6) de Yassine Benabbas expliquant la transformation d'une application Angular en PWA.

---

[Outillage d'audit qualité](audit-tools.md)
