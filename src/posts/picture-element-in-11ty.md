---
title: Picture element in 11ty
date: 2021-06-23T16:17:14.860Z
tags:
    - 11ty
---

I'm using 11th Image plugin to generate a range of image types/sizes and a picture tag in the html.

In eleventy.js there is code to provide a shortcode such that
image "./src/images/cat.jpg", "photo of my cat", "(min-width: 30em) 50vw, 100vw"
will be all you need to add in the template.

The trouble is that only the default image (the smallest size) is dispayed in the browser.

    <picture>
      <source type="image/avif" srcset="/images/cowsPan-350w.avif 350w, /images/cowsPan-600w.avif 600w, /images/cowsPan-900w.avif 900w" sizes="(min-width: 60rem) 80vw, (min-width:
        40rem) 90vw, 100vw">
      <source type="image/webp" srcset="/images/cowsPan-350w.webp 350w, /images/cowsPan-600w.webp 600w, /images/cowsPan-900w.webp 900w" sizes="(min-width: 60rem) 80vw, (min-width:
        40rem) 90vw, 100vw">
      <source type="image/jpeg" srcset="/images/cowsPan-350w.jpeg 350w, /images/cowsPan-600w.jpeg 600w, /images/cowsPan-900w.jpeg 900w" sizes="(min-width: 60rem) 80vw, (min-width:
        40rem) 90vw, 100vw">
      <img src="/images/cowsPan-350w.jpeg" alt="cows" loading="lazy" width="350" height="168">
    </picture>

Resources:

-   [tutorial 1](https://webdesign.tutsplus.com/tutorials/quick-tip-how-to-use-html5-picture-for-responsive-images--cms-21015) 2019
-   [tutorial 2](https://bitsofco.de/the-srcset-and-sizes-attributes/)
-   [tutorial 3](https://developers.google.com/web/fundamentals/design-and-ux/responsive/images)
-   [tutorial 4](https://www.sitepoint.com/how-to-build-responsive-images-with-srcset/)
