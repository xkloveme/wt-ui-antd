import Vue from 'vue'
import app from './app.vue'
import Antd from 'ant-design-vue';
import router from './router'
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;
import api from './server'
import WTUI from '../packages'
Vue.use(Antd)
Vue.use(WTUI)

Vue.config.productionTip = false
Vue.prototype.$api = api
new Vue({
    render: h => h(app),
    router
}).$mount('#app')
