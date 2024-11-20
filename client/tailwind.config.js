/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primaryBackground: 'hsl(var(--bg-background))',
				primaryText: 'hsl(var(--text-primary))',
				secondarText: 'hsl(var(--text-secondary))',
				messagePrimary: 'hsl(var(----accent-primary))',
				messagesecondary: 'hsl(var(----accent-secondary))',
				buttonPrimary: 'hs;(var(--button-primary))',
				buttonSecondary: 'hsl(var(--button-secondary))',
				backgroundInput: 'hsl(var(--input-bg))',
				inputText: 'hsl(var(--input-text-primary))',
				textDanger: 'hsl(var(--text-danger))',
				textWarn: 'hsl(var(--text-warn))',
				linkColor: 'hsl(var(--text-link))',
				iconColor: 'hsl(var(--text-icon))',
			},
		},
	},
	plugins: [],
};
