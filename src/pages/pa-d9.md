---
title: PA D9
date: 2021-02-25T12:21:18.350Z
tags:
    - drupal
---

Resources

-   [Building a Drupal 8 site with Webwash](https://www.youtube.com/watch?v=iwJW18NA_S4&ab_channel=WebWash)
-   Paragraphs vs Layout Builder. Use Paragraphs to keep data together, eg grouping fields that belong in the CT. Layout Builder is only for the layout. Don't use for grouping data.
-   [Bootstrap4 theme](https://www.drupal.org/project/bootstrap4) integrates best with Layout Builder

Steps

-   [Ddev Drupal 9 Composer Setup Example](https://ddev.readthedocs.io/en/stable/users/cli-usage/#drupal-9-composer-setup-example)
-   ignore mkcert may not be properly installed
-   port 80 is already in use? Change port in .ddev/config.yaml
-   go to ddev's local http url (not https)
-   run through the Drupal install
-   site should be at welcome page
-   do not copy web/example.gitignore to .gitignore - its rubbish. Better copy a previous version of .gitignore from elsewhere, that you know works
-   git init, add, commit
-   ddev composer require 'drupal/admin_toolbar:^3.0' and enable in gui
-   copy example.settings.local.php to sites/default and rename to settings.local.php
-   uncomment reference to settings.local.php at end of settings.php
-   in settings.php change line 264 to $settings\['config_sync_directory'] = '../config/sync'; and create those folders in site root, above /web
-   ddev exec drush cr
-   enable [twig debugging](https://www.drupal.org/docs/theming-drupal/twig-in-drupal/debugging-twig-templates)
-   [local development settings](https://www.drupal.org/node/2598914). Note other development setup tips but prevent development.services.yml from being overwritten on composer actions [this way](https://www.drupal.org/forum/support/post-installation/2016-09-15/composer-update-overwrites-developmentservicesyml)
-   ddev exec drush cr
-   ddev composer require 'drupal/field_group:^3.1'. Display Suite integrates with Layout Builder
-   ddev composer require 'drupal/bootstrap4:^2.1'
-   test by enabling the theme as default
-   Create subtheme automatically in last item at settings/bootstrap4
-   ddev exec drush cr
-   test by enabling subtheme as default
-   ddev exec drush cr
-   css is in web/themes/custom/bootstrap4_sub/css/style.css
-   cd into subtheme
-   [set up Laravel Mix](https://upbeat-bhaskara-6b8219.netlify.app/pages/laravel-mix/)
-   NB watch out for referencing the parent scss in web/themes/custom/bootstrap4_sub/scss/style.scss
-   run with "npx mix watch"
-   VS Code Live Server
