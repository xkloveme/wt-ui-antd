// 防抖指令
const vThrottle = {
  /**
* el 指令所绑定的元素，可以用来直接操作 DOM 。
* binding 一个对象，包含绑定的值
*/
  inserted: function (el, binding) {
    const { callback, time } = binding.value
    el.callback = callback
    el.time = time
    el.timeCall = null
    el.addEventListener('click', () => {
      clearTimeout(el.timeCall)
      el.timeCall = setTimeout(() => {
        el.callback()
      }, el.time || 500)
    })
  },
  // 所在组件的 VNode 更新时调用
  update: function (el, binding) {
    const { callback, time } = binding.value
    el.callback = callback
    el.time = time
  },
}
export default vThrottle
