import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			black: 'black',
			white: 'white',
			primary: 'black',
			secondary: 'rgb(238, 238, 238)',
			gray: 'rgb(50, 50, 50)',
			transparent: 'transparent',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			animation: {
				bounce: 'bounce 2s infinite',
			},
		},
	},
	plugins: [],
};
export default config;
