module.exports = {
  'extends': 'airbnb',
  'plugins': [
      'react',
      'jsx-a11y',
      'import'
  ],
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'env': {
    'browser': true,
    'node': true,
    'serviceworker': true
  },
  'rules': {
    'react/require-extension': 0,
    'space-before-function-paren': 0,
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'comma-dangle': ['error', 'never'],
    'curly': 'error',
    'prefer-template': 'error',
    'prefer-spread': 'error',
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'camelcase': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'quotes': [2, 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
    'no-case-declarations': 0,
    'no-use-before-define': 0,
    'react/prefer-stateless-function': 0,
    'no-trailing-spaces': 0,
    'no-else-return': 0,
    'global-require': 0,
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
    'import/no-extraneous-dependencies': 0
  }
};
