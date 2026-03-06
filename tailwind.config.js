/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'army-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        'saffron': '#FF9933',
        'white': '#FFFFFF',
        'navy': '#000080',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'candle-flicker': 'candleFlicker 2s ease-in-out infinite',
        'smoke-rise': 'smokeRise 3s ease-out forwards',
        'typewriter': 'typewriter 0.5s steps(40, end) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        candleFlicker: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        smokeRise: {
          '0%': { opacity: '0', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '0.6', transform: 'translateY(-20px) scale(1.2)' },
          '100%': { opacity: '0', transform: 'translateY(-40px) scale(1.5)' },
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
