<template>
  <header class="header">
    <router-link class="logo" to="/">
      <img class="logo-img" :src="$withBase(config.logo)" alt="Quanturban">
    </router-link>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/" class="nav-link" :class="{active: isActive('/')}">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/consulting/" class="nav-link" :class="{active: isActive('/consulting/')}">咨询项目</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact/" class="nav-link" :class="{active: isActive('/contact/')}">联系我们</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link to="/about/" class="nav-link" :class="{active: isActive('/about/')}">关于</router-link>
        </li> -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    config () {
      return this.$themeConfig
    }
  },
  methods: {
    isActive (url) {
      return this.$route.path === url
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../styles/variables"
.header
  display flex
  align-items center
  justify-content space-between
  color #fff
  height 60px
  padding-left 20px
  padding-right 20px

.logo
  flex 0 1 auto
  max-width 150px

.nav
  padding-left 10px
  flex 1 0 auto

.nav
.nav-list
  height 100%

.nav-link
  color #fff
  font-size 14px
  font-weight 500
  letter-spacing 1.5px
  transition color .3s

.nav-link.active
  color #F3DB60

.nav-list
  display flex
  align-items center
  justify-content flex-end

.nav-item + .nav-item
  margin-left 20px
@media (min-width: $md)
  .header
    height 80px
    padding-left 80px
    padding-right 80px

  .nav-item + .nav-item
    margin-left 40px

  .nav-link
    font-size 13px
</style>
