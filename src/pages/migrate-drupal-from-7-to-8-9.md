---
title: Migrate Drupal from 7 to 8/9
date: 2021-02-23T10:36:59.234Z
tags:
    - drupal
    - drupal-migrate
---

### Docs

-   [Overview of Migrate core module](https://www.drupal.org/docs/drupal-apis/migrate-api/migrate-api-overview)
-   [Different upgrade approaches](https://www.drupal.org/docs/upgrading-drupal)
-   [Upgrading from Drupal 7 to 8 (and then to 9) or directly to 9](https://www.drupal.org/docs/understanding-drupal/drupal-9-release-date-and-what-it-means/what-happens-to-drupal-7-now-that)
-   [Upgrade approaches explained](https://www.drupal.org/docs/upgrading-drupal/choosing-the-upgrade-approach)
-   [Upgrade using Drush](https://www.drupal.org/docs/upgrading-drupal/upgrade-using-drush)

### Modules

-   [Drupal 7 version of Upgrade Status](https://www.drupal.org/project/upgrade_status)
-   Migrate module in Drupal 8 core
-   [Drupal 7 to 8/9 Module Upgrader](https://www.drupal.org/project/drupalmoduleupgrader) with a demo video

    -   Place the Drupal 7 module you wish to port into your Drupal 8/9 site's /modules directory and issue a drush command inside the Drupal 8 root directory

Steps

-   create a vanilla Drupal 9 site using [ddev quickstart](https://ddev.readthedocs.io/en/stable/users/cli-usage/#drupal-9-quickstart)
-   follow [my further install steps](https://upbeat-bhaskara-6b8219.netlify.app/pages/pa-d9/)

Upgrade using Drush

-   follow [Upgrade using Drush](https://www.drupal.org/docs/upgrading-drupal/upgrade-using-drush). Watch out for alternative routes which are unclear!
-   ddev composer require 'drupal/migrate_upgrade:^3.2'
-   ddev composer require 'drupal/migrate_plus:^5.1'
-   ddev composer require 'drupal/migrate_tools:^4.5'
    -   Error. drupal/migrate_tools 4.5.0 conflicts with drush/drush[10.4.0].
    -   Created an [issue](https://gitlab.com/drupalspoons/migrate_tools/-/issues/125)
-   how to get the D7 database into an accessible place and how to refer to it?
    -   From ddev FAQ: Can I use additional databases with DDEV? Yes, you can create additional databases and manually do whatever you need on them. They are automatically created if you use ddev import-db with --target-db, for example `ddev import-db --target-db=extradb --src=.tarballs/extradb.sql.gz`. You can use ddev mysql for random queries, or also use the mysql client within ddev ssh or ddev ssh -s db as well.
    -   tried this with `ddev import-db --target-db=D7db --src=~/Downloads/OysterCatcher-2021-03-25T11-49-52.mysql`. It imported, but how to refer to it?

Upgrade via the browser

-   [Follow steps](https://www.drupal.org/docs/upgrading-drupal/upgrade-using-web-browser)
-   upgrade core and modules in the D7 site
-   on D9 site enable Migrate, Migrate Drupal, Migrate Drupal UI
-   on D9 site visit /upgrade Continue
-   tried to connect to local ddev D7 at http://oyster.ddev.site:82
    -   cannot find correct setting for Document root for public files
    -   it won't accept the ddev settings for the db either
    -   stuck
-   try connecting to remote site at https://nwhite.uk/oyster
    -   it will not accept the creds. Complains about database name
    -   stuck
