/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary-green": "#00dba9",
				dark: "#06070E",
				orange: "#DE6B48",
				light: "#FFEDE1"
			}
		},
	},
	plugins: [],
}
