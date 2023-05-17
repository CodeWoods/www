/* @credit:
 * https://github.com/FatehAK/fatehak.dev/blob/main/lint-staged.config.js
 * https://github.com/ryoikarashi/ryoikarashi.com/blob/main/.lintstagedrc.js
 */
const prettierCmd = `prettier --loglevel warn --plugin-search-dir=. --cache --cache-strategy content --cache-location ./node_modules/.cache/.prettiercache --write`
const stylelintCmd = `stylelint --fix --max-warnings=0 --custom-formatter=node_modules/stylelint-formatter-pretty --aei --cache --cache-strategy content --cache-location ./node_modules/.cache/.stylelintcache`
const eslintCmd = `eslint --max-warnings=0 --format=pretty --cache --cache-strategy content --cache-location ./node_modules/.cache/.eslintcache`

module.exports = {
  '**/*.{js,ts,mjs}': [eslintCmd, prettierCmd],
  '**/*.astro': [eslintCmd, stylelintCmd, prettierCmd],
  '**/*.{css,scss}': [stylelintCmd, prettierCmd],
  '**/*.json': [prettierCmd]
  // '**/!(*README).{md,mdoc,mdx}': [eslintCmd, 'node ./scripts/last-mod-updater.cjs']
}
