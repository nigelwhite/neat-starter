---
title: Install Drupal 7
date: 2021-03-19
tags:
    - drupal
---

Steps

-   mkdir <new-site>
-   cd <new-site>
-   drush dl drupal-7 // drush is already installed globally
-   ddev config
-   ddev start
-   PDOException: SQLSTATE[42S02]: Base table or view not found: 1146 Table 'db.semaphore' doesn't exist:
-   in browser, run install.php
-   drush dl module_filter admin_menu coffee
-   disable modules - toolbar, overlay
-   Enable Administration Menu Toolbar Style
-   Enable shortcuts in config settings of admin_menu
-   alt-d to use coffee
-   create default/settings.local.php // may need to change permissions on default directory
-   copy [my example](https://nwhite.uk/oyster/node/392) // but I don't know what these settings do any more. Remove db creds as we're using ddev
-   this should reveal template suggestions in devtools
