<template>
  <div class="main">
    <div class="form-wrap">
      <h1 class="title">{{ data.title }}</h1>
      <form action="/" class="form">
        <div class="form-row">
          <label for="type-select" class="label">类型</label>
          <VueSelect
            :searchable="false"
            :clearable="false"
            class="form-select"
            name="type"
            placeholder="请选择类型"
            :options="data.formTypes"
          />
        </div>
        <div class="form-row">
          <label for="name" class="label">姓名</label>
          <input type="text" name="name" class="input" required>
        </div>
        <div class="form-row">
          <label for="contact" class="label">联系方式</label>
          <input type="text" name="contact" class="input" required>
        </div>
        <div class="form-row">
          <label for="content" class="label">内容</label>
          <textarea class="textarea" name="content" required />
        </div>
        <footer class="form-footer">
          <button type="button" class="submit-btn">提交</button>
        </footer>
      </form>
    </div>
    <div class="contact">
      <h2 class="subtitle">{{ data.subtitle }}</h2>
      <ul class="contact-list">
        <li v-for="(item, index) in data.contact" :key="index" class="contact-item">
          <div class="icon">
            <IconPhone v-if="item.type === 'tel'" />
            <IconEmail v-if="item.type === 'email'" />
            <IconLocation v-if="item.type === 'location'" />
          </div>
          <div class="item-content">
            <h3 class="contact-name">{{ item.name }}</h3>
            <a v-if="item.type === 'tel'" :href="`tel:${item.value}`" class="contact-link">{{ item.value }}</a>
            <a v-else-if="item.type === 'email'" :href="`mailto:${item.value}`" class="contact-link">{{ item.value }}</a>
            <a v-else :href="item.href" target="_blank" class="contact-link">{{ item.value }}</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VueSelect from 'vue-select'
import IconPhone from '../public/icon-phone.svg'
import IconEmail from '../public/icon-email.svg'
import IconLocation from '../public/icon-location.svg'
export default {
  components: {
    VueSelect,
    IconPhone,
    IconEmail,
    IconLocation
  },
  computed: {
    data () {
      return this.$frontmatter
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~vue-select/dist/vue-select.css"
@import "../styles/variables"

.form-wrap
.contact
  padding 40px 20px

.contact
  background rgba(255, 255, 255, 0.05)

.title
  display none

.label
  display block
  font-size 15px
  margin-bottom 15px

.form-row + .form-row
  margin-top 25px

.input
.textarea
  font-size 15px
  letter-spacing 1px
  background rgba(255, 255, 255, 0.1)
  border-radius: 4px
  color #fff
  width 100%
  padding 16px 20px
  outline none
  border none

.input::placeholder
.textarea::placeholder
  color #999

.textarea
  min-height 70px

.form-footer
  margin-top 30px

.submit-btn
  cursor pointer
  display block
  width 100%
  color #00020C
  font-size 15px
  font-weight 600
  background #73D98C
  border-radius 4px
  height 50px
  border none

.form-select
  background rgba(255, 255, 255, 0.1)
  border-radius: 4px

.form-select >>> .vs__dropdown-toggle
  border none

.form-select >>> .vs__search
  color #fff
  height 42px
  border none

.form-select >>> .vs__search::placeholder
  color #999

.form-select >>> .vs__actions
  padding-right 10px

.form-select >>> .vs__open-indicator
  fill #fff

.form-select >>> .vs__selected
  color #fff
  font-size 15px
  padding-left 18px

.form-select >>> .vs__dropdown-option
  padding 8px

.subtitle
  color #95A2B3
  font-size 17px
  font-weight 300
  margin-bottom 40px

.contact-item
  display flex
  justify-content space-between

.contact-item + .contact-item
  margin-top 30px

.contact-name
  color rgba(255, 255, 255, 0.5)
  font-size 15px
  font-weight normal
  margin-bottom 10px

.contact-link
  color #fff
  font-size 17px
  letter-spacing 1.2px
  font-weight 500

.item-content
  flex 1
  line-height 27px
  margin-left 6%

@media (min-width $lg)
  .main
    display flex
    align-items stretch
    justify-content space-between

  .form-wrap
    flex 1
    padding-left 80px

  .form
    width 360px

  .contact
    flex 0 1 600px
    padding-top 140px

  .contact-item + .contact-item
    margin-top 40px

  .title
    display block
    font-size 34px
    font-weight 600
    letter-spacing 1px
    margin-bottom 40px
</style>
