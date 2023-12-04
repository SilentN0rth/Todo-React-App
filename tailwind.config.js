/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
			},
			screens: {
				xsm: '576px',
			},
			colors: {
				primaryBg: '#0e1828',
				secondaryBg: '#102031',
				sidebarBg: '#122539',
				modalBg: '#0b1b2c',
			},
			keyframes: {
				slideBottom: {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' },
				},
				slideRight: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				slideTop: {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(0)' },
				},
				slideLeft: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},

				modalTop: {
					'20%, 80%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-200%)' },
				},
			},
			animation: {
				slideB: 'slideBottom 0.6s ease-in-out',
				slideR: 'slideRight 0.6s ease-in-out',
				slideT: 'slideTop 0.3s ease-in-out',
				slideL: 'slideLeft 0.6s ease-in-out',
				modalT: 'modalTop 3s ease-in-out',
			},

			width: {
				squares: '45px',
			},
			height: {
				screen: '100svh',
				squares: '45px',
			},
			// hover:scale-110 transition-transform duration-300
		},
	},

	safelist: [
		{
			pattern:
				/(border|bg|text)-(red|green|blue|yellow|orange|purple|lime|slate|cyan|violet|pink|fuchsia)-(200|300|400|500|600|700|800|900)/,
		},
	],
	plugins: [require('tailwind-scrollbar')],
}
