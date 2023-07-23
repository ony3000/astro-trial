const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: '#7c3aed',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        '.bg-gradient-accent': {
          'background-image': `linear-gradient(45deg, ${
            theme('colors').accent
          }, #da62c4 30%, white 60%)`,
        },
      });
    }),
  ],
};
