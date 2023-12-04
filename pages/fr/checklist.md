<span class="requirements">Prérequis: survol de toutes les sections précédentes</span>

La check-list de développement d'une PWA
=========================================

Voici un récapitulatif de toutes les actions et fonctionnalités à mettre en place pour une bonne Progressive Web Application, triées par priorité. 

Vous pouvez cocher les cases, leur état sera sauvegardé à votre prochain passage.

## Priorité 1 - Essentiel
- Un [manifeste d'application web](manifest.md) est présent
- L' application et toutes ses ressources sont servies en HTTPS
- L' application a un design responsive adapté à l'usage mobile. [Faire le test](https://search.google.com/search-console/mobile-friendly)
- La page d'accueil se charge en hors-connexion grâce à un [Service Worker](service-workers.md)
- L' application est testée sur Chrome, Edge, Firefox et Safari

## Priorité 2 - Important
- Chaque page de l'application a sa propre URL, indexable et accessible depuis un nouvel onglet
- Le contenu applicatif est correctement indexé sur toutes les pages. [Faire le test](https://support.google.com/webmasters/answer/6066468)
- Le chargement initial sur un mobile bas de gamme en 3G prend moins de 5 secondes
- Les actions et transitions de page ne sont pas bloquantes, il y a un feedback immédiat même avec les connexions lentes
- La gestion de l'historique se fait via la [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- L' application fonctionne sur des navigateurs plus anciens (IE 11, Firefox 3), à défaut dans un mode dégradé.
- La navigation est possible en hors-connexion sur tout ou une partie du contenu.

## Priorité 3 - Potentiellement intéressant
- Le rendu des pages peut être fait côté serveur (SSR) pour les clients sans JavaScript et pour optimiser le chargement première page première visite.
- L'application propose des notifications push lorsque c'est pertinent. Ces notifications suivent [les bonnes pratiques](push-notifications.md) en vigueur.
- La navigation par les boutons Précédent / Suivant conserve la position du scroll de l'utilisateur
- Il n'y a pas de tressautements à l'affichage liés aux chargements de contenu (images, AJAX etc.)
- L' application informe l'utilisateur lorsqu'il perd ou retrouve sa connexion

## Priorité 4 - Facultatif
- L' affichage de l'écran "Add to Screen" est intercepté pour être reporté à un moment plus adéquat pour l'utilisateur, selon ses actions en cours. 
- Le CSS critique à l'affichage initial est extrait et ajouté en *inline* dans le HTML du document
- Les [métadonnées Schema.org](https://schema.org/) sont renseignées pour une meilleure indexation par les moteurs de recherche
- Des métadonnées destinées aux réseaux sociaux sont fournies quand cela est approprié.
- L' inscription et le login se font via la [Credential Management API](https://developers.google.com/web/fundamentals/security/credential-management/)
- Les paiements se font via la [Payment Request API](https://developers.google.com/web/fundamentals/discovery-and-monetization/payment-request/)

 ---
 
 [Outillage d'audit qualité](audit-tools.md)
