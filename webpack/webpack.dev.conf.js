const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const config = require('../config')

const devConfig = merge(baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  devServer: {
    contentBase: config.packageRoot,
    historyApiFallback: true,
    port: config.dev.port,
    host: config.dev.host,
    publicPath: config.publicPath,
    hot: true,
    open: true,
    inline: true
  },
  plugins: [
    // htmlwebpackplugin默认放在output path下，单入口情况下默认chunks包含入口文件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.template.html'),
      inject: true,
      filename: 'index.html',
      title: 'React App',
      chunksSortMode: 'manual',
      chunks: ['global', 'index']
    }),
    // hot replacement
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
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

module.exports = devConfig
