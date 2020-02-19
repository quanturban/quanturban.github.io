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
    socialMedias: [
      {
        name: 'github',
        icon: '/icon-github.png',
        href: 'https://github.com/quanturban'
      },
      {
        name: 'wechat',
        icon: '/icon-wechat.png',
        qr: ''
      },
      {
        name: 'zhihu',
        icon: '/icon-zhihu.png',
        href: 'https://zhuanlan.zhihu.com/datahammer'
      },
      {
        name: 'weibo',
        icon: '/icon-weibo.png',
        href: 'https://weibo.com/quanturban'
      }
    ],
    smoothScroll: true
  },
  chainWebpack (config) {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  }
}
