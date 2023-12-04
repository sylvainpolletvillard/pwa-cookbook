<span class="requirements">Prérequis: connaissances de base en SEO</span>

Optimisation du référencement
=============================

Les techniques de Search Engine Optimization (SEO) ne diffèrent pas trop entre une Progressive Web App et une application web monopage. Quelques règles simples sont à retenir pour garantir une bonne indexation du contenu de votre PWA:

## Assurez-vous que chaque page à indexer dispose de sa propre URL
 
 Pour que chaque page soit indexée distinctement, il faut qu'elle dispose de sa propre URL. Pensez donc à utiliser un routeur côté client et à attribuer à chaque ressource une URL dédiée, par exemple `https://www.example.com/product/25/`
 
 Ces URL doivent être le plus simple et le plus descriptif possible. Evitez l'emploi de query params s'ils ne sont pas essentiels pour la page en cours.
 
## Utiliser l'API History plutôt que les hash pour vos URL

L'API History permet de manipuler l'historique du navigateur en JavaScript en modifiant l'URL sans pour autant déclencher le changement de page par le navigateur. Cette API a été déterminante pour les applications web monopage qui utilisaient auparavant des hash `#` dans l'URL. <a href="http://googlewebmastercentral.blogspot.com/2009/10/proposal-for-making-ajax-crawlable.html" target="_blank">Google avait même modifié à l'époque son crawler</a> pour explorer les sites AJAX avec des URL contenant `/#!/`, technique dite du *hashbang*.  

Maintenant que l'API History est correctement supportée, il n'y a plus besoin de recourir aux hash dans les URL. Google a d'ailleurs indiqué que Googlebot indexait rarement les URL avec des `#`. Vous pouvez utiliser des URL classiques, en prenant soin toutefois à configurer votre serveur web de fichiers correctement pour toujours renvoyer la base HTML adéquate pour chaque URL.

## Utiliser le Server-Side Rendering

Le rendu côté serveur ou Server-Side Rendering (SSR) permet d'indexer le contenu par les crawlers ne supportant pas JavaScript ou la navigation AJAX. C'est encore le cas pour de nombreux robots indexeurs notamment sur les plates-formes de blogs, réseaux sociaux et messageries instantanées, qui récupèrent une description et des métadonnées lorsque vous partagez une URL.

La plupart des frameworks JavaScript modernes disposent d'une solution de rendu côté serveur. Consultez la page [PWA et Frameworks](frameworks.md) pour plus de détails. 

Si vous ne pouvez implémenter du SSR, pensez à vérifier que votre contenu est correctement indexable par Google via <a href="https://www.google.com/webmasters/tools/home?hl=en">Google Search Console > Fetch as Google</a>.

## Suivre les recommandations de Responsive Web Design

Google pénalise à l'indexation les sites web qui ne sont pas adaptés à l'usage mobile, en effectuant une série de tests sur les pages. Assurez-vous donc que votre application web est pleinement utilisable sur mobile. Vous pouvez vous aider des [outils d'audit](audit-tools.md) à cet effet.

## Suivre la méthodologie d'amélioration progressive

[L'amélioration progressive](progressive-enhancement.md) vous permet d'étendre le support de votre application à un plus grand nombre de navigateurs et d'agents, et donc d'optimiser les chances que le contenu puisse être accessible et indexable.

Utilisez des codes de détection de fonctionnalité tels que 
```javascript
if ('serviceWorker' in navigator) { ... }
```
 pour activer progressivement les fonctionnalités supplémentaires. Surtout, **n'utilisez pas les User Agent des navigateurs** comme tests de support : c'est le meilleur moyen d'avoir des faux positifs ou négatifs et d'empêcher toute évolutivité à long terme.

## Pour aller plus loin

- Un article complet sur le sujet a été [publié sur le Google Webmaster Central Blog](https://webmasters.googleblog.com/2016/11/building-indexable-progressive-web-apps.html)
- John Muller de l'équipe Google Trends donne [une liste de recommandations techniques pour la SEO et les PWA ici](https://plus.google.com/u/0/+JohnMueller/posts/LT4fU7kFB8W).

---

[PWA et Frameworks](frameworks.md)

[Outillage d'audit](audit-tools.md)

[La démarche d'amélioration progressive](progressive-enhancement.md)

[Checklist d'une PWA](checklist.md)
