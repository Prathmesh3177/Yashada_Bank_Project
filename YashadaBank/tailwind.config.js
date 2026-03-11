/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#C8102E',
          dark: '#9B0F24',
          light: '#FDEBEC',
          white: '#FFFFFF',
          gray: '#F5F6F8',
          darkText: '#1A1A1A',
          secondaryText: '#6B7280'
        }
      },
      fontFamily: {
        sans: ['Noto Sans Devanagari', 'Poppins', 'sans-serif']
      },
      boxShadow: {
        card: '0 12px 30px rgba(200, 16, 46, 0.12)'
      }
    }
  },
  plugins: []
};
