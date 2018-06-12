const path = require('path')

const config = {
  // 打包后所在的目录
  packageRoot: path.resolve(__dirname, '../dist'),
  // 项目所正在的服务器目录
  publicPath: '/',
  // 资源所在目录
  assetsPath: 'assets',
  // 开发服务器配置
  dev: {
    host: 'localhost',
    port: '8080'
  }
}

module.exports = config
