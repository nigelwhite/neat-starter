---
title: Drupal Yorkshire 21.10.21
date: 2021-10-21T19:06:29.012Z
tags:
  - drupal meetup
---
rules in D9

https://www.drupal.org/project/tr_rulez. The purpose of this module is to provide the missing pieces that currently make Rules difficult to use in D8. Specifically, this module:
entity notifications module

Submenus

* See web/themes/contrib/bootstrap5/README.md for bootstrap’s position on menu subnesting. Also some suggestions(?) for how to implement your own.
* * ‘Nesting is considered bad practice in Bootstrap 5. It is bad for UX, mobile usage and accessibility.’
* Code for a solution available from <https://bootstrap-menu.com/detail-multilevel.html>
* I brought this up at Drupal Yorkshire. Daniel, Phil Norton, Elliot Ward, Paul Driver, Sue Johnson, Sacha commented. Views ranged between -
* * Sue: Don’t use any submenus for best accessibility eg <https://www.nhs.uk/every-mind-matters/>. Does this involve careful content organisation or maybe that’s no different. \[Asks users to do lots of drilling down?]
  * Sacha: Use <https://www.drupal.org/project/tb_megamenu> on desktop. Turn this off on mobile and use <https://www.drupal.org/project/responsive_menu> instead
  * Paul: Disagree with “Nesting is considered bad practice in Bootstrap 5.” Use a Smart Menu script using <https://www.drupal.org/project/smartmenus>. This is especially made to go with Bootstrap
  * Daniel: Megamenus ....<https://www.drupal.org/project/we_megamenu>
  * Examples
  * * https://www.cancer.ie/ example
    * https://www.limerick.ie/

Image widget crop for conent editors to add images, and crop them. Overkill for editors, even though they ask for it?