/*
 * @Author: xkloveme
 * @Date: 2021-06-17 18:37:26
 * @LastEditTime: 2021-07-12 17:26:36
 * @LastEditors: xkloveme
 * @Description: doc 主入口
 * @FilePath: /wt-ui-antd/docs/.vuepress/plugin-wt-ui/enhanceAppFile.js
 * @Copyright © xkloveme
 */
import WTUI from '../../../packages/index' // 需要配置scss环境
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// import formCreate from '@form-create/ant-design-vue'
import api from '../server';
export default ({ Vue }) => {
  Vue.use(Antd);
  // eslint-disable-next-line vue/match-component-file-name
  Vue.use(WTUI);
  // Vue.use(formCreate) 头大，应该用 ES module 不然出错
  Vue.mixin({
    mounted() {
        import('@form-create/ant-design-vue').then(function (m) {
            Vue.use(m.default)
        })
    }
})
  // Vue.use(formCreate)
  Vue.prototype.$api = api
}
