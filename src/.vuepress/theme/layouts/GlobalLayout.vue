<template>
  <div class="global">
    <component :is="layout" />
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout
        }

        return 'Layout'
      }

      return 'NotFound'
    }
  }
}
</script>

<style lang="stylus">
@import "~normalize.css";
*
*::before
*::after
  box-sizing border-box
</style>
