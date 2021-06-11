import Vue from 'vue'
import ConfirmConfig from './wt-psd.vue'
let currentMsg = null
let instance = null

const ConfirmConstructor = Vue.extend(ConfirmConfig)

function WtRead(
    option = {
        title: '提醒',
        message: ``
    }
) {
    instance = new ConfirmConstructor({
        el: document.createElement('div')
    })
    if (typeof option === 'string') {
        instance.message = option
    } else {
        instance.title = option.title
        instance.message = option.message
        instance.maxWidth = option.maxWidth
    }

    instance.$watch('display', function(val) {
        // 再次关闭时移除组件
        if (!val) {
            instance.$destroy(true)
            instance.$el.parentNode.removeChild(instance.$el)
            instance = null
            currentMsg = null
        }
    })
    instance.callBack = defaultCallBack
    document.body.appendChild(instance.$el)
    if (String(localStorage.getItem('DataV-PSD-Hide')) === 'true') {
        instance.display = false
        var p = new Promise(function(resolve, reject) {
            resolve()
        })
        return p
    } else {
        instance.display = true
        Vue.nextTick(() => {
            instance.visible = true
        })
    }
    return new Promise((resolve, reject) => {
        currentMsg = {
            resolve,
            reject
        }
    })
}

function defaultCallBack(action, key) {
    instance.display = false
    if (action === 'confirm') {
        currentMsg.resolve(key)
    } else {
        currentMsg.reject(key)
    }
}

export default WtRead
