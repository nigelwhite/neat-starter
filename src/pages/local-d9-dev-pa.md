---
title: Install Local D9 Dev - PA
date: 2021-05-28T12:48:46.284Z
tags:
  - drupal
---
Installation instructions for installing Permies-d9 for mess-about practice.

The repo is called permies-d9

Requires [Docker](https://docs.docker.com/engine/install/ubuntu/) and [docker-compose](https://docs.docker.com/compose/install/) on local machine. You can ignore 'mkcert -install' steps both on this installation and when starting a project.

Install or update Ddev
> Ddev [recommend using Homebrew on Linux](https://ddev.readthedocs.io/en/stable/) to install and update.

In terminal
> git clone https://github.com/nigelwhite/permies-d9.git
> cd permies-d9
> ddev start. Pulls the containers as this is the first time we are using it.
> ddev composer install

In browser
> http://permies-d9.ddev.site:81. Starts the Drupal install wizard. Don't start!
> download latest db backup from https://drive.google.com/drive/folders/12wo-kHLhhYgt5PB2qiE0cKjVkA9eBUz9

In terminal
> ddev import-db --src=~/Downloads/pa-d9-210528.sql.gz (change date for latest)
> ddev drush updb
> ddev drush cr

In browser
> refresh. Drupal is already installed
> View existing site

Account credentials at https://drive.google.com/drive/folders/1XTPiBW_TbSDtx6r51kE0QPRgRDtaC3Ao




