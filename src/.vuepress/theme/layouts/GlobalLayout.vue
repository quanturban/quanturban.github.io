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

<style>

</style>
