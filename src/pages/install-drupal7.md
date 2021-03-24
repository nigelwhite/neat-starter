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

Prep for local theme development

-   cd sites/default
-   touch settings.local.php
-   insert this code

```
<?php

// To set up a local environment, make a duplicate of this file and name it
// local-settings.inc in the site directory that contains the settings.php file.
// Ignore sites/*/local-settings.php in the .gitignore file. Change the settings.php
// file to include local-settings.php if the file exists.

// Turn off css and js consolidation for local development.
$conf['preprocess_css'] = 0;
$conf['preprocess_js'] = 0;

// Turn on all error reporting for local development.
error_reporting(-1);
$conf['error_level'] = 2;
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);

// theme debugging
$conf['theme_debug'] = TRUE;
```

-   put this at the end of settings.php

```
if (file_exists(DRUPAL_ROOT . '/' . conf_path() . '/settings.local.php')) {
  include DRUPAL_ROOT . '/' . conf_path() . '/settings.local.php';
}
```

-   add sites/\*/local-settings.php to .gitignore
-   clear caches
-   template suggestions should now show up in devtools
