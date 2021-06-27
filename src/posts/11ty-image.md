---
title: 11ty image plugin
date: Last Modified
tags: 11ty
---

This works in demo.js, except it wants the sizes attribute adding

Had a huge struggle with 11th image plugin. Took me ages to blunder across the skills I needed to diagnose what was going wrong.

I could not follow Zac's install guide so I used [Bryce Wray's](https://www.brycewray.com/posts/2021/04/using-eleventys-official-image-plugin/) which gives a full code snippet and a clear explanation of the steps of where to put it.

It did loads of things out of the box. Staggeringly awesome.

-   accepts a so-simple njk smartcode with only image name and alt
-   generates a suite of image files at the sizes and formats you specify in eleventy.js
-   sticks these files in the \_site folder for production while leaving the original file in your src for development
-   generates all the html

However I never saw a larger image than the default image, even at huge screen sizes, in Bryce's code generates the default image with

```js
<img
      src="${lowsrc.url}"
      width="${lowsrc.width}"
      height="${lowsrc.height}"
      alt="${alt}"
      loading="lazy"
      decoding="async">
```

I changed this to

```js
<img
		src="${lowsrc.url}"
		width="100%"
		height="auto"
		alt="${alt}"
		loading="lazy"
		decoding="async">
```

and it worked. I don't know if this is a good approach or not, but I've spent so long on this already.....

### Customising

Bryce's code specifies the image sizes in eleventy.js with

```js
async function imageShortcode(src, alt) {
  let sizes = "(min-width: 1024px) 100vw, 50vw"
```

This sets the sizes value for all images that are inserted via the smartcode, whatever their context in page.
If you want to control each image's sizes individually you can do

```js
async function imageShortcode(src, alt, sizes) {
  // let sizes = "(min-width: 1024px) 100vw, 50vw"
```

You can then specify each image with a 3rd argument in the shortcode.
Advantage - a more accurate rendering of optimal image size in each context.
Disadvantage - if you decide to change your layout, across the site, you'd have to edit every image's shortcode!
