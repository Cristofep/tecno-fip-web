/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',  // Asegúrate de que Tailwind procese todos estos archivos
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'primary': '#4F46E5', // Example primary color
        'secondary': '#6366F1', // Example secondary color
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    }
  },
  plugins: [],
}