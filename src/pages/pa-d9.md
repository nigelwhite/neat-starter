---
title: PA D9
date: 2021-02-25T12:21:18.350Z
tags:
  - drupal
---
Steps

* composer create-project drupal/recommended-project PA_D9
* ddev config.... etc
* ddev start.... fails
* .ddev/config.yaml change router_http_port to port 81
* ignore mkcert error
* ddev should start
* go to ddev's local url
* run through the Drupal insatall
* site should be at welcome page
* ddev composer require drupal/admin_toolbar