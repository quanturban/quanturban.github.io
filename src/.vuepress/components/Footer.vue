<template>
  <footer class="footer">
    <div class="block">
      <div class="left">
        <Logo />
        <div class="name">量城科技</div>
      </div>
      <div class="right">
        <a class="icon" href="https://github.com/quanturban" target="_blank">
          <img :src="$withBase('icon-github.png')" alt="github">
        </a>
        <div class="icon">
          <img :src="$withBase('icon-wechat.png')" alt="github">
        </div>
        <a class="icon" href="ttps://zhuanlan.zhihu.com/datahammer" target="_blank">
          <img :src="$withBase('icon-zhihu.png')" alt="zhihu">
        </a>
        <a class="icon" href="https://weibo.com/quanturban" target="_blank">
          <img :src="$withBase('icon-weibo.png')" alt="weibo">
        </a>
      </div>
    </div>
    <div class="block copyright">
      {{ config.copyright }}
    </div>
  </footer>
</template>

<script>
import Logo from '../public/logo.svg';
export default {
  components: {
    Logo
  },
  computed: {
    data () {
      return this.$frontmatter
    },
    config () {
      return this.$themeConfig
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../styles/variables"

.footer
  color #fff
  opacity 0.75
  border-top 1px solid rgba(255, 255, 255, 0.2)
  height 110px
  padding 30px 20px 20px

.block
  display flex

.left
  display flex
  align-items center

.right
  flex: auto
  border-left 1px solid rgba(255, 255, 255, 0.3)
  padding-left 30px
  margin-left 30px
  display flex
  align-items center
  justify-content space-between

.name
  margin-left: 15px
  font-size 15px
  font-weight 500

.icon
  width 25px

.block + .block
  margin-top 20px

.copyright
  font-size 11px
  justify-content center

@media (min-width $md)
  .footer
    padding-left 60px
    padding-right 60px
    height 89px
    display flex
    align-items center
    justify-content space-between

  .icon + .icon
    margin-left 30px

  .block + .block
    margin-top 0

</style>
