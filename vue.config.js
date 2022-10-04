const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: 'https://buddlebuddy.shop'
  },
  transpileDependencies: true,
  experimentalWebKitSupport: true,
  lintOnSave:false
})
