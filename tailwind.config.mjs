/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'3xl': '12px 12px 1px 1px',
				'1xl': '6px 6px 1px 1px',
			},
		},
	},
	plugins: [],
}
