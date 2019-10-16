module.exports = {
  "extends": "../babel.config.js",
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": "> 0.25%, not dead",
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ],
  "plugins": [
    [
      "babel-plugin-module-resolver",
      {
        cwd: 'babelrc',
        "alias": {
          "src": "./src"
        }
      }
    ],
    "babel-plugin-syntax-dynamic-import",
    "babel-plugin-styled-components"
  ]
}
