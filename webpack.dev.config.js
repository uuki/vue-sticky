/*eslint-env node */

module.exports = Object.assign({
  entry: './example',
  output: {
    filename: 'build.js',
    path: __dirname,
    publicPath: '/',
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 6001,
    open: true,
    overlay: { warnings: false, errors: true }
  },
  devtool: 'cheap-eval-source-map'
}, require('./webpack.base'))
