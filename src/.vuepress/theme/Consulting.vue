<template>
  <div class="main">
    <div class="card-list">
      <div v-for="(card, index) in data.cards" :key="index" class="card">
        <header class="header">
          <div class="bg">
            <img class="bg-img" :src="card.img">
          </div>
          <div class="sub">
            <p class="type">{{ card.type }}</p>
            <h2 class="title">{{ card.title }}</h2>
          </div>
        </header>
        <p class="desc">{{ card.desc }}</p>
        <p class="feedback">
          <span class="icon-star">
            <img :src="$withBase('/stars.png')" alt="stars">
          </span>
          {{ card.highlight }}
        </p>
        <footer class="footer">
          <a v-if="card.href" :href="card.href" target="_blank" class="btn">
            <div class="btn-text">查看详情</div>
            <IconArrow class="btn-icon" />
          </a>
          <router-link v-else class="btn-sec" to="/contact/">联系我们</router-link>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import IconArrow from '../public/icon-arrow-right-thin.svg'
export default {
  components: {
    IconArrow
  },
  computed: {
    data () {
      return this.$frontmatter
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../styles/variables"
.main
  padding-left 15px
  padding-right 15px
  margin-bottom 30px
  margin-top 25px

.card
  position relative
  min-height 510px
  box-shadow 0px 4px 8px rgba(0, 0, 0, 0.1)
  background #191919
  border-radius 8px
  padding-bottom 70px

.card + .card
  margin-top 30px

.header
  position relative

.bg
  text-align center
  min-height 200px

.bg-img
  border-top-left-radius 8px
  border-top-right-radius 8px

.sub
  width 100%
  padding: 20px
  position absolute
  bottom 0
  color #fff
  background linear-gradient(180deg, rgba(0, 0, 0, 0.198672) 0%, rgba(0, 0, 0, 0.5) 100%)

.type
  font-size 12px
  margin-bottom 10px

.title
  font-size 24px

.desc
  line-height 24px
  font-size 14px
  color rgba(235, 235, 245, 0.6)
  padding 20px

.feedback
  font-size 14px
  line-height 24px
  font-weight 500
  padding-left 20px
  padding-right 20px
  display flex

.icon-star
  margin-right 20px
  font-size 20px
  flex 1 0 20px

.footer
  padding-left 20px
  padding-right 20px
  width 100%
  position absolute
  bottom 20px

.btn
.btn-sec
  position relative
  color #1A1B24
  text-align center
  font-size 14px
  font-weight 600
  background #73D98C
  border-radius 20px
  padding 10px 15px
  border none
  outline none
  cursor pointer
  display inline-block
  transition all .3s

.btn:hover
  background linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), #73D98C
  padding-right 30px

.btn-icon
  position absolute
  right 8px
  top 50%
  transform translateY(-50%)
  opacity 0

.btn:hover .btn-icon
  opacity 1

.btn-sec
  background #DDEEFC

.btn-sec:hover
  background #e7f4fe

@media (min-width $md)
  .main
    margin-bottom 40px
    margin-top 50px
    padding-left 60px
    padding-right 60px

  .card
    flex 0 1 420px
    min-height 630px
    margin-bottom 40px
    margin-right 12px

  .card + .card
    margin-top 0

  .footer
    bottom 30px

  .card-list
    display flex
    align-items center
    justify-content center
    flex-wrap wrap

  .sub
    position static
    background none
    padding-bottom 0

  .type
    color #5486EE

  .feedback
    margin-top 10px

@media (min-width $lg)
  .card
    margin-right 0

  .card:nth-child(odd)
    margin-right 40px

@media (min-width $xl)
  .card-list
    justify-content space-between

  .card:nth-child(odd)
    margin-right 0
</style>
