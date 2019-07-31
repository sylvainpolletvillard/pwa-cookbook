<span class="requirements">Prérequis: connaissances de base sur les langages du Web</span>

La démarche d'amélioration progressive
=======================================

Le mot *Progressive* est une référence à la démarche d'amélioration progressive (**Progressive Enhancement**). Avec le temps, ce mot a pris un sens plus large tout comme *Responsive* est aujourd'hui utilisé dans d'autres contextes que le *Responsive Web Design*.

L' objectif de cette démarche est de rendre le contenu et le service accessible au plus grand nombre. En effet, pour exploiter tout leur potentiel, les PWA ont recours à diverses technologies et API très récentes disponible seulement sur les dernières versions des navigateurs et plates-formes. Or, la grande force du Web qui fait l'intérêt stratégique et économique des PWA est son **universalité** et son ouverture au plus grand panel d'utilisateurs connectés au monde: les internautes.

C'est pourquoi **il est essentiel de ne pas discriminer les utilisateurs et de ne pas introduire une fracture technologique**: tous les internautes peu importe leur navigateur et leur dégré d'obscolescence logicielle et matérielle devraient être en mesure d'utiliser le service et d'exploiter le contenu fourni par une PWA.

Contrairement à l'approche dite de dégradation élégante (**Graceful Degradation**), l'amélioration progressive est dite *bottom-up*: on développe par couches successives en commençant par le socle le plus basique et universel, puis en ajoutant progressivement des couches plus complexes, spécifiques et restrictives.

On peut déjà identifier trois couches principales, intimement liées à l'histoire du Web et à ses langages fondamentaux:
- la **couche sémantique (HTML)** : elle permet de décrire et de hiérarchiser le contenu textuel et média de l'application. Le point d'attention à avoir sur cette couche, et souvent négligé, est celui de l'[accessibilité](http://www.accessiweb.org/). Une bonne sémantique est primordiale pour l'accès aux personnes handicapées, mais également pour la consommation du contenu par des agents externes, robots et moteurs d'indexation.
- la **couche visuelle (CSS)** : une fois le contenu décrit, on peut travailler à son agencement, à la lisibilité et et à l'ergonomie de l'application. Il s'agit également d'optimiser l'affichage selon le contexte utilisateur (taille d'écran, orientation, contexte d'utilisation, environnement...) ; ce sont les principes du [Responsive Web Design](https://developers.google.com/web/fundamentals/design-and-ui/responsive/).
- la **couche interactive (JavaScript)** : cette couche particulièrement travaillée dans le cadre des PWA décrit la logique applicative et les comportements face aux évènements utilisateur et système. JavaScript offre beaucoup d'informations sur l'utilisateur et son appareil, ce qui permet d'aller très loin dans l'adaptation, l'optimisation et la personnalisation du service spécifiquement pour ce client.

<figure>
	<img src="../img/progressive-enhancement.jpg" alt="Les trois couches de l'amélioration progressive dans un bonbon M&M's">
	<figcaption>Une représentation imagée des trois couches de l'amélioration progressive</figcaption>
</figure>

 Pour chaque couche, il est nécessaire de tenir compte de l'évolution des langages associés et de fournir des versions alternatives ou dégradées lorsque certaines fonctionnalités ne sont pas supportées. On peut se servir de [polyfills](https://fr.wikipedia.org/wiki/Polyfill) lorsque c'est techniquement possible, ou sinon avoir recours à des solutions de contournement (fallbacks). Des sites tels que [HTML5Please](http://html5please.com/) ou [CanIUse](http://caniuse.com/) répertorient les statistiques de support et les solutions alternatives existantes.
 
 Même si les PWA ne suivent pas toutes une approche stricte de l'amélioration progressive, notamment sur la question de l'indépendance vis-à-vis de JavaScript, cette méthodologie de conception a largement influencé les spécifications et fonctionnalités qui s'articulent autour des PWA, d'où le P pour "Progressive".
 
-----------------------------------------------------

[Qu'est-ce qu'une PWA ?](pwa.md)

[Outillage d'audit](audit-tools.md)
