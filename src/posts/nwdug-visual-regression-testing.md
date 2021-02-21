---
title: NWDUG Visual Regression Testing
description: Alex Moreno, works for Acquia.
author: Nigel
date: 2021-02-09T19:08:18.150Z
tags: post
---

The problem: developer errors. Errors are harder to spot the further up the workflow they are allowed to persist.

The solution: build better tools to catch bugs. EdHat, Phpunit, Wraith, Spectre, BackstopJS. Testing costs 10% of dev cost!

Glitcherbot https://github.com/alex-moreno/glitcherbot

Glitcherbot crawls the site > deploy > crawl again after a week > compare the data diff

Uses PHP 7 (to do the work) and Sql Lite (to store the data)

-   put in specific url(s) to crawl
-   finds site map to navigate the site
-   spots 500 200 403 errors
