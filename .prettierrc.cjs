/** @type {import('prettier').Config} */
module.exports = {
  // printWidth: 120,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  useTabs: false,
  bracketSameLine: false,
  trailingComma: 'none',
  plugins: [
    require.resolve('prettier-plugin-astro')
    // require.resolve('prettier-plugin-tailwindcss') /* Must come last */
  ],
  pluginSearchDirs: false,
  overrides: [
    { files: '*.astro', options: { parser: 'astro' } },
    {
      files: ['*.json', '*.md', '.mdoc', '.mdx', '*.toml', '*.yml', '*.yaml'],
      options: {
        useTabs: false
      }
    }
  ],
  endOfLine: 'lf'
}
