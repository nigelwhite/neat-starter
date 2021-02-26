---
title: PA D9
date: 2021-02-25T12:21:18.350Z
tags:
  - drupal
---
Resources

* [Building a Drupal 8 site with Webwash](https://www.youtube.com/watch?v=iwJW18NA_S4&ab_channel=WebWash)

  * Paragraphs vs Layout Builder. Use Paragraphs to keep data together, eg grouping fields that belong in the CT. Layout Builder is only for the layout. Don't use for grouping data.
* [Bootstrap4 theme](https://www.drupal.org/project/bootstrap4) integrates best with Layout Builder

Steps

* composer create-project drupal/recommended-project PA_D9
* ddev config.... etc
* ddev start.... fails
* .ddev/config.yaml change router_http_port to port 81
* ignore mkcert error
* ddev should start
* go to ddev's local url
* run through the Drupal install
* site should be at welcome page
* ddev composer require drupal/admin_toolbar
* ssev composer require 'drupal/bootstrap4:^2.1'
* copy example.settings.local.php to sites/default and rename to settings.local.php
* uncomment reference to settings.local.php at end of settings.php
* in settings.php change line 264 to $settings\['config_sync_directory'] = '../config/sync'; and create those folders in site root, above /web
* ddev exec drush cr
* ddev composer require drupal/ds drupal/field_group. Display Suite integrates with Layout Builder
* Create subtheme automatically in last item at settings/bootstrap4
* ddev exec drush cr
* include \[local drupal settings](https://adventuresindataland.com/blog/including-custom-settings-drupal-using-ddev)
* enable \[twig debugging](https://www.drupal.org/docs/theming-drupal/twig-in-drupal/debugging-twig-templates)
*