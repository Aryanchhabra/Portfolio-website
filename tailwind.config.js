/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0118',
          secondary: '#130826',
        },
        text: {
          DEFAULT: '#f4f1ff',
          muted: '#b8b0d4',
        },
        accent: {
          violet: '#8b5cf6',
          pink: '#ec4899',
          cyan: '#06b6d4',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'gradient-shift': 'gradientShift 6s ease infinite',
        'float': 'float 20s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(5%, -5%) scale(1.08)' },
          '66%': { transform: 'translate(-3%, 4%) scale(0.95)' },
        },
      },
    },
  },
  plugins: [],
}

