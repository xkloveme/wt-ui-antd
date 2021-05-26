<template>
  <div class="confirm-wrapper" v-if="display">
    <div class="modal" @click="handleAction('confirm')" @touchmove.prevent></div>
    <transition name="confirm-bounce" @after-leave="afterLeave">
      <div class="confirm-box" v-show="visible">
        <div class="read-table-title" @click="hide">
          {{ title }}
          <div class="close" @click="afterLeave"><a-icon type="close" /></div>
        </div>
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'WtRead',
  props: {
    title: {
      default: '',
      type: String
    },
    value: {
      default: true,
      type: Boolean
    },
    callBack: Function
  },
  data () {
    return {
      // display: false,
      visible: false,
      disabled: true
    }
  },
  mounted () { console.log(888) },
  computed: {
    display: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    afterLeave () {
      this.display = false
    },
    handleAction (action) {
      this.callBack && this.callBack(action)
    },
    show () {
      this.display = true
      this.$nextTick(() => {
        this.visible = true
      })
    },
    hide () {
      this.display = false
      this.$nextTick(() => {
        this.visible = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.confirm-wrapper {
  // display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  // background-color: rgba(10, 49, 144, 0.2);
}
.confirm-box {
  border-radius: 4px;
  // background-color: #0a3190;
  min-height: 9.8rem;
  .latter-view {
    width: 1090px;
    height: 490px;
    position: relative;
    .close-bar {
      position: absolute;
      top: 0;
      right: 140px;
      z-index: 99;
      cursor: pointer;
      padding: 14px;
    }
    .latter-content-wrap {
      width: 520px;
      float: right;
      margin-right: 140px;
      padding: 65px 70px;
    }
    .title {
      font-size: 24px;
      color: #e02020;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid #e7e9f4;
      text-align: center;
      font-weight: 600;
    }
    .content {
      font-size: 16px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.85);
      line-height: 22px;
    }
    .ant-btn-sure {
      width: 181px;
      height: 38px;
      position: absolute;
      bottom: 30px;
      right: 200px;
      color: #fff;
      background: #4c67ff;
      border-color: #4c67ff;
    }
    .ant-btn-grey {
      color: #fff;
      background: #b0b0b0;
      border-color: #b0b0b0;
    }
  }
}
// 添加动画效果
.confirm-bounce-enter-active,
.confirm-bounce-leave-active {
  transition: all 0.4s ease;
}
.confirm-bounce-enter {
  opacity: 0;
  transform: scale(0.5);
}
.confirm-bounce-leave-active {
  opacity: 0;
  transform: scale(0.4);
}
</style>
