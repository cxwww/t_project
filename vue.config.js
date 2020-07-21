const path = require('path')

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'))
      .set('assets', path.join(__dirname, 'src/assets'))
      .set('components', path.join(__dirname, 'src/components'))
      .set('views', path.join(__dirname, 'src/views'))
  }
}
