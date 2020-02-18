<template>
  <PageLayout>
    <div class="main">
      <h1 class="slogan">
        {{ data.slogan }}
      </h1>
      <p>
        {{ data.text }}
      </p>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from './PageLayout';
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
  padding-left 60px
  padding-right 60px
  margin-bottom 70px

@media (max-width: $sm)
  .main
    padding-left 20px
    padding-right 20px
    margin-bottom 40px
</style>

