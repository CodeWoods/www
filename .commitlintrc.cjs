// https://github.com/FatehAK/fatehak.dev/blob/main/.commitlintrc.js
module.exports = {
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'style', 'build', 'perf', 'chore', 'ci', 'refactor', 'test', 'docs', 'revert']
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', 100]
  },
  prompt: {
    messages: {
      type: 'Type of change:',
      scope: 'Scope (optional):',
      customScope: 'New Scope:',
      subject: 'Commit Message:'
    },
    types: [
      { value: 'feat', name: '✨   feat' },
      { value: 'fix', name: '🐛   fix' },
      { value: 'style', name: '💄   style' },
      { value: 'build', name: '📦️   build' },
      { value: 'perf', name: '⚡️   perf' },
      { value: 'chore', name: '🔨   chore' },
      { value: 'ci', name: '🎡   ci' },
      { value: 'refactor', name: '♻️    refactor' },
      { value: 'test', name: '🌱   test' },
      { value: 'docs', name: '📝   docs' },
      { value: 'revert', name: '⏪️   revert' }
    ],
    scopes: ['deps', 'cli', 'docs', 'ci', 'minor', 'typo'],
    useEmoji: false,
    upperCaseSubject: true,
    customScopesAlias: 'new',
    skipQuestions: ['body', 'breaking', 'footerPrefix', 'footer', 'confirmCommit']
  }
}