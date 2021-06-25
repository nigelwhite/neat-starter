---
title: Civi Campfire Chat. Maililng with Richard Lott and Mat Wire
date: 2021-06-25T16:31:16.798Z
tags:
  - CiviCRM
---
Mat Wire maintains core, Strip and other extensions. mjw consulting.

Mosaico
- open source, responsive email template builder
- www.mosaico.io
- gui drag and drop builder
- inserts only the html which works well in common email clients so formatting is basic
- can test layouts in different sizes, in the editor
- can send a test email, eg for approval by Ryan
- insert Civi shortcodes for contact fields
- can keep images in a gallery
- can keep custom "blocks" in a library
- extension Message Templates automatically saves built emails as blocks for reuse
- extension mosaico_tweaks
- unsubscribe links can be inserted via civi tokens
- can create a block with unsubscribe tokens and social media links

Rich Lott
- "Reputation" results from others sharing the IP address sending spam, regular sending pattern, kind of content, recipient behaviour, set up (dkim, spf, ptr, mx)
- mail account providers (eg gmail, hotmail) have thier own policies
- to see your spamminess rating - mx toolbox, mailtester.com
- SPF. Sender protection framework. Inspects the 'Return path' to see if its the right one. Important.
- DKIM. Domain Keys Identified Mail. Cryptographic email signature added by my server. Can be looked up and checked. Important.
- DMARC. Domain-based Message Authentication, Reporting and Conformance (DMARC). Complex and not well implemented.
Transactional vs Bulk (anything sent by Civi). Bulk requires an unsubscribe link.

What looks like spam to mail services can change from minute to minute.
Elastic email has different IP pools - some with better reputation than others. They move you up and down without notice.
Services can change your fees any time!

Mail services
- Mandrill is strictly transactional
- Elastic Email requires unsubscribe link on everything

3rd party SMTP mailing provider service
- fast
- less work for your own server
- less to be responsible for

Run your own relay
- needs skills
- you have full access to the logs
- you have to sort out any issues with clients eg microsoft!!

You can use Civi + Mailchimp Sync. Horribly complicated. Expensive.

Q: is it possible to use mailchimp sync and mosaico in the same civi installation, i.e. use mosaiico to send transactional emails and to groups but sync your vroups to mailchimp for large lists for better a/b testing, etc
A: yes. Can have both

