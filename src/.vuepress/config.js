module.exports = {
  base: '/quanturban-web/',
  title: '量城科技',
  locales: {
    '/': {
      lang: 'zh-cmn-Hans',
    }
  },
  themeConfig: {
    copyright: '© 2015-2020 北京量城科技有限公司 | 京ICP备17019839号-4',
    smoothScroll: true
  },
  chainWebpack (config) {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  }
}
