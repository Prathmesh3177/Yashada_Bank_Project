/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1E40AF',
          secondary: '#3B82F6',
          accent: '#F59E0B',
          bg: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif']
      },
      boxShadow: {
        card: '0 12px 30px rgba(30, 64, 175, 0.12)'
      }
    }
  },
  plugins: []
};
