<template>
  <header class="header">
    <a class="logo" href="/">
      <img class="logo-img" :src="$withBase('/logo-v1.png')" alt="Quanturban">
    </a>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <a href="/" class="nav-link">首页</a>
        </li>
        <li class="nav-item">
          <a href="/consulting/" class="nav-link">咨询项目</a>
        </li>
        <li class="nav-item">
          <a href="/contact/" class="nav-link">联系我们</a>
        </li>
        <li class="nav-item">
          <a href="/about/" class="nav-link">关于</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import "../styles/variables"
.header
  color #fff
  display flex
  height 80px
  align-items center
  justify-content space-between
  padding-left 80px
  padding-right 80px

.logo
  width 150px

.nav
.nav-list
  height 100%

.nav-list
  display flex
  align-items center

.nav-item + .nav-item
  margin-left 40px

.nav-link
  color #fff
  font-size 13px

@media (max-width: $sm)
  .header
    height 60px
    padding-left 20px
    padding-right 20px

  .logo
    width 30px
    overflow hidden

  .logo-img
    max-width 150px

  .nav-link
    font-size 14px
    font-weight 500

  .nav-item + .nav-item
    margin-left 20px
</style>
