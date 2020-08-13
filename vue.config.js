module.exports = {
    devServer: {
      open: process.platform === 'darwin',
      disableHostCheck: false,
      host: '0.0.0.0',
      port: 8091,
      https: false,
      hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
      proxy: {
        '/apis': {
          target: 'http://101.201.102.235:8080', // 阿里云
          //target: 'http://localhost:8080', //本地
          changeOrigin: true, // 是否跨域
          // ws: true, // proxy websockets
          pathRewrite: {
            // 重写路径
            '^/apis': ''
          }
        }
      }
    }
  }