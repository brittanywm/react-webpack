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
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
}

module.exports = config;