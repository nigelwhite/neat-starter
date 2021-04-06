---
title: Feature push to PA live
date: 2001-04-06
tags:
    - pa
    - drupal
    - features
---

Resources

-   [PA Docker general workflow](https://nwhite.uk/oyster/node/1360)
-   [Features module explanation](https://nwhite.uk/oyster/node/1350)
-   [Docker training no 2. Tom. 23.11.20](https://nwhite.uk/oyster/node/1356)
-   [Meeting with Tom and Nicola 22.2.21](https://nwhite.uk/oyster/node/1386)
-   [Map work 18.2.21](https://nwhite.uk/oyster/node/1380)
-   [Mapping. Key gotchas](https://nwhite.uk/oyster/node/1381)
-   [Map work 10.2.21. Documents the stuckness before Tom clarified the process](https://nwhite.uk/oyster/node/1377)

Aims

-   to create map feature in local docker PA
-   to push this feature to on-line stage site at https://stage.permaculture.org.uk
    -   to do that, I have to log in to Portainer Stage and git pull the feature
-   NB I'm working all the time in the staging branch

Steps in local PA docker

-   spin up [PA local docker](https://nwhite.uk/oyster/node/1360)
    -   error: Warning: "continue" targeting switch is equivalent to "break". Did you mean to use "continue 2"? in /var/www/html/sites/all/modules/contrib/civicrm_entity/modules/civicrm_entity_price_set_field/includes/civicrm_entity_price_set_field.transaction.inc on line 126
    -   error: Notice: unserialize(): Error at offset 35 of 48 bytes in UserController->attachLoad() (line 307 of /var/www/html/modules/user/user.module).
-   log in
    -   loads of errors
-   open portainer at http://localhost:9000
-   connect to terminal inside permaculture-drupal
-   git status
    -   I had to git restore . to get my staging branch back to "up to date with origin/staging"
    -   it says I'm up to date but this seems odd so... git pull
    -   loads of changes pulled in!!
-   git status
    -   still says "up to date with origin/staging". Wierd
-   git branch leaflet-april2021
-   git checkout leaflet-april2021
-   had a look in the site and there are 2 features
    -   my feature "Leaflet map" is still there saying "overridden" AND feature_leaflet_map saying disabled
    -   overridden means the db is no longer in sync with the code in the feature
-   drush fu Leaflet map
    -   does not work because it thinks there are 2 features - one called Leaflet and one called map
-   don't know why there are 2 features. I'm going with feature_leaflet_map so I've enabled it.
-   git push --set-upstream origin leaflet-april2021
-   git push
-   NB this is a different sequence to the one I documented at https://nwhite.uk/oyster/node/1360. I don't understand that sequence, so I'm not doing it.

Steps in on-line Stage site at https://stage.permaculture.org.uk

-   log in
-   feature_leaflet_map is already there! This is a surprise as I thought I had to go to Portainer and pull in first.
-   enable the feature feature_leaflet_map in features interface
-   enable the module feature_leaflet_map in admin/modules
-   You must enable the Geocoder, geoPHP, Geofield, Leaflet map, Address Field, Leaflet, Leaflet views modules to install feature_leaflet_map. Would you like to continue with the above? yes
-   content typs include Project, Project2, Project_w_geo, Project2_w_geo
-   create a node of CT Project_w_geo https://stage.permaculture.org.uk/content/chapel-lane. Grey box with no map inside
-   add CSS rule .leaflet-container { width: 690px; } to CSS Injector. Still grey box with no map inside
-   enable leaflet_markercluster in admin/modules. Still grey box with no map
-   look at Status Report. Some modules have database schema updates to install. You should run the database update script immediately.
-   Tried to Download backup of db but waiting.... waiting

Next

-   log in to Stage Portainer and take a snapshot of db before doing update.php
