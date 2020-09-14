module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/Delish/': '/',
    css:{
        loaderOptions:{
            scss:{
                //具体路径根据项目pei'zhi
                prependData: `
                    @import "~@/variables.scss";
                    @import "~@/function.scss";
                    @import "~@/mixins.scss";
                    @import "~@/animation.scss";
                    @import "~@/base.scss";
                    @import "~@/utilities.scss";
                `
            }
        }
    }
}
/*const path = require('path')

module.exports = {
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/imports.styl'),
      ],
    })
}*/