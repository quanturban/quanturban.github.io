<template>
  <div class="main">
    <div class="form-wrap">
      <h1 class="title">{{ data.title }}</h1>
      <form v-if="!submitted" action="/" class="form">
        <div class="form-row">
          <label for="type-select" class="label">类型</label>
          <VueSelect
            v-model="formData['type']"
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
          <input v-model="formData['name']" type="text" name="name" class="input" required>
        </div>
        <div class="form-row">
          <label for="contact" class="label">联系方式</label>
          <input v-model="formData['contact']" placeholder="请填写您的手机号或邮箱" type="text" name="contact" class="input" required>
        </div>
        <div class="form-row">
          <label for="content" class="label">内容</label>
          <textarea v-model="formData['content']" class="textarea" name="content" required />
        </div>
        <footer class="form-footer">
          <button type="button" class="btn submit-btn" @click="submit">提交</button>
        </footer>
      </form>
      <div v-else class="form-submitted">
        <h2 class="submitted-title"><IconCheck /> 已提交</h2>
        <p class="submitted-text">感谢您的提交，我们收到后会及时处理。如有其他问题，可返回继续提交。</p>
        <button type="button" class="btn back-btn" @click="back">返回</button>
      </div>
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
    <div class="message" :class="{fade: isMessageShow}">{{ message }}</div>
  </div>
</template>

<script>
import VueSelect from 'vue-select'
import IconPhone from '../public/icon-phone.svg'
import IconEmail from '../public/icon-email.svg'
import IconLocation from '../public/icon-location.svg'
import IconCheck from '../public/icon-check.svg'
export default {
  components: {
    VueSelect,
    IconPhone,
    IconEmail,
    IconLocation,
    IconCheck
  },
  data () {
    return {
      submitted: false,
      formData: {},
      storageObject: null,
      message: '出错了',
      isMessageShow: false
    }
  },
  computed: {
    data () {
      return this.$frontmatter
    },
    config () {
      return this.$themeConfig
    }
  },
  watch: {
    submitted (val) {
      if (val) {
        this.formData = {}
      }
    }
  },
  mounted () {
    if (!window.isAvInitialized) {
      window.AV.init(this.config.LC.appId, this.config.LC.appKey)
      window.isAvInitialized = true
    }
    const StorageObject = window.AV.Object.extend(this.config.LC.className)
    this.storageObject = new StorageObject()
  },
  methods: {
    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    submit () {
      const { formData, storageObject } = this
      if (formData.type && formData.name && formData.contact && formData.content) {
        storageObject.set('type', formData.type)
        storageObject.set('name', formData.name)
        storageObject.set('contact', formData.contact)
        storageObject.set('content', formData.content)

        storageObject.save().then(() => {
          this.submitted = true
          this.scrollToTop()
          const StorageObject = window.AV.Object.extend(this.config.LC.className)
          this.storageObject = new StorageObject()
        }).catch(() => {
          this.showMessage('出错了，请刷新后重试。')
        })
      } else {
        this.showMessage('请将信息填写完整。')
      }
    },
    back () {
      this.submitted = false
      this.scrollToTop()
    },
    showMessage (message) {
      this.isMessageShow = true
      this.message = message

      setTimeout(() => {
        this.isMessageShow = false
      }, 2000)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~vue-select/dist/vue-select.css"
@import "../styles/variables"

$color1 = #73D98C
$color2 = #DDEEFC

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
  padding 16px 20px 15px 20px
  outline none
  border 1px solid transparent
  transition all .3s

.input::placeholder
.textarea::placeholder
  color #999
  font-size 14px

.input:focus
.textarea:focus
  border-color $color1

.textarea
  min-height 70px

.form-footer
  margin-top 30px

.btn
  cursor pointer
  display block
  width 100%
  color #00020C
  font-size 15px
  font-weight 600
  border-radius 4px
  height 50px
  border none
  transition all .3s

.submit-btn
  background $color1

.submit-btn:hover
  background linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), $color1

.form-select
  background rgba(255, 255, 255, 0.1)
  border-radius: 4px
  border 1px solid transparent
  transition all .3s

.form-select.vs--open
  border 1px solid $color1

.form-select >>> .vs__dropdown-toggle
  border none

.form-select >>> .vs__search
  color #fff
  height 40px
  border none
  padding-left 20px

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

.form-select >>> .vs__dropdown-menu
  padding 10px 0
  top 100%
  left -1px
  width calc(100% + 2px)
  background #01030d
  border-radius: 4px
  border 1px solid $color1

.form-select >>> .vs__dropdown-option
  font-size 14px
  color #fff
  padding 10px 20px

.form-select.vs--open >>> .vs__selected
  position static

.subtitle
  color #95A2B3
  font-size 17px
  font-weight 400
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

.submitted-title
  font-size 19px
  color $color1
  margin-bottom 35px
  display flex
  align-items center

.submitted-title svg
  margin-right 12px

.submitted-text
  font-size 14px
  line-height 24px
  letter-spacing 1px

.back-btn
  background $color2
  margin-top 60px

.back-btn:hover
  background linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), $color2

.message
  position fixed
  padding 12px 18px
  z-index 9
  top -40px
  left 50%
  transform translateX(-50%)
  background-color #fef0f0
  border 1px solid #fef0f0
  border-radius 4px
  color #f56c6c
  transition top .3s
  word-break keep-all

.message.fade
  top 20px

@media (min-width $lg)
  .main
    display flex
    align-items stretch
    justify-content space-between

  .form-wrap
    flex 1
    padding-left 80px

  .form
  .form-submitted
    width 360px

  .form-submitted
    height calc(100% - 60px)
    padding-top 100px

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
