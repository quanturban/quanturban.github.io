<template>
  <div class="page-layout">
    <Header />
    <div class="main">
      <slot />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="stylus">
@import "../styles/variables"
html
body
#app
.global
.page-layout
  height 100%

.page-layout
  color #fff
  background linear-gradient(0deg, #01030D, #01030D), linear-gradient(359.69deg, rgba(0, 0, 0, 2e-05) 32.78%, rgba(0, 0, 0, 0.2) 96.69%)
</style>
