const { resolve } = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public')
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
      },
      {
        test: /\.(png|jpe?g)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              pngquant: {
                quality: '65-90',
                speed: 4,
                optimizationLevel: 7
              }
            }
          }
        ]
      }
    ]
  }
}