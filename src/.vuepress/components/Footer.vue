<template>
  <footer class="footer">
    <div class="block info">
      <div class="left">
        <Logo />
        <div class="name">量城科技</div>
      </div>
      <div class="right">
        <a
          v-for="item in config.socialMedias"
          :key="item.name"
          :href="item.href"
          class="icon"
          target="_blank"
        >
          <img :src="$withBase(item.icon)" :alt="item.name" class="icon-img">
          <img v-if="item.img" :src="$withBase(item.img)" :alt="item.name" class="hidden-img">
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
  width 100%
  color #fff
  border-top 1px solid rgba(255, 255, 255, 0.2)
  height 110px
  padding-left: 20px
  padding-right: 20px

.block
  display flex

.info
  flex 1 0 auto

.left
  transition all .3s
  opacity 0.75
  display flex
  align-items center

.left:hover
  opacity 1

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
  cursor default

.icon
  cursor pointer
  position relative
  width 25px

.icon-img
  transition all .3s
  opacity 0.75

.icon:hover .hidden-img
  display block

.icon:hover .icon-img
  opacity 1

.block + .block
  margin-top 20px

.copyright
  opacity 0.75
  font-size 11px
  justify-content center
  line-height 1.6

.hidden-img
  box-shadow 0px 12px 20px rgba(0, 0, 0, 0.5), 0px -4px 12px rgba(0, 0, 0, 0.5)
  position absolute
  bottom 30px
  left 50%
  transform translateX(-50%)
  max-width initial
  width 160px
  display none

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

  .right
    flex none

  .copyright
    padding-left 20px

@media (min-width $xxl)
  .footer
    position absolute
    bottom 0
    left 0
</style>
