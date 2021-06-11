import Vue from 'vue'
import ConfirmConfig from './wt-preview.vue'

let instance = null

const ConfirmConstructor = Vue.extend(ConfirmConfig)

// function WtPreview (arr) {
//   console.log(arr,'arr')
//   instance = new ConfirmConstructor({
//     el: document.createElement('div')
//   })
//   console.log(instance)

//   debugger
//   instance.$watch('visible', function (nowData) {
//     // 再次关闭时移除组件
//     debugger
//     if (!nowData) {
//       // instance.$destroy(true)
//       // instance.$el.parentNode.removeChild(instance.$el)
//       // instance = null
//       // currentMsg = null
//     }
//   })
//   document.body.appendChild(instance.$el)
//   return new Promise((resolve, reject) => {
//     // currentMsg = {
//     //   resolve,
//     //   reject
//     // }
//   })

// }

export default ConfirmConfig
