<template>
  <div class="home">
    <h1>{{ data.title }}</h1>
    <Content slot-key="content" />
  </div>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$frontmatter
    }
  }
}
</script>

<style>

</style>
