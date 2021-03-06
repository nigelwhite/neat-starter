# Settings

Docs https://blog.surjithctly.in/neat-stack-create-a-static-website-with-netlify-cms-eleventy-alpinejs-and-tailwindcss

npm run start // does pre-processing AND live reload
npm run start --port=8081 // run on a different port to the default 8080

npm info @11ty/eleventy version // get version
npm update @11ty/eleventy // update

npm install // after a pull containing package.json changes

All html files are processed with Nunjacks

Collections in 11ty are defined only by tags
Collections in Netlify CMS are defined in admin/config.yml
Collections in my site

-   blog of posts
-   docs of pages

Structure of a collection

-   folder for md files in the collecion (/posts)
-   listing of all md files in the collection's folder (blog/index.html)
-   json file defining the defaults for each md file (/posts/posts.json)
    -   layout: posts
    -   tags: post
-   md files in the collection (/posts/my-first-post.md)
    -   front matter defines the fields?
        -   title // required
        -   author
        -   date
-   layouts
    -   for the posts (\_includes/posts.html)
    -   for the collection listing (\_includes/blog.html)
    -   these layouts are nested so they specify, in front matter, the layout they use (default).
    -   default layout is for the whole site
        -   a partial for navbar, footer, content (\_includes/partials/navbar.html)
