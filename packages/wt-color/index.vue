<template>
  <div>
    <div
      :style="style"
      @mousedown="stopMousedownPropagation"
      id="colorPickerElement"
      v-if="isEditor"
    >
      <chrome-picker :value="visible" @input="updateColor"></chrome-picker>
      <a-button type="primary" block @click="applyColor">修改</a-button>
    </div>
    <div >
      <div
        @click="openColor"
        :style="{background: value, width: '21px', height: '21px', float: 'left', marginRight: '5px'}"
      ></div>
      <div>{{ value }}</div>
    </div>
  </div>
</template>
<script>
import { Chrome } from 'vue-color'
export default {
  name: 'WtColor',
  components: { 'chrome-picker': Chrome },
  props: {
    value: {
      default: '#194d33'
    }
  },
  data () {
    return {
      isEditor: false,
      style: {
        position: 'absolute',
        padding: '15px',
        background: '#fff',
        zIndex: 999,
        border: '1px solid #000',
        left: '0px',
        top: '0px'
      }
    }
  },
  computed: {
    visible: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    stopMousedownPropagation (e) {
      e.stopPropagation()
    },

    updateColor (info) {
      this.setValue(info.hex)
    },

    applyColor () {
      this.close()
    },

    openColor () {
      this.isEditor = true
    },

    close () {
      this.isEditor = false
    },

    setValue (value) {
      this.visible = value
    },

    getValue () {
      return this.visible
    }
  }
}
</script>
