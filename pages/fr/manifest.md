<span class="requirements">Prérequis: connaissance du format JSON</span>

# Manifeste d'application web

Le manifeste d'application est un simple fichier JSON contenant des métadonnées annexes de l'application qui sont utilisées par en améliorer l'intégration par les plates-formes. Pour lier un manifeste à une application, il suffit d'insérer le lien en HTML:

```html
<!-- à insérer dans <head> -->
<link rel="manifest" href="/manifest.json">
```

Voici un exemple de fichier manifeste:

 <figure class="pull-right">
 	<img style="height: 400px" src="../img/pwa-manifest-demo.jpg" alt="Résultat du manifeste sur Android">
 	<figcaption>Résultat du manifeste sur Android</figcaption>
 </figure>

```json
{
	"name": "Simple web app demo",
	"short_name": "Demo",
	"icons": [
		{
			"src": "icon-medium.png",
			"sizes": "96x96"
		}, {
			"src": "icon-large.png",
			"sizes": "192x192"
		}
	],
	"theme_color": "#3F51B5",
	"background_color": "#F5F5F5",
	"display": "standalone",
	"orientation": "portrait",
	"start_url": "/simple-demo/?home=true"
}
```

L'existence d'un manifeste d'application est nécessaire pour pouvoir proposer l'installation de la PWA sur l'appareil. Comme vous pouvez le voir, le manifeste contient diverses information comme le nom, la couleur dominante, les icônes ou encore le mode d'orientation préféré pour l'application.

<figure>
<iframe style="width: 560px; height: 315px;" src="https://www.youtube.com/embed/P7hNedzAjuk" frameborder="0"></iframe>
<figcaption>Démonstration vidéo de l'installation d'une PWA sur Android</figcaption>
</figure>

## Liste des propriétés du manifeste

Le manifeste d'application est un standard évolutif et de nouvelles propriétés viennnent s'ajouter régulièrement. La [liste des propriétés actuellement utilisables peut être retrouvée sur le MDN](https://developer.mozilla.org/fr/docs/Web/Manifest).

## Générateur de manifeste

Pour vous aider à créer rapidement un manifeste pour votre application, il existe [ce générateur](https://app-manifest.firebaseapp.com/) qui préremplit certains champs et vous guide pour compléter les champs restants.

## Compatibilité avec les meta tags

Avant les manifestes d'application, les navigateurs utilisaient des balises `<meta>` plus ou moins standards ou complètement propriétaires pour renseigner les icônes, couleurs ou particularités d'un site. Renseigner ces balises est toujours utile pour ces navigateurs mais fait doublon avec le manifeste. Heureusement, il existe un outil qui le fait pour vous: [PWACompat](https://developers.google.com/web/updates/2018/07/pwacompat)

Ajouté sous la forme d'un script externe aux côtés de votre balise `<link>` pointant vers le manifeste, le script analysera votre manifeste et ajoutera automatiquement les balises `<meta>` correspondantes. Il respecte également le principe d'amélioration progressive puisque l'échec de chargement de ce script n'aura aucune incidence sur le fonctionnement de votre application.

---

[Intégration avec les plates-formes](integration.md)

[Tester votre manifeste avec un outil d'audit](audit-tools.md)
