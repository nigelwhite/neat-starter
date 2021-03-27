const yaml = require('js-yaml');
const { DateTime } = require('luxon');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');

module.exports = function (eleventyConfig) {
	// Disable automatic use of your .gitignore
	eleventyConfig.setUseGitIgnore(false);

	// Merge data instead of overriding
	eleventyConfig.setDataDeepMerge(true);

	// human readable date
	eleventyConfig.addFilter('readableDate', (dateObj) => {
		return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('d.L.yy');
	});

	// Syntax Highlighting for Code blocks
	eleventyConfig.addPlugin(syntaxHighlight);

	// To Support .yaml Extension in _data
	// You may remove this if you can use JSON
	eleventyConfig.addDataExtension('yaml', (contents) => yaml.load(contents));

	// Add Tailwind Output CSS as Watch Target
	eleventyConfig.addWatchTarget('./_tmp/static/css/style.css');

	// Copy Static Files to /_Site
	eleventyConfig.addPassthroughCopy({
		'./_tmp/static/css/style.css': './static/css/style.css',
		'./src/admin/config.yml': './admin/config.yml',
		'./node_modules/alpinejs/dist/alpine.js': './static/js/alpine.js',
		'./node_modules/prismjs/themes/prism-tomorrow.css':
			'./static/css/prism-tomorrow.css',
	});

	// Copy Image Folder to /_site
	eleventyConfig.addPassthroughCopy('./src/static/img');

	// Copy favicon to route of /_site
	eleventyConfig.addPassthroughCopy('./src/favicon.ico');

	// Minify HTML
	eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
		// Eleventy 1.0+: use this.inputPath and this.outputPath instead
		if (outputPath.endsWith('.html')) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});
			return minified;
		}

		return content;
	});

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

	eleventyConfig.addCollection('pageTags2', (collection) => {
		const pages = collection.getFilteredByTag('page');
		let tagSet = new Set();
		pages.forEach((temp) => {
			if ('tags' in temp.data) {
				for (const tag of temp.data.tags) {
					tagSet.add(tag);
				}
			}
		});
		return [...tagSet];
	});

	// Let Eleventy transform HTML files as nunjucks
	// So that we can use .html instead of .njk
	return {
		dir: {
			input: 'src',
		},
		htmlTemplateEngine: 'njk',
	};
};
