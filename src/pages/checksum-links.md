---
title: Checksum links
date: 2021-05-19T10:53:04.024Z
tags:
    - civiCRM
---

The advice I've had is "don't use checksum links as they are not secure".

Drupal Assoc recently sent me a checksum link. Has something changed to make them more secure? [problem has been that anyone with the link can get in to the destination account].

Answer from Drupal Assoc, "We no longer use CiviCRM. Time spent upgrading, integrating, working on functionality, and security hardening no longer made it a good fit for us. I'm not familiar with CiviCRM's current checksum link functionality. It would be ideal If those links open a session with only the ability to complete that one action, and not do a general user login. Otherwise, I hope they expire after some time, so there aren't permanent ways to log in as someone, without a password."
