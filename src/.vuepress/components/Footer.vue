<template>
  <footer class="footer"></footer>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import "../styles/variables"

.footer
  padding-left 60px
  padding-right 60px
  height 89px
  border-top 1px solid rgba(255, 255, 255, 0.2)

@media (max-width $sm)
  .footer
    padding-left 20px
    padding-right 20px
    height 110px
</style>
