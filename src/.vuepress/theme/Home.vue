<template>
  <PageLayout>
    <div class="main">
      <h1 class="slogan">
        {{ data.slogan }}
      </h1>
      <p class="text">
        {{ data.text }}
      </p>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from './PageLayout'
export default {
  components: {
    PageLayout
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
  padding-left 20px
  padding-right 20px
  margin-bottom 40px

.slogan
  font-size 34px
  font-weight 600
  line-height 48px
  letter-spacing 1px
  margin-bottom 18px
  margin-top 100px

.text
  color #95A2B3
  line-height 23px

@media (min-width: $md)
  .main
    padding-left 60px
    padding-right 60px
    margin-bottom 70px

  .slogan
  .text
    padding-left 40px

  .text
    width 420px

</style>

