<span class="requirements">Prerequisites: experience with build tools and transpilers</span>

Transpilation and browsers targeting
======================================
  
## babel-preset-env  
  
Today, it is very common to code your application in a modern language such as TypeScript or ES6+. In the front-end build chain, a tool called *transpiler* compiles the source code into JavaScript code that is understandable by the users browsers.

These transpilers are generally configured by default to produce ES5 code, which is broadly supported by most of browsers for years. But JavaScript support gets better every day and some transformations are probably not necessary anymore for the browser panel you want to support.

[Babel](https://babeljs.io/), the most popular JavaScript transpiler, solved this problem by recommending a new preset which adapts to the targeted browsers : [`babel-preset-env`](https://github.com/babel/babel-preset-env). 

With this configuration, you just have to specify all the browsers you want to support and Babel will automatically pick the required features to transpile, using the minimum set of operations that is necessary to support this entire set of browsers. This means you will get better performance and also reduce the size of the bundle output.

````javascript
{ // .babelrc
  "presets": [
    ["env", { 
      "targets": { // list the targeted environments
        "browsers": [
        	"last 2 Chrome versions",
        	"Firefox ESR", // the last extended support version for Firefox
        	"ie >= 9", // Internet Explorer 9 and above supérieures 
        	"> 1% in UK" // all browsers having over 1% of market share in UK
        ]
      }
    }]
  ]
}
````

## PostCSS

A similar mechanism exists for CSS style sheets, through the [PostCSS preprocessor](http://postcss.org/) and some of its plugins. Indeed, Andrey Sitnik, the creator of the `browserslist` option used by `babel-preset-env`, is also the author and main contributor of the PostCSS project. This `browserslist` configuration has first been used by PostCSS plugins to customize their output depending on the targeted browsers:

- [Autoprefixer](https://github.com/postcss/autoprefixer) automatically adds some vendor prefixes to CSS properties. Specifying the targeted browsers enables the plugin to remove some of the unused prefixes.
- [postcss-normalize](https://github.com/jonathantneal/postcss-normalize) by Jonathan Neal, co-author and contributor of [Normalize.css](https://github.com/necolas/normalize.css) which is one of the most popular normalization stylesheet worldwide. The plugin only keeps the normalization rules that are useful for the specified browsers. 
- [doiuse](https://github.com/anandthakker/doiuse) tells you if you are using a CSS feature that is not supported by one of the browsers you are targeting.

These three tools will fit perfectly in your base CSS toolkit, making your life easier without having a huge pile of CSS from the beginning.
