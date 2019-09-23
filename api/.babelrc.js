const path = require('path')

// // We need the absolute path of the src dir when building with
// // `hammer-dev-server` but have to use the relative path when using
// // `zip-it-and-ship-it`
// const SRC_ALIAS__DIR =
//   process.env.NODE_ENV === 'production' ? './src' : path.join(__dirname, 'src')

module.exports = {
  extends: '../babel.config.js',
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '8.10.0',
        },
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
  ],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        cwd: 'babelrc',
        alias: {
          src: './src',
        },
      },
    ],
  ],
}
