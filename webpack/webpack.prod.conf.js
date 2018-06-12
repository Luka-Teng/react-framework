const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
// const config = require('../config')

const prodConfig = merge(baseConfig, {
  devtool: 'source-map',
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: true,
      parallel: true
    }),
    // htmlwebpackplugin默认放在output path下，单入口情况下默认chunks包含入口文件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.template.html'),
      inject: true,
      filename: 'index.html',
      title: 'React App',
      chunksSortMode: 'manual',
      chunks: ['vendor', 'global', 'index']
    }),
    // global var
    new webpack.ProvidePlugin({
      _: 'lodash'
    })
    /*
    // copy assets
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/assets/images'),
      to: path.join(config.assetsPath, 'images')
    }]),
    new webpack.NoEmitOnErrorsPlugin()
    */
  ]
})

module.exports = prodConfig
