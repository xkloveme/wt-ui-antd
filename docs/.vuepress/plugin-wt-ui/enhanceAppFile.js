import WTUI from '../../../packages/index' // 需要配置scss环境
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
export default ({ Vue }) => {
  Vue.use(Antd);
  // eslint-disable-next-line vue/match-component-file-name
  Vue.use(WTUI)
}
