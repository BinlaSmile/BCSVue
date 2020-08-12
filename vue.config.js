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
          // 代理api
          // target: 'http://192.168.205.54:8080', // 赵涛服务器api地址
          // target: 'http://192.168.204.199:8080',
          // target: 'http://192.168.220.1:30088', // sit服务器
          target: 'http://172.20.10.2:8080', // sit服务器
          // target: 'http://192.168.220.1:30188', // uat服务器
          // target: "http://192.168.204.24:9099", //刘永志服务器api地址
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