<template>
  <div>
    <form-create ref="fc" v-model="fApi" v-bind="$attrs" :class="isSearch ? 'ant-form-inline' : ''" :option="newOption">
    </form-create>
    <slot name="customBtn"></slot>
  </div>
</template>

<script>
export default {
  name: 'WtForm',
  props: {
    isSearch: {
      type: Boolean,
      default: true
    },
    option: {
      type: Object,
      default: () => { }
    },
    isResetBtn: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    '$attrs.visible': {
      handler (val, oldval) {
        this.fApi.resetFields()
        this.fApi.setValue(this.$attrs.formData)
      }
    }
  },
  data () {
    return {
      fApi: {}
    }
  },
  computed: {
    newOption () {
      const self = this
      const defOption = {
        onSubmit: function (formData) {
          self.$emit('submit', formData)
        },
        onReload: function (formData) {
          console.log('表单已重载')
        },
        formData: self.$attrs.formData,
        submitBtn: {
          disabled: false,
          ghost: false,
          loading: false,
          type: 'primary',
          block: false,
          icon: self.isSearch ? 'search' : 'check',
          innerText: self.isSearch ? '搜索' : '提交',
          col: { span: self.isSearch ? 2 : 12, push: '6' },
          show: true
        },
        resetBtn: {
          disabled: false,
          ghost: false,
          icon: 'sync',
          loading: false,
          type: 'default',
          block: false,
          innerText: '重置',
          col: { span: self.isSearch ? 2 : 12 },
          show: self.isResetBtn
        }
      }
      return { ...defOption, ...this.option }
    }
  },
  methods: {
    changeValue (field, value) {
      this.fApi.setValue(field, value)
    },
    // 手动重新渲染指定组件
    reloadField (field) {
      this.fApi.sync(field)
    },
    getApi () {
      return this.fApi
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.ant-form-inline {
  & > .ant-row {
    margin-left: -24px !important;
    margin-right: -24px !important;
    & > .ant-col {
      padding-left: 24px !important;
      padding-right: 24px !important;
      &.ant-col-1 {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
    }
  }
}
</style>
