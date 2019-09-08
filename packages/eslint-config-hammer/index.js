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
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'space-before-function-paren': ['error', 'always'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
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
