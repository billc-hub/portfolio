/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060A12',
          900: '#0A1120',
          850: '#0F1A30',
          800: '#16233E',
          700: '#23355A',
        },
        slate: {
          850: '#152132',
          750: '#263750',
        },
        gold: {
          400: '#F0C665',
          500: '#D4AF37',
          600: '#AA820A',
        },
        accent: {
          blue: '#38BDF8',
          steel: '#94A3B8'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
