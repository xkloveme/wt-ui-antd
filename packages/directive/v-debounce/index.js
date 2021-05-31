// 防抖指令
/**
 * 函数防抖 (只执行最后一次点击)
 * 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时；典型的案例就是输入搜索：输入结束后n秒才进行搜索请求，n秒内又输入的内容，就重新计时
 * @param fn
 * @returns {Function}
 * @constructor
 */
const vDebounce = {
    /**
     * el 指令所绑定的元素，可以用来直接操作 DOM 。
     * binding 一个对象，包含绑定的值
     */
    inserted: function(el, binding) {
        let timer
        el.addEventListener('click', () => {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                binding.value()
            }, 500)
        })
    }
}
export default vDebounce
