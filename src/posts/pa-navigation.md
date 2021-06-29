---
title: Change order of PA navigation gizmos 1
date: 2021-03-17
tags:
    - drupal
    - pa navigation
    - Perm Assoc
---

Summary: Initial investigation in local docker PA site

Problems

-   mobile navigation is a mess
-   full screen navigation has the items in the wrong order

Aim

-   in full screen - get nav items in the right order
-   in mobile - get a sensible way of hiding/showing the menus

Investigation

-   using PA Dockerised local development
-   our theme, for all domains, is Permaculture Bootstrap Multisite Theme, but this is not set as the default in admin/appearance. So I changed the setting in admin/appearance. All looks ok
-   Blocks are Navigation, Banner, Top Bar, Highlighted, Help, Content. Where is the main nav menu? Ah they are set, per domain, in Domain settings. So which Region do they go into?
-   Looking in dev tools, there is a role=banner and a div="navbar-collapse-collapse". In there is nav role="navigation" and in there is the main menu
-   Tried moving "inter-domain nav gizmo and search full site" from Top Bar Region to Navigation Region but it won't stay there on save
-   stumped
