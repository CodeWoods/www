const propertyOrder = require('stylelint-config-clean-order')

// Overwrite empty line threshold
propertyOrder.rules['order/properties-order'][1].unspecified = 'bottom'
propertyOrder.rules['order/properties-order'][1].emptyLineMinimumPropertyThreshold = 25

/** @type { import("stylelint").Configuration } */
module.exports = {
  defaultSeverity: 'warning',
  reportDescriptionlessDisables: true,
  extends: ['stylelint-config-standard'],
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-no-unsupported-browser-features',
    'stylelint-order',
    'stylelint-plugin-defensive-css'
  ],
  rules: {
    ...propertyOrder.rules,
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/use-defensive-css': [true, { severity: 'warning' }],
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning'
        // ignore: [],
      }
    ],
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested'], ignore: ['after-comment', 'stylelint-commands'] }
    ],
    'custom-property-empty-line-before': 'never',
    'declaration-block-no-redundant-longhand-properties': [true, { ignoreShorthands: ['/grid/'] }],
    'property-no-vendor-prefix': [true, { ignoreProperties: ['/transition/'] }],
    // tailwind
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind', 'apply', 'layer', 'config'] }],
    'function-no-unknown': [true, { ignoreFunctions: ['theme'] }],
    'custom-property-pattern': null,
    'selector-class-pattern': null,
  }
  // overrides: [
  // {
  // files: '**/*.astro',
  // customSyntax: 'postcss-html',
  // rules: {
  // 'selector-pseudo-class-no-unknown': null
  // }
  // }
  // ]
}
