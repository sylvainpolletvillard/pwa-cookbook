<span class="requirements">Prérequis: aucun</span>

Intégration avec les plates-formes
==================================

Une des caractéristiques de la mouvance PWA est qu'elle est fortement soutenue par les propriétaires des plates-formes les plus populaires, aussi bien dans le monde mobile que desktop: [Google sur l'écosystème Android](https://www.nextinpact.com/news/103152-chrome-57-beta-veut-propulser-progressive-web-apps-au-premier-plan-sur-android.htm) et [Microsoft sur l'écosystème Windows](https://blogs.windows.com/msedgedev/2016/07/08/the-progress-of-web-apps/#zl4jYkfdeKsPjZRQ.97).

Les acteurs sont donc mobilisés à tous les niveaux:
 - **Spécification**: Google, Microsoft et les autres éditeurs web ont un rôle majeur dans l'élaboration des standards du web, et plusieurs de leurs employés occupent des sièges au W3C et au WHATWG.
 - **Implémentation**: En parallèle du travail de spécification, les équipes de Chrome, Firefox et Edge expérimentent beaucoup sur les PWA à travers les versions alpha et beta des navigateurs.
 - **Intégration**: Il y a une volonté commune de faire une place plus grande aux PWA au sein des systèmes et plates-formes. Google notamment les met au premier plan sur Android sans distinction avec les applications natives. 
 
 ## Installation et raccourcis vers l'application
 
 Le manifeste des PWA permet au système de récupérer des informations contextuelles sur le site actuellement consulté, d'effectuer des tests sur ses caractéristiques et son contenu, puis éventuellement de suggérer son installation aux côtés des autres applications système. Ce procédé s'est popularisé sur Android sous l'appellation *Add to home screen* issu du label de l'action.
  
  <figure>
     <img src="../img/add-to-home-screen.gif"
          alt="Démo Add to home screen sur Android" />
      <figcaption>Démonstration de la fonctionnalité "Add to home screen" sur Chrome for Android</figcaption>
  </figure>    

## Publication sur les app stores

Microsoft a fait part de son intention de [mettre les PWA au premier plan sur le Windows Store](https://blogs.windows.com/msedgedev/2016/07/08/the-progress-of-web-apps/#zl4jYkfdeKsPjZRQ.97), dans les mêmes catégories que les applications natives Windows. La soumission d'une PWA sur un app store passe par les mêmes étapes qu'une application native: nécessité d'un compte développeur et processus de review et de validation. Mais une fois validé, mettre à jour une PWA sur le Store devrait être aussi facile que de redéployer un site sur un serveur, sans processus additionnel de revue par Microsoft.

Du côté de Google, une bonne partie du chemin est déjà faite avec les Chrome Apps et le [Chrome Web Store](https://chrome.google.com/webstore/) qui propose *exclusivement* des applications web, dont la plupart ont été conçues avant les technologies et méthodologies propres aux PWA. Dans un futur plus ou moins lointain, au delà des nombreuses spéculations sur un rapprochement de ChromeOS et d'Android (projet Andromeda, Fuchsia OS), Google a déjà préparé le terrain avec les [*WebAPK*](https://www.xda-developers.com/deeply-integrated-progressive-web-apps-are-already-live-for-chrome-on-android/). Les PWA pourront en effet être packagées et publiées sous ce format spécifique à Android pour une meilleure intégration, des permissions acrues, et des ressources allouées supplémentaires.

## Notifications push

Enfin, chaque plate-forme peut utiliser ses caractéristiques spécifiques pour améliorer l'intégration des PWA. On peut citer par exemple les [notifications push](push-notifications), très utilisées sur smartphone, et qui font peu à peu leur apparition sur desktop (MacOS, Windows.md).

-------------------------------------------

[Manifeste Web App](manifest.md)

[Notifications Push](push-notifications.md)
