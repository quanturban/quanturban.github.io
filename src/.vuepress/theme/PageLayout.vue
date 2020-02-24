<template>
  <div class="page-layout" :class="page.name">
    <Header />
    <component :is="page" class="page" />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from './Home'
import Consulting from './Consulting'
import Contact from './Contact'
import PageNotFound from './404'

const pages = {
  Home,
  Consulting,
  Contact,
}

export default {
  components: {
    Header,
    Footer,
    PageNotFound,
    ...pages
  },
  computed: {
    data () {
      return this.$frontmatter
    },
    page () {
      const page = this.$frontmatter.page

      return pages[page] || PageNotFound
    }
  }
}
</script>

<style lang="stylus">
@import "../styles/variables"
html
body
  height 100%

body
  background-color #01030D

#app
  position relative

#app
.page-layout
  min-height 100%

.page-layout
  color #fff

@media (min-width $xl)
  .page-layout.Home
    background-image url('https://quanturban-web.oss-cn-shenzhen.aliyuncs.com/images/home-bg.png')
    background-repeat no-repeat
    background-position top center
    background-size 900px

@media (min-width $xxl)
  .page-layout
    padding-bottom 110px

  .page
    width $xxl
    margin-left auto
    margin-right auto

  .page-layout.Home
    background-image url('https://quanturban-web.oss-cn-shenzhen.aliyuncs.com/images/home-bg.png')
    background-repeat no-repeat
    background-position top center
    background-size 1000px
</style>
