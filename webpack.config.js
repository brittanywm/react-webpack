// module.exports = {
//   entry: './src/app.js',
//   output: {
//     filename: './dist/app.bundle.js'
//   }
// }

const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.join(__dirname, 'dist');
const APP_DIR = path.join(__dirname,'src');

const config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR, 
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
}

module.exports = config;