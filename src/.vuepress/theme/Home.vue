<template>
  <PageLayout>
    <div class="home">
      <h1 class="title">
        {{ data.title }}
      </h1>
      <Content slot-key="content" />
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
.title
  color $color
</style>

