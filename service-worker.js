if(!self.define){let e,a={};const r=(r,i)=>(r=new URL(r+".js",i).href,a[r]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=a,document.head.appendChild(e)}else e=r,importScripts(r),a()})).then((()=>{let e=a[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let f={};const c=e=>r(e,d),n={module:{uri:d},exports:f,require:c};a[d]=Promise.all(i.map((e=>n[e]||c(e)))).then((e=>(s(...e),f)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pwa-cookbook"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.190c49a0.css",revision:null},{url:"/css/app.2de30877305f9bac11ee1a8e9df0b8e0.css",revision:"0e81893ac76815072a9abb9569673f90"},{url:"/css/chunk-vendors.08fdddd9.css",revision:null},{url:"/fonts/MaterialIcons-Regular.eot",revision:"e79bfd88537def476913f3ed52f4f4b3"},{url:"/fonts/MaterialIcons-Regular.ijmap",revision:"2c170a5cb4acd75612ad95d149f7796e"},{url:"/fonts/MaterialIcons-Regular.svg",revision:"47c3b4bd7ba40c4febea9678123d9a62"},{url:"/fonts/MaterialIcons-Regular.ttf",revision:"a37b0c01c0baf1888ca812cc0508f6e2"},{url:"/fonts/MaterialIcons-Regular.woff",revision:"012cf6a10129e2275d79d6adac7f3b02"},{url:"/fonts/MaterialIcons-Regular.woff2",revision:"570eb83859dc23dd0eec423a49e147fe"},{url:"/fonts/README.md",revision:"af86b7534f90b905f1adb4b71a160dca"},{url:"/fonts/codepoints",revision:"7e4ff73a88c8dd11addf69672d6648d5"},{url:"/img/gallery/alibaba.jpg",revision:"528b7e4b2216462d070902c49716e26f"},{url:"/img/gallery/financial-times.jpg",revision:"43a2aa8ace03469e90898669c2d49c2f"},{url:"/img/gallery/flipboard.jpg",revision:"395388fadf10a9b0aa44f05e8cdd585a"},{url:"/img/gallery/flipkart.jpg",revision:"ce77934c3a3984ddab63de8b88b39a5e"},{url:"/img/gallery/google-maps.png",revision:"eeaab47ac19f9a0f762208e070f4ed0f"},{url:"/img/gallery/google-spaces.jpg",revision:"5bbcf68895374a913d77bb4d71a1a00d"},{url:"/img/gallery/hnpwa.jpg",revision:"a09a9f7fa3cfec29d8e1ae0e480d1136"},{url:"/img/gallery/housing.com.jpg",revision:"43838bb0a7d2345aee5f7d7c19581d6a"},{url:"/img/gallery/paper-planes.jpg",revision:"8edf91e8982ef7b58206c4ce85b72f2e"},{url:"/img/gallery/pinterest.jpg",revision:"3799e1d4a1d92970b752ad22bc35d714"},{url:"/img/gallery/progressive-beer.jpg",revision:"5cc406937a9988d6158d0d3e6c9da293"},{url:"/img/gallery/spotify.webp",revision:"fb5e6adb197a6262aeb4335118b36b94"},{url:"/img/gallery/starbucks.jpg",revision:"9e68445e00484e71d40ae16723aafd1b"},{url:"/img/gallery/starbucks.webp",revision:"cc4177cc6cc547fac910af0e9e1d788a"},{url:"/img/gallery/tinder.jpg",revision:"108833fd231e6ec5d67099b1d7321d0d"},{url:"/img/gallery/trivago.jpg",revision:"48f8a8c7039d8678cba3d272b38ca168"},{url:"/img/gallery/twitter-lite.jpg",revision:"7d61df5c95d83a8baf0df96e1366bd12"},{url:"/img/gallery/voice-memos.jpg",revision:"71b18dd27a7c71231f78b538f22612ff"},{url:"/img/lighthouse-report.png",revision:"686f3f500c6f04ddf9bcd4896bcc5fb4"},{url:"/img/loader.svg",revision:"5ef85071d82191f7efce993f14d1f8a6"},{url:"/img/optimistic-ui.png",revision:"c6d67368d080f0f6b5202362f2791391"},{url:"/img/optimization-fluentconf.png",revision:"1630115f36504e27670ea85552b10248"},{url:"/img/progressive-enhancement.jpg",revision:"ac7056ff68af7335ee837dc00b4154be"},{url:"/img/push-server.png",revision:"6f40f879f3efa224e8751955d1b722f9"},{url:"/img/pwa-lighthouse.png",revision:"f521db600ad88720d01a2f3da319d823"},{url:"/img/pwa-logo.png",revision:"33c3a22c05e810d2bb622d7edb27908a"},{url:"/img/pwa-manifest-demo.jpg",revision:"cc3886c8e650dc1dbbfb5f1fd7ccb4ce"},{url:"/img/webpack.svg",revision:"bf093af83ee5548ff10fef24927b7cd2"},{url:"/index.html",revision:"e9ccf7ca582af09ddc93d5bbfab2ac5b"},{url:"/js/app.49d31ff7.js",revision:null},{url:"/js/app.bbbdedb46420a48724d9.js",revision:"75c27e246a20a55e324f7289020194e9"},{url:"/js/chunk-vendors.88e1db7b.js",revision:null},{url:"/js/manifest.37a2ecbb1d1b7e6c9ada.js",revision:"3e96a1ac35417d40fe9427dc7acfddbb"},{url:"/js/vendor.4eb37696c95c3ac27fc7.js",revision:"58f5a03a24439b05c9ddab339443a9a0"},{url:"/manifest.json",revision:"e888e94e1e4effe3d896f2822adfab9c"},{url:"/pages/en/a-propos.md",revision:"9208353a8e6f78b20c1b8e6c859cd5a7"},{url:"/pages/en/audit-tools.md",revision:"2bfb718d63cb27994bb7bf58e33f862c"},{url:"/pages/en/browserslist.md",revision:"789909062171d277dd8dd131ea8eb58e"},{url:"/pages/en/checklist.md",revision:"cef9d1e700fe0023517a226f9d648193"},{url:"/pages/en/data-cache.md",revision:"91465014bb2ed08a5f70fb5f0b9691fd"},{url:"/pages/en/error-management.md",revision:"9d4a7a12739fa1fe175b5acaa568050a"},{url:"/pages/en/examples.md",revision:"38c4c35641170d9e426495a632d45227"},{url:"/pages/en/frameworks.md",revision:"c33a0323d1215a303f3a4c077dfd160e"},{url:"/pages/en/index.json",revision:"0d3024f433d33233f2fb673536c8f8ae"},{url:"/pages/en/index.md",revision:"5213053ad43574911f3cf79930494563"},{url:"/pages/en/integration.md",revision:"4ad4138afd9f56ce20febe4074dceb0d"},{url:"/pages/en/manifest.md",revision:"827b2ba453166e7cc7a5fd86bf52b942"},{url:"/pages/en/network-management.md",revision:"69d877ce2ece24e849f5771e7fd53ae4"},{url:"/pages/en/network-strategies.md",revision:"f65c26515eac0dfff783b0bc8172ae94"},{url:"/pages/en/optimisation-bundle.md",revision:"019b8746fb2ebe0773e84f800bf9e0be"},{url:"/pages/en/optimistic-ui.md",revision:"b6dba93dc2b6955315ebc6bffaf09c5b"},{url:"/pages/en/progressive-enhancement.md",revision:"5c30f68f69d41a57d2003c3253cb5fc7"},{url:"/pages/en/project-templates.md",revision:"ff7cfe6199cb8ace99b10d2738d7f6af"},{url:"/pages/en/push-notifications.md",revision:"d6b4e14aa21aa856e383d9f6458d5f54"},{url:"/pages/en/pwa.md",revision:"f3c8bd496ef0ebfe4d56f279c81c5aac"},{url:"/pages/en/seo.md",revision:"2449690ed359c1d3fca00b18143ce062"},{url:"/pages/en/service-workers.md",revision:"aea49f0e1e3d21a4a501049f1131309c"},{url:"/pages/fr/a-propos.md",revision:"53e4b773c8f4af02c55acbed90e8a729"},{url:"/pages/fr/audit-tools.md",revision:"b0d349bbafcd842203ece696b4787bb9"},{url:"/pages/fr/browserslist.md",revision:"2e952b5c130e26271236568a376a8116"},{url:"/pages/fr/checklist.md",revision:"1ff896e42cdc822fca42df4f4c3ebbd0"},{url:"/pages/fr/data-cache.md",revision:"3da149bd63f975c97701c4f8265b7580"},{url:"/pages/fr/error-management.md",revision:"6344ba3f66b75ab5da8ea51dba622c3c"},{url:"/pages/fr/examples.md",revision:"d3b1e85885286e276096daae091f2774"},{url:"/pages/fr/frameworks.md",revision:"31578b5e9c61d4203993a653b08904f9"},{url:"/pages/fr/index.json",revision:"0e85d19b753f66d90bf00e21cbc547e6"},{url:"/pages/fr/index.md",revision:"9acc5c6b30b73cf342304a6361dda790"},{url:"/pages/fr/integration.md",revision:"048cb15bdf1616b99908b67a66a6063e"},{url:"/pages/fr/manifest.md",revision:"ad2c44de4a2236024948c2ccc45d2128"},{url:"/pages/fr/network-management.md",revision:"31576ff6457183006a60b90843e8af67"},{url:"/pages/fr/network-strategies.md",revision:"cdde2ba16786b55b1e9fe5528025df10"},{url:"/pages/fr/optimisation-bundle.md",revision:"87d78a2f4d8abaff5fdce0e132f4ce19"},{url:"/pages/fr/optimistic-ui.md",revision:"c8cd14224ade0541ff856ba514141a42"},{url:"/pages/fr/progressive-enhancement.md",revision:"536c3aeed73b5cc26f6e44d101eca5b4"},{url:"/pages/fr/project-templates.md",revision:"2516b451ce3215fd5a82c556c8ad5abe"},{url:"/pages/fr/push-notifications.md",revision:"d3103741cf2862703aa56ee49a0644a2"},{url:"/pages/fr/pwa.md",revision:"f4bdbca1a700c8a8239037cd214b8ed5"},{url:"/pages/fr/seo.md",revision:"c1a035a1d13c5e2ee49cfcf6e8f6a171"},{url:"/pages/fr/service-workers.md",revision:"d76167ac10d850669b5e66ad42c6fdc6"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
