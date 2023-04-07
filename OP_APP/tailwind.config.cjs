const colors = require('tailwindcss/colors')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			transparent: 'transparent',
      		current: 'currentColor',
			'midnight': '#2d3b4f',
			black: colors.black,
      		white: colors.white,
			blue: colors.blue,
      		gray: colors.gray,
     	 	emerald: colors.emerald,
      		indigo: colors.indigo,
      		yellow: colors.yellow,
		},
		extend: {}
	},

	plugins: []
};

module.exports = config;
