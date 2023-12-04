<span class="requirements">Prérequis: expérience avec les chaînes de build et les transpileurs</span>

Transpilation et affinage par navigateurs ciblés
==================================================
  
## babel-preset-env  
  
Il est aujourd'hui très courant de coder son application dans un langage ou une norme plus moderne comme TypeScript ou ES6+. Dans la chaîne de build, un outil appelé *transpilateur* compile le code source et le transforme en JavaScript exploitable par les navigateurs des utilisateurs.

Ces transpilateurs sont généralement configurés par défaut pour produire du code à la norme ES5, qui est bien supportée par la majorité des navigateurs depuis des années. Mais le support JavaScript s'améliore de jour en jour et plusieurs transformations ne sont probablement plus nécessaires pour le panel de navigateurs que vous voulez supporter.

[Babel](https://babeljs.io/), le transpilateur JavaScript le plus connu, a résolu ce problème en recommandant une nouvelle configuration qui s'adapte aux navigateurs ciblés : [`babel-preset-env`](https://github.com/babel/babel-preset-env). 

Dans cette configuration, il vous suffit de lister les navigateurs que vous devez supporter et Babel fera automatiquement le tri des fonctionnalités supportées ou non par l'ensemble de ces navigateurs, pour appliquer uniquement les transformations nécessaires. Cela se traduit par une augmentation des performances et une petite réduction de la taille des bundles.

````javascript
{ // .babelrc
  "presets": [
    ["env", { 
      "targets": { // Liste des environnements ciblés
        "browsers": [
        	"last 2 Chrome versions", // les deux dernières versions de Chrome
        	"Firefox ESR", // la dernière version à support allongé de Firefox
        	"ie >= 9", // Internet Explorer 9 et versions supérieures 
        	"> 1% in FR" // tous les navigateurs à plus de 1% de PDM en France
        ]
      }
    }]
  ]
}
````

## PostCSS

Il existe une mécanique similaire pour les feuilles de style, notamment à travers [le préprocesseur PostCSS](http://postcss.org/) et ses plugins. En effet, Andrey Sitnik, le créateur de l'option `browserslist` utilisée par `babel-preset-env`, se trouve également être l'auteur et contributeur principal de PostCSS. Cette configuration `browserslist` a en premier lieu été exploitée par des plugins PostCSS pour personnaliser leurs traitements selon les navigateurs ciblés:

- [Autoprefixer](https://github.com/postcss/autoprefixer) ajoute automatiquement les préfixes vendeurs des propriétés CSS. Indiquer les navigateurs à supporter permet d'éliminer certains préfixes non utilisés.
- [postcss-normalize](https://github.com/jonathantneal/postcss-normalize) par Jonathan Neal, co-auteur et contributeur de [Normalize.css](https://github.com/necolas/normalize.css) qui est une des feuilles de normalisation de styles les plus utilisées dans le monde. Le plugin garde uniquement les règles de normalisation qui concernent les navigateurs indiqués. 
- [doiuse](https://github.com/anandthakker/doiuse) vous indique si vous utilisez en CSS une fonctionnalité qui n'est pas gérée par l'un des navigateurs que vous supportez

Ces trois outils trouveront parfaitement leur place dans votre panoplie de base pour l'écriture de CSS, en vous simplifiant la vie sans pour autant charger une montagne de CSS dès le départ.
