// Hammerframework's ESLint configuration is a mixture between ESLint's
// recommended rules[1], React's recommended rules[2], and a bit of our stylistic
// flair:
// - no semicolons
// - comma dangle when multiline
// - single quotes
// - always use parens around arrow functions
//
// 1. https://eslint.org/docs/rules/
// 2. https://www.npmjs.com/package/eslint-plugin-react#list-of-supported-rules
module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier', 'import', 'jsx-a11y', 'react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  globals: {
    gql: 'readonly',
    React: 'readonly',
    __HAMMER__: 'readyonly',
  },
  rules: {
    'prefer-object-spread': 'warn',
    'prefer-spread': 'warn',
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-useless-escape': 'off',
    camelcase: ['warn', { properties: 'never' }],
    'no-new': 'warn',
    'new-cap': ['error', { newIsCap: true, capIsNew: false }],
    'space-before-function-paren': ['error', 'always'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'arrow-parens': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    // react rules
    'react/prop-types': [
      'error',
      {
        skipUndeclared: true,
        ignore: ['style', 'children', 'className', 'theme'],
      },
    ],
    'react/display-name': 'off',
  },
}
