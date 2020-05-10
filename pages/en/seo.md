<span class="requirements">Prerequisites: basic knowledge of SEO</span>

# Search Engine Optimization

The Search Engine Optimization (SEO) techniques do not differ too much between a Progressive Web App and a regular single page web application. There are some simple rules to remember to ensure your PWA content will be indexed properly. The following paragraphs provides the most important ones.

## Make sure every page to index has its own URL

Each page needs to have its own URL in order to be indexed separately. Remember to use a client-side router and give a dedicated URL to every page, for example: `https://www.example.com/product/25/`

These URL should be as simple and descriptive as possible. Avoid using query parameters if they are not necessary for the current page.

## Use the History API instead of hashbangs

The history API allows to manipulate the history of the browser with Javascript by modifying the URL without triggering a page change on the browser. This API was decisive for single page web apps that were using a has `#` in the URL. <a href="http://googlewebmastercentral.blogspot.com/2009/10/proposal-for-making-ajax-crawlable.html" target="_blank">Google has even modified its crawler at that time</a> in order to index AJAX websites that uses URL containing `/#!/`, also known as *hashbang*.

Now that History API is correctly supported, there is no more need to use hashes in URLs. Google has even indicated that Googlebot rarely indexes URLs containing `#`. You can use normal URLs, by taking care of correctly configuring the web server so that it always returns the adequate HTML base for each URL.

## User Server-Side Rendering

The Server-Side Rendering (SSR) enables indexing for crawlers that do not support JavaScript or AJAX. It is still the case for many indexing robots especially on blogging platforms, social networks and instant messaging, which retrieve a description and metadata when we share a URL.

The majority of modern JavaScript frameworks provide ways to do SSR. Please refer to [PWA and Frameworks](frameworks.md) page for more details.

If you do not want to implement SSR, you should preferably check if your content is indexable by Google using <a href="https://www.google.com/webmasters/tools/home?hl=en">Google Search Console > Fetch as Google</a>.

## Follow responsive web design recommendations

Google indexing algorithms perform series of tests that penalizes websites that do not work well on mobiles. Thus, you should make certain that your web app is fully usable on mobiles. You can get some help with that regard on the [audit tools](audit-tools.md) page.

## Follow the progressive enhancement strategy

[Progressive enhancement](progressive-enhancement.md) allows to make your web app work on many more browsers and user agents, and thus increases the chances that the content will be accessed and indexed.

You can use code like this in order to detect the availability of a certain API and to progressively enable additional features.

```javascript
if ('serviceWorker' in navigator) { ... }
```

Above all, **do not rely on User Agents** in your tests : it is the best way to get false positives or negatives and to prevent any evolution in the long term.

## To go further

- A comprehensive article on the subject has been [published on the Google Webmaster Central Blog](https://webmasters.googleblog.com/2016/11/building-indexable-progressive-web-apps.html)
- John Muller from Google Trends gives [a list of technical recommendation for SEO and PWA](https://plus.google.com/u/0/+JohnMueller/posts/LT4fU7kFB8W).

---

[PWA and Frameworks](frameworks.md)

[Audit tools](audit-tools.md)

[Progressive enhancement](progressive-enhancement.md)

[Checklist of a PWA](checklist.md)
