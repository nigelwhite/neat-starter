---
title: Update Edibles to 8.9.13
date: 2021-03-26
tags:
    - edibles
    - drupal
---

Edibles currently at 8.9.9

Steps

-   ddev composer update drupal/core --with-dependencies
    -   success!
-   composer update --with-dependencies "drupal/commerce\*"
    -   success
-   module updates
    -   block_styles
    -   coffee
    -   ds
    -   entity
    -   field_formatter_class
    -   menu_link_attributes
    -   module_filter
    -   swiftmailer
