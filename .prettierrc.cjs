/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  bracketSameLine: false,
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-tailwindcss') /* Must come last */,
  ],
  pluginSearchDirs: false,
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
