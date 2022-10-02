const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: 'https://buddlebuddy.shop'
  },
  transpileDependencies: true,
  lintOnSave:false
})
