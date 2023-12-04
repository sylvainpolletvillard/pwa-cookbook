<span class="requirements">Prerequisites: JSON data format</span>

# Manifest of a PWA

The manifest of a PWA is a simple JSON file that contains metadata about the application. These metadata are used to integrate more efficiently the PWA with the target platforms.

To link a manifest to an application, we just need to insert it as an HTML link in the app:

```html
<!-- insert in <head> -->
<link rel="manifest" href="/manifest.json">
```

 <figure class="pull-right">
 	<img style="height: 400px" src="../img/pwa-manifest-demo.jpg" alt="On Android. The manifest allows to see the PWA like a native app">
 	<figcaption>On Android. The manifest allows to see the PWA like a native app</figcaption>
 </figure>

 Here is an example of a manifest file:

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

As you can see, the manifest contains miscellaneous information such as the name, dominant color, icons or the preferred screen orientation.

A manifest file is required by the Android OS so that it can suggest the setup of the PWA on the device.

<figure>
<iframe style="width: 560px; height: 315px;" src="https://www.youtube.com/embed/P7hNedzAjuk" frameborder="0"></iframe>
<figcaption>Video illustrating how to install a PWA (that has a manifest) on Android</figcaption>
</figure>

## Content of a manifest

The PWA manifest is an evolving standard and new properties are added regularly. The La [updated list of available properties is available on MDN](https://developer.mozilla.org/fr/docs/Web/Manifest).

## Manifest generator

Manifest generators allows to quickly and easily create manifests. [This one](https://app-manifest.firebaseapp.com/) for example pre-fills certain properties and helps defining the others.

## Compatibility with meta tags

Prior to web app manifests, browsers used more or less standard or completely proprietary `<meta>` tags to specify icons, colors, or application properties. Declaring these tags is still useful for these older browsers but it duplicates the information that is already in the manifest. Fortunately, there is a tool that does the job automatically for you at runtime: [PWACompat](https://developers.google.com/web/updates/2018/07/pwacompat)

Added as an external script next to your `<link>` tag pointing to the manifest, the script will parse your manifest and automatically add the corresponding `<meta>` tags. It also respects the principle of progressive enhancement because if the script fails to load, it will not affect the rest of your application.

---

[Platform integration](integration.md)

[Test the manifest with auditing tools](audit-tools.md)
