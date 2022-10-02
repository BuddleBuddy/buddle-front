const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
      '/': {
        target:'https://buddlebuddy.shop',
        changeOrigin: true,
      }
    }
  },
  transpileDependencies: true,
  lintOnSave:false
})
