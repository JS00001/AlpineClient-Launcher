const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./renderer/pages/**/*.{js,ts,jsx,tsx}', './renderer/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: 'var(--primary-100)',
					200: 'var(--primary-200)',
					300: 'var(--primary-300)',
					400: 'var(--primary-400)',
				},
				secondary: {
					100: 'var(--secondary-100)',
					200: 'var(--secondary-200)',
					300: 'var(--secondary-300)',
				},
			},
		},
	},
	plugins: [],
};
