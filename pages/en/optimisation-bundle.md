<span class="requirements">Prerequisites: experience with build chains, compilers and minifiers</span>

# Bundle and reduce application size

In order to achieve performance goals (initial loading time less than 5 seconds on low end phone and 3G), PWA often requires a full build process that is used to bundle, optimize and compress all dependencies. The output of this process is a kind of highly optimized files called **bundles**. The performance gain is only applicable at first application load, then the Service Worker takes over, caching everything and ensuring the next loadings will be almost instantaneous.

## Bundle resources with Webpack

There are numerous tools and build chains for front-end projects, but one of them stands out for being the most complete and popular so far: [Webpack](https://webpack.js.org/)

<figure>
	<img src="../img/webpack.svg" alt="How Webpack works">
	<figcaption>How Webpack works</figcaption>
</figure>

Webpack strength is its versatility. Indeed, it can bundle all kind of files (JavaScript, CSS, images, templates...), while we used to require many different tools in the past to get a complete working setup. Its popularity also helps to grow a large ecosystem of third party plugins. Today, Webpack is used and recommended by most JavaScript frameworks: React, Vue, Angular...

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

If your application code already uses [ES2015 modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and `import` / `export`, Webpack can perform static analysis of your dependency tree and group everything into a single files while managing the execution order and duplicates. If you are using [dynamic import()](https://webpack.js.org/guides/code-splitting/), Webpack does automatic code splitting and asynchronously loads at runtime the minimum set of bundles required to display the current page/section of your app.

With [webpack-bundle-analyzer](https://github.com/th0r/webpack-bundle-analyzer), it is possible to analyze the bundles content and the size distribution of the different modules to identify modules that are too heavy or unnecessary.

<figure>
	<img src="../img/webpack-bundle-analyzer.gif" alt="Demo of webpack-bundle-analyzer">
	<figcaption>Demo of webpack-bundle-analyzer</figcaption>
</figure>

## Minify JS and CSS

Webpack has a production mode (`-p`) that runs *UglifyJS* to minify JavaScript in the bundles. It is an easy way to reduce bundle size on production.

If you want to minify ES6 code, you should use [uglify-es](https://www.npmjs.com/package/uglify-es) or [babili](https://github.com/babel/babili), a modular minifier based on Babel.

Regarding CSS minification, there is [cssnano](http://cssnano.co/) which is also modular and based on PostCSS. Just like babili, this tool written in JavaScript fits really well with Webpack.

## Activate `gzip`

[gzip](http://www.gnu.org/software/gzip/) is another essential enhancement to optimize bundle size. This time, it has to be set up on the server side. This compression algorithm replaces recurrent strings in your files by pointers. Depending on the files content, you can get impressive results: sometimes less than 30% of the original size.

## Images: compression and Data URL

Images are often the heaviest resources to download in a website, but today we have excellent compression algorithms.

You can manually compress each of your images, or use an automated tool during the build process such as [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) that uses `imagemin` to minify PNG, JPEG, GIF and SVG.

For small images such as icons, it may be interesting to replace the image URL by an inline data URL. This reduces the number of HTTP requests and prevents potential network errors during image loading. The Webpack plugin [url-loader](https://webpack.js.org/loaders/url-loader/) automatically replaces some of the image URLs by data URLs, based on a file size limit.

## Code splitting

Bundling the whole application code in a single bundle file is not always the best idea. It can result in a huge JavaScript file that slows down the initial loading of your application.

Webpack has a very popular feature called *code splitting*. It is used to produce a set of smaller bundles that are loaded asynchronously when they are required: specifically for one route or after a user event for example.

Some tools can be used to do this splitting automatically, but doing it explicitly often leads to better results. Some [very detailed guides](https://webpack.js.org/guides/code-splitting/) are available in the official Webpack documentation to help you set up this feature.

Our recommendation is to avoid bundles over 500kb.

## To go further

<figure>
	<img src="../img/optimization-fluentconf.png" alt="Optimisation toolkit">
	<figcaption>8 ways to reduce initial loading time (FluentConf 2017, Addy Osmani)</figcaption>
</figure>

[Addy Osmani](https://twitter.com/addyosmani) gave [excellents talks](https://www.youtube.com/watch?v=7vUs5yOuv-o) and wrote [detailed articles](https://medium.com/reloading/javascript-start-up-performance-69200f43b201) about the available optimization tools for web applications. This is the person to follow in you want to improve your knowledge in this area.

---

[Use client side data caches](data-cache.md)

[Service Workers](service-workers.md)
