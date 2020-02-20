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
body
  background-color #01030D

.page-layout
  color #fff

@media (min-width $xl)
  .page-layout.Home
    background-image url($baseUrl + 'home-bg.png')
    background-repeat no-repeat
    background-position top center
    background-size 900px

@media (min-width $xxl)
  .page
    width $xxl
    margin-left auto
    margin-right auto

  .page-layout.Home
    background-image url($baseUrl + 'home-bg.png')
    background-repeat no-repeat
    background-position top center
    background-size 1000px
</style>
