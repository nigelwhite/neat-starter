---
title: Laravel Mix
date: 2021-03-09T12:35:36.726Z
tags:
  - css
---

Resources

-   [repo with instructions for stand-alone projects](https://github.com/JeffreyWay/laravel-mix/blob/master/docs/installation.md#stand-alone-projects) NB instructions incomplete
-   [Andre Madarang video](https://www.youtube.com/watch?v=mTlf0PgwS9w&ab_channel=AndreMadarang) NB out of date with the github repo docs
-   [Webwash video for drupal bootsrap](https://www.youtube.com/watch?v=BYo4m_VyG24&t=566s&ab_channel=WebWash)
-   [explanation for Drupal 8](https://fraserclark.com/blog/laravel-mix-with-drupal)
-   local demo at /dev-sites/learn-laravelmix

Steps

-   make a new project and cd into it. If Drupal this should be your subtheme directory.
-   npm init -y
-   npm install laravel-mix --save-dev
-   touch webpack.mix.js
-   in this file insert

```js
let mix = require('laravel-mix');

mix.sass('src/app.sass', 'css').setPublicPath('public');
```

For a Drupal project, see below

-   create directory /public
-   create file /public/index.html
-   in index.html `<link rel="stylesheet" href="css/app.css" />`
-   create src/app.sass and put a sass rule in there
-   $ npx mix watch // this will compile on any change

Live Reload

-   Laravel Mix has the ability to use Browser sync for live reload
-   [Andre Madarang video](https://www.youtube.com/watch?v=mTlf0PgwS9w&ab_channel=AndreMadarang) 11.20
-   npm install -g browser-sync
-   in a Drupal project, in webpack.mix.js

```js
let mix = require('laravel-mix');

mix.sass('scss/style.scss', 'css/')
	// .browserSync("http://permies-d9.ddev.site:81");
	.browserSync({
		proxy: 'http://permies-d9.ddev.site:81',
		files: ['scss/style.scss'],
	});
```
