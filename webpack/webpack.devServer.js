const WebpackDevServer = require('webpack-dev-server')
const config = require('../webpack/webpack.dev.conf')
const webpack = require('webpack')

WebpackDevServer.addDevServerEntrypoints(config, config.devServer)
const compiler = webpack(config)
const server = new WebpackDevServer(compiler, config.devServer)

server.listen(config.devServer.port, config.devServer.host, () => {
  console.log(`server start on ${config.devServer.host}:${config.devServer.port}`)
})
