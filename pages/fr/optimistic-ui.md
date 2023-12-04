<span class="requirements">Prérequis: connaissance du mode de fonctionnement des Single Page Apps</span>

La compensation de latence (ou *Optimistic UI*)
============================================================

## Principe de fonctionnement

Le principe de la compensation de latence est de considérer que les requêtes serveur vont finir en succès dans la grande majorité des cas, et donc qu'il n'est pas nécessaire d'attendre le retour serveur pour continuer dans la navigation et mettre à jour l'affichage côté client. C'est une technique assez couramment utilisée dans les webmails et les messageries instantanées, là où la fluidité dans les actions est essentielle pour une bonne expérience utilisateur.

<figure>
	<img src="../img/optimistic-ui.png" alt="Schématisation de la compensation de latence">
</figure>
 
 Pour pouvoir mettre en place ce principe, il faut quelques conditions:
 - le modèle client doit pouvoir être mis à jour sans avoir besoin du retour du serveur, en admettant un succès de la requête ; cela concerne donc presque toujours les requêtes POST / PUT et non les GET
 - en cas d'erreur, l'action doit pouvoir être réversible ; en sachant que d'autres actions peuvent avoir eu lieu entre temps.
 - le feedback utilisateur en cas d'erreur doit être réfléchi de telle sorte qu'une erreur imprévue ne prenne pas l'utilisateur au dépourvu dans son action en cours ; *exemple: si l'utilisateur est en train de modifier une fiche qui a mal été créée, l'action de modification doit pouvoir se substituer à l'action de création* 
  
## Gestion des erreurs  
  
 Un des pièges courants de cette technique est lorsque l'action de réversibilité (le *rollback*) vient écraser des données plus récentes ou actuellement utilisées par l'utilisateur. Pour éviter ce genre de tracas, une bibliothèque JavaScript de gestion d'état comme Redux ou Vuex peut aider à résoudre ces conflits. Dans les cas les plus compliqués, quelques connaissances sur les transformations opérationnelles et la gestion de conflits d'écriture peuvent aussi s'avérer utiles. 
 
 Vous pouvez bien sûr opter pour mettre en place de la compensation de latence uniquement pour les cas les plus simples à gérer, et heureusement ils sont encore nombreux.
 
## Avantages de cette méthodologie
 
 L'avantage le plus évident est que la navigation pour ces actions optimisées devient quasiment instantanée pour l'utilisateur final. Si le temps des requêtes est inchangé, celles-ci se déroulent en tâche de fond et ne viennent pas bloquer l'utilisateur dans son élan. C'est donc un élément clé pour donner une sensation de fluidité à votre application et satisfaire vos utilisateurs.
 
 La compensation de latence est également utile pour le développeur pour mettre au point une gestion de ses modèles de données de façon asynchrone et résistante aux conflits, et ainsi préparer le terrain pour d'autres fonctionnalités tels qu'un mode hors-ligne ou un mode d'édition collaborative. En effet, si l'on considère qu'une requête en erreur est un cas ponctuel, les mécaniques de synchronisation et les scénarios utilisateur sont relativement similaires à ceux de l'usage hors-ligne. Seule la durée et le caractère prédictif de ces échecs de requêtes viennent changer l'équation. 
