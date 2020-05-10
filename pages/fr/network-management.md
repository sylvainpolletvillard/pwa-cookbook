<span class="requirements">Prérequis: lecture des pages <a href="optimistic-ui.md">Compensation de latence</a> et <a href="service-workers.md">Service Workers</a></span>

La couche de gestion de réseau
================================

## Différentes situations de conditions réseau

On a tendance à oublier que la disponibilité du réseau n'est pas quelque-chose de binaire. En réalité, et particulièrement avec l'usage mobile, les conditions réseau peuvent beaucoup varier et présenter un caractère très incertain. On peut regrouper ces situations en trois catégories principales:
- **Faible signal**: l'appareil a connaissance de la mauvaise réception, qu'il s'agisse de Wi-Fi ou de réseaux mobiles. Il y a donc une faible bande-passante ainsi qu'un risque plus élevé d'échec de la requête.
- **Lie-Fi**: l'appareil affiche une connexion fonctionnelle et de bonne qualité, mais en pratique, aucune requête n'aboutit et reste bloquée sur de très longs timeouts. Ces cas de désinformation surviennent souvent à cause de problèmes de configuration réseau ou de matériel défaillant.
- **Déconnecté**: l'appareil ne trouve aucune connexion au réseau, ou les a désactivé (mode avion par exemple). Les requêtes sont immédiatement rejetées, et l'état offline est détectable en JavaScript sur les navigateurs le supportant.

## De la nécessité d'une couche de gestion de réseau

Ces situations de conditions réseau incertaines sont donc variées mais peuvent aussi passer de l'une à l'autre au cours d'une même session. 

Pour palier au problème de faible signal qui occasionne des temps de requêtes longs et irréguliers, la solution la plus directe est [la compensation de latence](optimistic-ui.md). Son principe est simple mais la gestion d'erreurs peut vite se complexifier selon les cas: empilement des requêtes, relances à intervalles croissants, gestion des rollbacks et de la resynchronisation à la récupération de la connexion...

Dans le cas du Lie-Fi, les timeouts par défaut sont souvent insuffisants pour repérer le problème suffisamment rapidement pour ne pas trop perturber le scénario utilisateur. Il faut donc faire diagnostiquer l'état réseau par l'application elle-même, sur la base de ses propres contraintes de fonctionnement.
 
 Enfin, le passage de l'état connecté à déconnecté doit être géré de manière totalement fluide, sans rupture dans le scénario utilisateur autre qu'un simple feedback visuel. C'est typiquement quelque-chose qui doit être géré à un niveau global pour toute l'application.
 
 Pour toutes ces raisons, les PWA s'accompagnent souvent d'une **couche de gestion de réseau** qui vient s'intercaler entre la logique applicative et les requêtes AJAX. Codée en JavaScript au sein du bundle applicatif et des service workers enregistrés, elle joue le rôle de chef d'orchestre:
  - en exploitant au maximum [les API de cache disponibles](data-cache.md)
  - en interceptant et en gérant de la manière la plus autonome possible [les erreurs liées au réseau](error-management.md)
  - en prenant soin de ne pas fausser l'ordre d'exécution d'appels asynchrones
  - en évitant autant que possible les blocages et ruptures dans tous les scénarios utilisateur

Cette couche de gestion réseau implique divers mécanismes et stratégies que nous aborderons dans les sections suivantes.

---

[Usage hors-ligne avec les Service Workers](service-workers.md)

[Stratégies de gestion de cache réseau](network-strategies.md)

[Stratégies de gestion des requêtes en échec](error-management.md)
