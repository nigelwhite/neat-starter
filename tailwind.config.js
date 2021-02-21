module.exports = {
	purge: {
		mode: 'all',
		content: ['./**/*.html'],
		options: {
			whitelist: [],
		},
	},
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {},
		},
		debugScreens: {
			position: ['top', 'left'],
		},
		variants: {},
		plugins: [
			require('@tailwindcss/typography'),
			require('tailwindcss-debug-screens'),
		],
	},
};
