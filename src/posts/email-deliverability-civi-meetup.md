---
title: Email deliverability. Civi Meetup
date: 2021-11-10T16:33:02.425Z
tags:
  - civi meetup
---
Rich Lott.

A 'bounce' is when your email is sent back to you, saying 'no, don't want it'. Can come from any one of a number of spam filters - your sending SMTP service, the recieving SMTP service, the destination domain eg btinternet.

Spam comes in waves. When spammers figure a new way to send they go crazy. Then services tighten up: AI thresholds change. You may get a hard bounce and Civi will remove that address from your mailing list! You can only prevent that by manually checking.

Transactional email (one off mailing) vs Bulk email. All mail sent by civimail has a special return address: 'return path' - email bounces are sent here. There is also From and Reply To.

A Bounce message on an email sent by civimail can arrive in serveral email inboxes.

Civi can send php mail, sendmail or smtp. Smtp is probably the fastest.

\* 3rd party SMTP (simple mail transfer protocol) paid email delivery serivce eg Sendgrid. You can ask them to sort out any blocklist you get put on. Its their fault, not ours, when things go wrong. Its a pain to set up integration with Civi.

Best to have different IPs for transactional and bulk email. But Civi can't do that.

Good to have a static IP? If you have volatile sending patterns you may get less problems with a shared IP. All IPs have a history: some come with a good reputation, some bad. Very hard to recover from a bad reputation.

IP warm-up. After getting a new IP - First send 100 emails. Next day 200. Next day 500. This gets the watchers used to your pattern. If you send 5000 on the first go, they'll trigger and think you are a spammer.

\* can't fix problems with 3rd party services

tech set up, state of the internet, reputation over time, content of my email (certain text terms) use mailtester.com, settngs in destination services like Microsoft, btinternet

How to prevent emails from being rejected as spam -

\* either use a 3rd party (who sets things up for you)

\* or configure your own mail server settings (advanced)

\* ask users to label one of your emails "this is not spam" and to put your address in their address book. Eg can add this request to 

SPF Sender Policy Framework

DNS Domain Name Service

DKIM Domain Keys Identified Mail

Civi categorises bounce messages by recognising certain phrases

Manually monitor emails that get put on hold

Rich Lott's email extensions -

\* Civi extension Email Union by Rich Lott. View your bounce performance by domain, compared to others using your SMTP provider. Depends on lots of people installing it and sharing their anon data with it.

\* Resend Email. Immediately send a copy of a previous mailing to a single contact. Could be a user or a test service

\* Mosaico Message Template.

\* Message Template Tester

\* Keenies. Search of how your mailings are doing

\* Mailing Tracker

\* Chasse

Extentions by others: Message Template Tools

Link tracking works better to see if anyone has opened your email. Better than the 'opened' rates