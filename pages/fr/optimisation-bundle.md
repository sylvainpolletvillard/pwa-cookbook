<span class="requirements">Prérequis: expérience avec les chaînes de build, les compilateurs et les minifieurs</span>

Empaqueter et réduire la taille de l'application
===================================

Pour atteindre les objectifs de performance (chargement initial sur un mobile bas de gamme en 3G en moins de 5 secondes), les PWA disposent très souvent d'un setup de build chargé d'empaqueter, optimiser et compresser toutes les dépendances. En sortie de ce processus, on trouve un petit nombre de fichiers paquets aussi appelés **bundles**. Le gain de performance est uniquement valable au premier chargement de l'application, ensuite la mise en cache par le Service Worker prend le relais et assure des chargements quasi-instantanés.

## Empaqueter les ressources avec Webpack

Il existe de nombreux outils et chaînes de build pour les projets front-end, mais l'un d'entre eux s'est imposé récemment comme le plus populaire et le plus complet : [Webpack](https://webpack.js.org/)

<figure>
	<img src="../img/webpack.svg" alt="Principe de fonctionnement de Webpack">
	<figcaption>Principe de fonctionnement de Webpack</figcaption>
</figure>

Webpack se distingue par sa polyvalence. Il permet en effet d'empaqueter toutes sortes de fichiers (JavaScript, CSS, images, templates...), là où auparavant il fallait composer soi-même un ensemble d'outils pour avoir un setup de build complet. Sa popularité lui a également permis de disposer d'un vaste écosystème de plugins tiers. Webpack est aujourd'hui utilisé et recommandé par la plupart des frameworks JavaScript : React, Vue, Angular...

````bash
./node_modules/.bin/webpack app/index.js dist/bundle.js

Hash: ff6c1d39b26f89b3b7bb
Version: webpack 2.2.0
Time: 385ms
    Asset    Size  Chunks                    Chunk Names
bundle.js  544 kB       0  [emitted]  [big]  main
   [0] ./~/lodash/lodash.js 540 kB {0} [built]
   [1] (webpack)/buildin/global.js 509 bytes {0} [built]
   [2] (webpack)/buildin/module.js 517 bytes {0} [built]
   [3] ./app/index.js 278 bytes {0} [built]
````

Si vous avez découplé votre code applicatif en utilisant les [modules ES2015](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import) et `import` / `export`, Webpack est capable d'effectuer une analyse statique de votre arbre de dépendances et de regrouper le tout en un seul fichier tout en gérant l'ordre d'exécution et les duplicats.

Avec l'outil [webpack-bundle-analyzer](https://github.com/th0r/webpack-bundle-analyzer), il est possible d'analyser a posteriori le contenu d'un bundle et la répartition en taille des différents modules afin d'identifier les modules trop lourds ou superflus.

<figure>
	<img src="../img/webpack-bundle-analyzer.gif" alt="Démonstration de l'outil webpack-bundle-analyzer">
	<figcaption>Démonstration de l'outil webpack-bundle-analyzer</figcaption>
</figure>

## Minifier JS et CSS

Webpack intègre par défaut un mode production (`-p`) qui exécute l'outil *UglifyJS* pour minifier le code JavaScript des bundles. C'est une manière très simple de réduire la taille de ces bundles en production.

Si vous souhaitez minifier du code à la norme ES6, ce que UglifyJS ne permet pas pour le moment, vous pouvez utiliser l'outil [babili](https://github.com/babel/babili), un minifieur modulaire basé sur Babel.

Concernant la minification du CSS, il existe [cssnano](http://cssnano.co/) qui est lui aussi modulaire et basé sur PostCSS. Tout comme babili, cet outil écrit en JavaScript s'intègre très bien avec Webpack.

## Activer `gzip`

[gzip](http://www.gnu.org/software/gzip/) est une autre amélioration essentielle pour optimiser la taille de vos bundles, à mettre en place côté serveur cette fois. Cet algorithme de compression remplace les  chaînes de caractères récurrentes dans vos fichiers par des pointeurs. Selon les fichiers, on peut observer des gains très significatifs : parfois moins de 70% de la taille originale en sortie.

## Images: compression et Data URL

Les images sont souvent les ressources les plus lourdes à télécharger dans un site web, mais on dispose aujourd'hui d'excellents algorithmes de compression. 

Vous pouvez compresser manuellement chacune de vos images, ou utiliser un outil à la chaîne de build tel que [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) qui utilise `imagemin` pour minifier PNG, JPEF, GIF et SVG.

Dans le cas des petites images telles que les pictogrammes, il peut être intéressant de remplacer l'URL vers l'image par le code de cette image sous forme de Data URL. Cela réduit le nombre de requêtes HTTP à effectuer et vous prémunit des éventuelles erreurs de chargement. Le plug-in Webpack [url-loader](https://webpack.js.org/loaders/url-loader/) sert justement à ça et remplacera automatiquement les URL vers de petites images par une Data URL, en dessous d'une certaine taille limite.

## Code splitting: découpe intelligente des bundles

Empaqueter l'intégralité du code applicatif dans un seul bundle n'est pas forcément la meilleure idée. Cela peut donner un bundle très lourd qui bloque le chargement initial de l'application.

Webpack dispose d'une fonctionnalité très appréciée de *code splitting*. Elle permet de produire un ensemble de bundles qui peuvent être chargés à la demande indépendamment l'un de l'autre: pour une certaine route ou suite à un certain évènement utilisateur par exemple.

Il existe des outils faisant automatiquement cette découpe en sous-bundles, mais le faire manuellement et explicitement donne toujours les meilleurs résultats. Des [guides très complets](https://webpack.js.org/guides/code-splitting/) sont disponibles dans la documentation officielle de Webpack pour mettre en place cette fonctionnalité. 

La recommandation est d'éviter les bundles dépassant les 500 Ko.

## Pour aller plus loin

<figure>
	<img src="../img/optimization-fluentconf.png" alt="Outillage d'optimisation">
	<figcaption>8 façons de réduire le temps de chargement d'une application (FluentConf 2017, Addy Osmani)</figcaption>
</figure>

[Addy Osmani](https://twitter.com/addyosmani) a donné [d'excellents talks](https://www.youtube.com/watch?v=7vUs5yOuv-o) et écrit [des articles très détaillés](https://medium.com/reloading/javascript-start-up-performance-69200f43b201) concernant l'outillage d'optimisation des applications web. C'est la personne à suivre si vous voulez approfondir vos connaissances en la matière.

---

[Utiliser les caches de données côté client](data-cache.md)

[Service Workers](service-workers.md)
