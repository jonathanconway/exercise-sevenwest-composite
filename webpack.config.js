const { resolve } = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        include: [
          resolve(__dirname, "src")
        ],
        test: /\.jsx?$/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      }
  ]}
}