---
title: Postal Address field config
date: 2021-06-16T11:06:06.606Z
tags:
  - drupal
  - drupal-mapping
---
If you have any fields inside Postal Address as Required, the poor user has to enter address details. We don't want this as some, for example, Events, are on-line, with no physical location.

Solution -
- in CT fields tab > Postal Address > Edit
- tick bottom option to make all fields optional
- in Default Country enter None

Plusses
- the user can enter no address, or even delete a previously entered address.

Minuses
- the user has to manually enter a country
- then wait for the web site to give the necessary fields for that country.