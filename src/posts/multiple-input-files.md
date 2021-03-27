---
title: Multiple input files error
date: 2021-03-26
tags:
    - 11ty
---

I'm getting error

```
Output conflict: multiple input files are writing to `_site/tagmenu-tags/index.html`. Use distinct `permalink` values to resolve this conflict
  1. ./src/tagmenuTags.html
  2. ./src/tagmenuTags.html
  3. ./src/tagmenuTags.html
  4. ./src/tagmenuTags.html
  5. ./src/tagmenuTags.html
  6. ./src/tagmenuTags.html
  7. ./src/tagmenuTags.html
  8. ./src/tagmenuTags.html
  9. ./src/tagmenuTags.html
```

My template is tagmenuTags.html which contains

```
---
layout: blog
pagination:
    data: collections.myPages
    size: 1
	alias: tagmenuTags
permalink: /tagmenu-tags/{{ tag }}/
---

<div class="flex flex-col w-full">
	<div class="py-2 tracking-widest text-center bg-yellow-300 md:text-4xl">
		{{tag}}
	</div>
	<table class="mt-8">
		<tbody>
			{% set taglist = collections.myPages [ tag ] %} {% for post in
			taglist | reverse %}

			<tr>
				<td class="pb-2 font-bold text-gray-900 text-l">
					<a href="{{ post.url | url }}">
						{% if post.title %} {{ post.title }} {% else %} Untitled
						{% endif %}
					</a>
				</td>
				<td
					class="pb-2 pl-4 text-base leading-6 text-right text-gray-500"
				>
					<time> {{ post.date | readableDate }} </time>
				</td>
			</tr>

			{% endfor %}
		</tbody>
	</table>
</div>
```

In eleventy.js I have

````
eleventyConfig.addCollection('myPages', (collections) => {
		const allPages = collections.getFilteredByTag('page');
		return Array.from(new Set(allPages));
	});
    ```
Could a kind soul please tell me what I am doing wrong?
Thanks.
````

## Input from kind souls on Discord

Mathieu Huot said, "Aliases are used to give another (shorter) name to an object. So in your case, you use tagmenuTags as an alias for collections.myPages so you can use the former instead of the later."
and
"Permalink, try remove the first slash". This helped ie by taking the leading slash off tagmenu-tags/ but I'm still getting errors.

## Update....

Many thanks @Mathieu Huot and @ChuckM

This template is supposed to produce a roll of pages tagged with a particular tag. After your helpful suggestions I tried changing the permalink to `tagmenu-tags/{{ tagmenuTags }}/{{ post.title}}/index.html`. However it didn't work (same errors) and I don't understand why I would be doing that.

I have another template with `permalink: /tags/{{ tag }}/` which works just fine. For that I followed the pattern at [QUICK TIP #004—ZERO MAINTENANCE TAG PAGES FOR YOUR BLOG](https://www.11ty.dev/docs/quicktips/tag-pages/). The only difference I want in this templage is that the roll should only show Pages (ie only show .md files in collections.myPages, as defined in eleventy.js).

I feel like it needs to be `permalink: tagmenu-tags/{{ tag }}` because that is how my urls need to connect to this template. Is that wrong? Also, I'm not getting the `multiple input files are writing to `\_site/tagmenu-tags/index.html`. Use distinct `permalink` values to resolve this conflict` error any more. That seems to be solved(?)

At the moment 11ty won't build and the error is `tag set not found`. In an attempt to solve this I have added the following to eleventy.js

````js
	eleventyConfig.addCollection('pageTags', (collections) => {
		const uniqueTags = collections
			.getFilteredByTag('page')
			.reduce((tags, item) => tags.concat(item.data.tags), [])
			.filter((tag) => !!tag)
			.filter((tag) => !!tag && !['page', 'post'].includes(tag))
			.sort();
		return Array.from(new Set(uniqueTags));
	});

	eleventyConfig.addCollection('myPages', (collections) => {
		const allPages = collections.getFilteredByTag('page');
		return Array.from(new Set(allPages));
	});
	```
and changed my template to
```html
---
layout: blog
pagination:
    data: collections.myPages
    size: 1
	alias: tagmenuTags
permalink: tagmenu-tags/{{ tag }}
---

<div class="flex flex-col w-full">
	<div class="py-2 tracking-widest text-center bg-yellow-300 md:text-4xl">
		{{tag}}
	</div>
	<table class="mt-8">
		<tbody>
			{% for tag in collections.pageTags %} {% set taglist =
			collections.myPages[ tag ] %} {% for post in taglist | reverse %}

			<tr>
				<td class="pb-2 font-bold text-gray-900 text-l">
					<a href="{{ post.url | url }}">
						{% if post.title %} {{ post.title }} {% else %} Untitled
						{% endif %}
					</a>
				</td>
				<td
					class="pb-2 pl-4 text-base leading-6 text-right text-gray-500"
				>
					<time> {{ post.date | readableDate }} </time>
				</td>
			</tr>

			{% endfor %} {% endfor %}
		</tbody>
	</table>
</div>
````

That's probably a terrible hack and anyway I'm still getting `tag set not found`. Any suggestions?
