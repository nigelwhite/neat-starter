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
			colors: {
				primary: '#ff6363',
				secondary: {
					100: '#e2e2d5',
					200: '#888883',
				},
			},
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
