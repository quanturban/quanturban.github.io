require('dotenv').config()

module.exports = {
  base: '/',
  title: '量城科技 - 城市数据产品与决策咨询',
  description: '量城科技专注于城市数据价值挖掘和协作工具打造，为房地产企业和政府提供数据服务与决策支持，提升城市和企业的精细化服务水平和运行效率。',
  head: [
    ['meta', { name: 'keywords', content: '量城科技, 城市数据, 地产数据, 房地产咨询, 城市研究，地图喵, 年鉴汪, 小区罗盘, 疫情场所地图'}],
    ['link', { rel: 'icon', type: 'image/x-icon', href: 'https://quanturban-web.oss-cn-shenzhen.aliyuncs.com/images/favicon.ico'}],
    ['script', { src: `https://cdn.jsdelivr.net/npm/leancloud-storage@3.15.0/dist/av-min.js` }]
  ],
  locales: {
    '/': {
      lang: 'zh-cmn-Hans',
    }
  },
  themeConfig: {
    logo: 'https://quanturban-web.oss-cn-shenzhen.aliyuncs.com/images/logo.png',
    copyright: 'Copyright 2017-2020 QuantUrban | 京ICP备17019839号-2',
    LC: {
      appId: 'fmzYEOtdMGmDKf10FSq3GAP3-gzGzoHsz',
      appKey: process.env.LC_APP_KEY,
      className: 'Contact'
    },
    socialMedias: [
      {
        name: 'wechat',
        icon: 'https://quanturban-web.oss-cn-shenzhen.aliyuncs.com/images/icon-wechat.png',
        img: 'https://quanturban-web.oss-cn-shenzhen.aliyuncs.com/images/wechat-qr.jpg'
      },
      {
        name: 'weibo',
        icon: 'https://quanturban-web.oss-cn-shenzhen.aliyuncs.com/images/icon-weibo.png',
        href: 'https://weibo.com/quanturban'
      },
      {
        name: 'zhihu',
        icon: 'https://quanturban-web.oss-cn-shenzhen.aliyuncs.com/images/icon-zhihu.png',
        href: 'https://zhuanlan.zhihu.com/datahammer'
      },
      {
        name: 'github',
        icon: 'https://quanturban-web.oss-cn-shenzhen.aliyuncs.com/images/icon-github.png',
        href: 'https://github.com/quanturban'
      }
    ],
    smoothScroll: true
  },
  plugins: ['@vuepress/nprogress'],
  chainWebpack (config) {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  }
}
