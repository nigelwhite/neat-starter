---
title: Change order of PA navigation gizmos 3
date: 2021-03-24
tags:
    - drupal
    - pa
---

Theme changes 1

-   changed the default theme at admin/appearance to Permaculture Bootstrap Multisite Theme // on live this theme was enabled in every Domain's settings but I'd forgotten to set it as default here.
-   no adverse effects noticed

Site must be prepared for theme dev with [these steps](https://upbeat-bhaskara-6b8219.netlify.app/pages/pa-local-dev/)

-   cd sites/all/themes/custom/perma_boot_multi
-   nano perma_boot_multi.info
-   add new region
-   regions[gizmos] = 'Gizmos'
-   nano sites/all/themes/custom/perma_boot_multi/templates/page.tpl.php
-   add this

```php
<?php if (!empty($gizmos)): ?>
    <?php print render($gizmos); ?>
<?php endif; ?>
```

-   as the last item in navbar-collapse div
-   try to move the 2 'inter-domain nav gizmos' to the Gismos region, but the site will not save the new position // solution: you have to do it in the config of each block
-   result - gizmos vanish. Not present in the DOM

Next try

-   nano permaboot_multi.info
-   add `regions[secondary_nav] = 'Secondary nav'`
-   clear cache
-   place gizmos in Secondary nav region in admin/blocks
-   clear cache
-   result - gizmos vanish. Not present in the DOM. But the DOM is not showing all the visible elements
-   error Warning: array_combine(): Both parameters should have an equal number of elements in /var/www/html/sites/all/modules/civicrm/CRM/Contact/BAO/Relationship.php on line 2267
-   move the 2 gizmo blocks back to Gizmos region // same error and DOM broken
-   stuck
