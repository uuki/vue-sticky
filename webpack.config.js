/*eslint-env node */

const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = Object.assign({
  entry: './src',
  output: {
    library: 'VueSticky',
    libraryTarget: 'umd',
    filename: 'vue-sticky.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      parallel: true
    })
  ]
}, require('./webpack.base'))
