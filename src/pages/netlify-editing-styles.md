---
title: Netlify editing styles md markup
date: 2021-03-05T15:56:25.515Z
tags:
    - 11ty
    - netlify
---

Method used -

1. create a new blog post online
2. insert examples of all the text style options Netlify CMS provides
3. correctly format the page in Netlify CMS editor interface
4. publish
5. inspect online. Some of the styling works perfectly. Some does not work at all.
6. on local: git pull
7. inspect styling. Same result
8. add styling to tailwind.css until all the styling is correct
9. git push
10. inspect online

**Bold**

_Italic_

`Code phrase`

[Link](https://headingley.org)

# Heading 1

### Heading 3

> Quote

-   List of
-   bullets

normal text

1. List of
2. numbers

normal text

![Chapel Lane flowers](/static/img/dsc00801.jpg 'Chapel Lane flowers')

normal text

```
.myclass {
  background-color: green;
  }
```
