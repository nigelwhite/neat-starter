---
title: External script in Vue.js
date: 2021-06-22T05:03:38.012Z
tags:
    - js
    - vue
---

[Use the mounted hook](https://vue-view.com/how-to-load-an-external-script-in-vue-component/)

```js
mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://www.example-of-external-script.com/script.js')
    document.head.appendChild(externalScript)
  },
```
