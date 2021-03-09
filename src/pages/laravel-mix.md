---
title: Laravel Mix
date: 2021-03-09T12:35:36.726Z
tags:
  - 11ty
---
Resources

* [repo with instructions for stand-alone projects](https://github.com/JeffreyWay/laravel-mix/blob/master/docs/installation.md#stand-alone-projects) NB instructions incomplete
* [video](https://www.youtube.com/watch?v=mTlf0PgwS9w&ab_channel=AndreMadarang) NB out of date with the github repo docs
* local demo at /dev-sites/learn-laravelmix

Steps

* make a new project and cd into it
* npm init -y
* npm install laravel-mix --save-dev
* touch webpack.mix.js
* in this file insert

```
let mix = require('laravel-mix');

mix.sass('src/app.sass', 'css').setPublicPath('public');
```

* create directory /public
* create file /public/index.html
* in index.html `<link rel="stylesheet" href="css/app.css" />`
* create src/app.sass and put a sass rule in there
* $ npx mix watch // this will compile on any change
* for live reload use VS Code Live Server // fast refresh!!