module.exports = {
  // https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [1, 'always', 140],
    'footer-max-line-length': [2, 'always', 140],
    'header-max-length': [2, 'always', 140],
  },
};
