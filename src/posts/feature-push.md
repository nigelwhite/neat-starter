---
title: Feature push to PA live
date: 2021-04-06
tags:
    - pa
    - drupal
    - features
---

Resources

-   [PA Docker general workflow](https://nwhite.uk/oyster/node/1360)
-   [Features module explanation](https://nwhite.uk/oyster/node/1350)
-   [Docker training no 2. Tom. 23.11.20](https://nwhite.uk/oyster/node/1356)
-   [Meeting with Tom and Nicola 22.2.21](https://nwhite.uk/oyster/node/1386). Good for Stage Portainer instructions.
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

Locations in Stage

-   [map views config](https://stage.permaculture.org.uk/admin/structure/views/view/project_w_geo/edit)
    -   from this I can see that Chapel Lane did not get geocoded
-   [map all nodes](https://stage.permaculture.org.uk/project_w_geo_map)
-   [Proximity map](https://stage.permaculture.org.uk/project_w_geo_proximity)

Next steps

-   log in to Stage Portainer, to stage-permaculture-drupal container
    -   this keeps closing the terminal after approx 1-2 mins
-   permissions.sh
    -   looked in ls -al and permissions.sh is not present
-   can't think of a way of backing up the db .... (on local I would have copied the database container to make a snapshot)
-   update.php > access denied
-   gave 'developer' role the permission 'administer software updates'
-   update.php

![Errors](/static/img/update-error.png 'errors')

-   Continue
-   5 pending updates
-   huge list of civicrm related errors. All errors have been logged
-   looked again at Chapel Lane node. Edited and saved > no map and no map container!!
-   change Geofield widget to Geofield from another field
-   re-edit Chapel Lane and map shows!! Yay
-   create content of CT Project2_w_geo 'Moordene'. Map shows. Yay
-   at [map all nodes](https://stage.permaculture.org.uk/project_w_geo_map) there are no markers showing
    -   ah, icon images are missing from the default fields in the CT config
    -   uploaded a default icon to project2_w_geo
    -   project_w_geo has no image field!
    -   add an existing field_map_icon field
    -   map shows icons. Yay
-   check [Proximity map](https://stage.permaculture.org.uk/project_w_geo_proximity). Works. Yay

Next steps

-   Tom to transfer 'feature_leaflet_map' to live
-   Nigel to configure the maps in Live (ie database settings, css, etc)
-   Nigel to populate CT Project2 with the fields that Sarah requires
-   Helen to liaise with Sarah to get the datasheet of the Projects she wants on the site
-   Nigel to show Helen how to add data to CT Project2
-   Helen to enter the data
-   Nigel to test map views for Project2
-   Nigel to delete CT Project and rename Project2 to Project.
-   Nigel to connect menu links, etc
