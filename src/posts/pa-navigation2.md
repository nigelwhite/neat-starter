---
title: Change order of PA navigation gizmos 2
date: 2021-03-19
tags:
    - drupal
    - pa navigation
---

Summary: Test PA navigation in a vanilla Drupal 7 site, in a local docker container

PA live site uses a subtheme of [Bootstrap 3 for Drupal](https://www.drupal.org/project/bootstrap)

Resources

-   [Multilevel sub menus with hover](https://www.youtube.com/watch?v=voJSJJrPHEQ&ab_channel=DrupalLegoland)
-   [Drupal doc on assigning content into regions](https://www.drupal.org/docs/7/theming/assigning-content-to-regions)
-   [OS Training: Add a Block Region to a Drupal 7 Theme](https://www.ostraining.com/blog/drupal/block-region-drupal-theme/)

Steps

-   install a local D7 site at ddev/permies-d7 as per [my steps](https://upbeat-bhaskara-6b8219.netlify.app/pages/install-drupal7/)
-   install Bootstrap 3 theme and create subtheme
-   dl jquery_update and get latest jquery // needed for mobile nav hamburger to work
-   add new regions in bootstrap_sub.info
-   copy page.tpl.php from base bootstrap to bootstrap_sub
-   add new regions to bootstrap_sub/templates/page.tpl.php as per patterns existing
    -   add them to `<div class="navbar-collapse collapse">` for the new region to be collapsed on small screens
-   next steps: in PA local Docker, try re-ordering items in page.tpl.php
