/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				brand: {
					blue: "#1e40af",
					teal: "#0ea5a4",
				},
			},
		},
	},
	plugins: [],
};


