---
title: Mapping attempts on Stage
date: 2021-06-15T09:34:24.538Z
tags:
  - drupal
  - drupal-mapping
---
Geocoding and Leaflet work ok on CT Project2

In CT Event - 
- add the fields Address, Geocode and configure
- add a test node
- manual insertion of lat and long produces a Leaflet map, so Leaflet is working ok.
- 'geocode from address field' does not produce lat and long, so geocoding is not working
- lots of errors in the logs about an empty string in the date field. Relevent?

In CT Course -
- add the fields Address, Geocode and configure
- add a test node
- geocoding from address field works and produces a map

Doh!
- solved
- geocode from another field must be Postal Address, not Address


