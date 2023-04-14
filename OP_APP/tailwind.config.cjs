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
			stone: colors.stone,
			slate: colors.slate,
			neutral: colors.neutral,
			primary: colors.primary,
			sky: colors.sky,
     	 	emerald: colors.emerald,
      		indigo: colors.indigo,
			pink: colors.pink,
      		yellow: colors.yellow,
		},
		extend: {}
	},

	plugins: [require('daisyui')]
};

module.exports = config;
