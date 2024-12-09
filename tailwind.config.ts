import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			primary: {
				DEFAULT: 'var(--primary-dark)'
			},
			'primary-gray': 'var(--gray)',
			'primary-red': 'var(--red)',
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		fontFamily: {
        	ibm_sans_bold: ['var(--ibm_sans_bold)']
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
