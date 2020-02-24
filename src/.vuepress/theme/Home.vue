<template>
  <div class="main">
    <section class="hero">
      <h1 class="slogan">
        {{ data.slogan }}
      </h1>
      <p class="text">
        {{ data.text }}
      </p>
    </section>
    <div class="products">
      <div v-for="(item, index) in data.products" :key="index" class="card">
        <h2 class="title" :style="{color: colors[index], borderColor: colors[index] }">{{ item.title }}</h2>
        <div class="img-wrap" :style="{backgroundColor: colors[index]}">
          <img :src="$withBase(item.img)" :alt="item.name">
          <div v-if="item.qr" v-show="showImages.indexOf(index) !== -1" class="hidden-wrap">
            <img class="hidden-img" :src="$withBase(item.qr)" :alt="item.name">
            <div v-if="item.qrText" class="qr-text">{{ item.qrText }}</div>
          </div>
        </div>
        <div class="footer">
          <div class="left">
            <h3 class="name">{{ item.name }}</h3>
            <p class="desc">{{ item.desc }}</p>
          </div>
          <div class="right">
            <a v-if="item.href" :href="item.href" target="_blank" class="link">查看 <IconArrow /></a>
            <span v-else-if="item.qr" class="link" @click="showHiddenImage(index)">
              查看 <IconArrow />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconArrow from '../public/icon-arrow-right.svg'

export default {
  name: 'Home',
  components: {
    IconArrow
  },
  data () {
    return {
      showImages: []
    }
  },
  computed: {
    data () {
      return this.$frontmatter
    },
    colors () {
      return ['#F3DB60', '#D87058', '#65D093', '#6E91EA']
    }
  },
  methods: {
    showHiddenImage (index) {
      this.showImages.push(index)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../styles/variables"
.main
  padding-left 20px
  padding-right 20px
  margin-bottom 40px

.hero
  margin-top 80px

.slogan
  font-size 34px
  font-weight 600
  line-height 48px
  letter-spacing 1px
  margin-bottom 18px
  margin-top 0

.text
  color #95A2B3
  font-size 15px
  line-height 23px

.products
  margin-top 60px
  padding-top 310px
  background url($baseUrl + 'home-bg-mobile.png') no-repeat top center
  background-size 168px

.card
  background-color #fff
  position relative
  height 310px
  width 335px
  margin 0 auto
  box-shadow 0px 12px 20px rgba(0, 0, 0, 0.5), 0px -4px 12px rgba(0, 0, 0, 0.5)

.card + .card
  margin-top 85px

.title
  position absolute
  top -43px
  font-size 22px
  font-weight 600
  border none
  word-break keep-all

.img-wrap
  min-height 200px
  overflow hidden
  position relative

.img-wrap img
  display block

.hidden-wrap
  position absolute
  left 0
  top 0
  width 100%
  height 100%
  display flex
  align-items center
  justify-content center
  text-align center
  background #fff

.qr-text
  position absolute
  bottom 10px
  left 50%
  transform translateX(-50%)
  color #333
  font-size 12px

.footer
  display flex
  align-items center
  justify-content space-between
  padding 12px 20px
  box-shadow inset 0px 1px 0px rgba(0, 0, 0, 0.12)

.name
  color #333
  letter-spacing 0.75px
  font-size 18px
  line-height 25px
  font-weight 600

.desc
  color #666
  line-height 20px

.link
  position relative
  color #5384EC
  letter-spacing 0.6px
  font-size 15px
  font-weight 500
  display flex
  align-items center
  transition all .3s
  cursor pointer

.link:hover
.link:hover svg
  color #3576ff
  fill #3576ff

.hidden-img
  width 180px

@media (min-width $md)
  .hero
    padding-left 60px

@media (min-width $xl)
  .main
    padding-left 60px
    padding-right 60px
    margin-bottom 70px

  .hero
    padding-left 0

  .slogan
  .text
    padding-left 40px

  .text
    width 420px

  .products
    background none
    padding-top 248px
    display flex
    align-items center
    justify-content space-between

  .card
    height auto
    width 280px

  .card + .card
    margin-top 0

  .title
    background #000000
    top -80px
    left 50%
    transform translateX(-50%)
    border 5px solid #F3DB60
    border-radius 29px
    padding 13px 20px
    letter-spacing 3px

  .hidden-img
    width 160px

@media (min-width $xxl)
  .products
    padding-top 290px

</style>

