const path = require('path')
const config = require('../config')

module.exports = {
  entry: {
    index: [
      path.resolve(__dirname, '../src/index.js')
    ],
    global: ['babel-polyfill']
  },
  output: {
    path: config.packageRoot,
    filename: '[name]_[hash].js',
    publicPath: config.publicPath
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        use: [
          { loader: 'eslint-loader' }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        // 单一loader，并且没有options的时候可以直接loader
        // 可以简写为loader: 'babel-loader'
        use: [
          { loader: 'babel-loader' }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: path.join(config.assetsPath, '[name].[hash:7].[ext]')
            }
          }
        ]
      },
      {
        test: /\.module.css?$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              modules: true,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /^((?!\.module).)*css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              modules: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
}
