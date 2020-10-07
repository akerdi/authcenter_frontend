module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 9310,
    https: false,
    hotOnly: false,
    proxy:{
      '/api': {
        target: 'http://127.0.0.1:9300/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};