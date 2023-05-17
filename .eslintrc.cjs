// @link: https://github.com/FatehAK/fatehak.dev/blob/main/.eslintrc.js
const getImportGroups = () => {
  const external = ['astro:', '@astrojs']
  const internal = ['layouts/**', 'pages/**', 'components/**', 'utils/**', 'theme/**', 'constants/**', 'assets/**']
  return external
    .map((pattern) => ({ pattern, group: 'external', position: 'before' }))
    .concat(
      internal.map((pattern) => ({
        pattern,
        group: 'internal',
        position: 'before'
      }))
    )
}

/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ['node_modules', 'dist', '*.cjs', 'env.d.ts'],
  root: true,
  env: {
    node: true,
    es2022: true,
    browser: true
  },
  extends: [
    'semistandard',
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    //'plugin:tailwindcss/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'global-require': 'off',
    'no-restricted-exports': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'func-names': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }],
    'sort-imports': 'off', // turned off in favour of import/order rule
    'import/order': [
      'error',
      {
        'newlines-between': 'ignore',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: getImportGroups(),
        pathGroupsExcludedImportTypes: ['react']
      }
    ],
    'import/no-unresolved': ['error', { ignore: ['^virtual:', '^astro:'] }],
    'promise/always-return': ['error', { ignoreLastCallback: true }],
    'no-useless-constructor': 'off',
    'lines-between-class-members': 'off'
  },
  plugins: ['only-warn'],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs']
      }
    },
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        extraFileExtensions: ['.astro']
      },
      rules: {
        'astro/jsx-a11y/anchor-has-content': 'off',
        'astro/jsx-a11y/media-has-caption': 'off',
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs']
      }
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }
        ],
        //'@typescript-eslint/no-unused-vars': [
        //'warn',
        //{ varsIgnorePattern: '^Props$' }
        //],
        '@typescript-eslint/no-non-null-assertion': 'off'
      }
    },
    {
      // Define the configuration for `<script>` tag.
      // Script in `<script>` is assigned a virtual file name with the `.js` extension.
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      parser: '@typescript-eslint/parser'
    },
    {
      files: ['*.md', '*.mdoc', '*.mdx'],
      parser: 'eslint-plugin-markdownlint/parser',
      extends: ['plugin:markdownlint/recommended'],
      rules: {
        'markdownlint/md033': 'off', // allow html tags
        'markdownlint/md013': 'off', // no limit on line length
        'markdownlint/md014': 'off', // allow $ prefix for shell cmds
        'markdownlint/md041': 'off', // disable h1 first rule
        'markdownlint/md004': ['error', { style: 'dash' }], // dash ul
        'markdownlint/md049': ['error', { style: 'asterisk' }], // asterisk em
        'markdownlint/md050': ['error', { style: 'asterisk' }], // asterisk b
        'markdownlint/md003': ['error', { style: 'atx' }], // atx style headings
        'markdownlint/md035': ['error', { style: '---' }], // style for hr
        'markdownlint/md048': ['error', { style: 'backtick' }] // codefence style
      }
    }
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx']
    },
    'import/ignore': ['node_modules'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
      // alias: {
      // map: [],
      // extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.astro']
      // }
    },
    settings: {
      'mdx/code-blocks': true
    }
  }
}
