/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },

        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },

        '.prevent-select': {
          '-webkit-user-select': 'none',
          '-ms-user-select': 'none',
          'user-select': 'none',
        },

        '.text-gradiant': {
          background: 'linear-gradient(42deg, #2418CB 0%, #FA465D 100%)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },

        '.btn-gradiant': {
          background: 'linear-gradient(42deg, #2418CB 0%, #FA465D 100%)',
        },

        '::-webkit-scrollbar': {
          width: '10px',
        },

        '::-webkit-scrollbar-track': {
          'background-color': '#fff',
        },

        '::-webkit-scrollbar-thumb': {
          'background-color': '#00E769',
          'border-radius': '5px',
        },

        '::-webkit-scrollbar-thumb:hover': {
          'background-color': '#006E32',
        },
      });
    }),
  ],
});
