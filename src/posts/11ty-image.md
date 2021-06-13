---
title: 11ty image plugin
date: 2021-06-13
tags: 11ty
---

This works in demo.js, except it wants the sizes attribute adding

```
const Image = require('@11ty/eleventy-img');
(async () => {
	let stats = await Image('./src/static/img/nebula.jpg', {
		formats: ['avif', 'webp', 'jpeg'],
		widths: [600, 1200, 1800],
		sizes: ['(max-height: 500)', 1000],
	});
	console.log(
		Image.generateHTML(stats, {
			alt: 'A bomb ass nebula',
			loading: 'lazy',
			decoding: 'async',
		})
	);
})();
```
