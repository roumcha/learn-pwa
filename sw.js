if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),u={module:{uri:i},exports:c,require:r};s[i]=Promise.all(a.map((e=>u[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-e9849328"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/learn-pwa/_next/app-build-manifest.json",revision:"df13f5c69e5836a8e42d8b6985fbf9f0"},{url:"/learn-pwa/_next/static/chunks/21-56fbe9147e254421.js",revision:"sjsu62K0BTmunX6M49jF9"},{url:"/learn-pwa/_next/static/chunks/348-fc330e90078c3301.js",revision:"sjsu62K0BTmunX6M49jF9"},{url:"/learn-pwa/_next/static/chunks/383b2a48-a63f678eeab42b3d.js",revision:"sjsu62K0BTmunX6M49jF9"},{url:"/learn-pwa/_next/static/chunks/3bf3bf43-59c4c05025a13c11.js",revision:"sjsu62K0BTmunX6M49jF9"},{url:"/learn-pwa/_next/static/chunks/app/_not-found/page-a289997e8dae0a74.js",revision:"sjsu62K0BTmunX6M49jF9"},{url:"/learn-pwa/_next/static/chunks/app/layout-097904840a0e0596.js",revision:"sjsu62K0BTmunX6M49jF9"},{url:"/learn-pwa/_next/static/chunks/app/page-46f316a52e1a91ce.js",revision:"sjsu62K0BTmunX6M49jF9"},{url:"/learn-pwa/_next/static/chunks/bbc3b934-570e5510863df8c0.js",revision:"sjsu62K0BTmunX6M49jF9"},{url:"/learn-pwa/_next/static/chunks/f6bd3318-f2fb4d406017010d.js",revision:"sjsu62K0BTmunX6M49jF9"},{url:"/learn-pwa/_next/static/chunks/framework-6e06c675866dc992.js",revision:"sjsu62K0BTmunX6M49jF9"},{url:"/learn-pwa/_next/static/chunks/main-27ec094e3705ed94.js",revision:"sjsu62K0BTmunX6M49jF9"},{url:"/learn-pwa/_next/static/chunks/main-app-19bce38b94c575a1.js",revision:"sjsu62K0BTmunX6M49jF9"},{url:"/learn-pwa/_next/static/chunks/pages/_app-2937d96b09dbb292.js",revision:"sjsu62K0BTmunX6M49jF9"},{url:"/learn-pwa/_next/static/chunks/pages/_error-d4c4dc2ebcfc6f10.js",revision:"sjsu62K0BTmunX6M49jF9"},{url:"/learn-pwa/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/learn-pwa/_next/static/chunks/webpack-186c6f45f2c8b9a9.js",revision:"sjsu62K0BTmunX6M49jF9"},{url:"/learn-pwa/_next/static/css/cedc8d0d82c907e3.css",revision:"cedc8d0d82c907e3"},{url:"/learn-pwa/_next/static/sjsu62K0BTmunX6M49jF9/_buildManifest.js",revision:"ef8f9fc6dad490295ffb427f7f48d905"},{url:"/learn-pwa/_next/static/sjsu62K0BTmunX6M49jF9/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/learn-pwa/icon-192x192.png",revision:"832fed8d98137f8c0be5c453b1ade38e"},{url:"/learn-pwa/icon-256x256.png",revision:"c5c0a0bf20527d327d4fb6cb3d72e759"},{url:"/learn-pwa/icon-384x384.png",revision:"cd77aa5fe89853d7646b7242f2dffe53"},{url:"/learn-pwa/icon-512x512.png",revision:"e4b25569cca302254eeb0de47b99d0d2"},{url:"/learn-pwa/icon.svg",revision:"1aa552e4e5730db2f7621ecc9351e6a0"},{url:"/learn-pwa/manifest.json",revision:"7f11281374f9017eeb68ae8599dfb176"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/learn-pwa",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
