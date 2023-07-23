module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  tailwindAttributes: ['class:list'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
