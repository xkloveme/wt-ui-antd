# 快速开始

基于vue2.0和antd的UI组件库

<iframe src="https://codesandbox.io/embed/small-dust-9c02r?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="small-dust-9c02r"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## 设计初衷

```bash
为 便捷 vue 开发 而生

基于 Vue，拓展的 vue-antd 库，

让开发更简单，Easy Code, Colorful Life，

开箱即用，你需要做的只是安装它，然后写吧。
```

## 安装

```bash
# install @watone/wt-ui-antd
 npm install @watone/wt-ui-antd --save
# or
 yarn add @watone/wt-ui-antd --save
```

您也可以通过 unpkg.com/vue-v-xxx 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/@watone/wt-ui-antd/dist/WTUI.css" />
<!-- 引入组件库 -->
<script src="https://unpkg.com/@watone/wt-ui-antd"></script>
```

## 使用

```js
import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import WTUI from "@watone/wt-ui-antd";
import "ant-design-vue/dist/antd.css";
import "@watone/wt-ui-antd/dist/WTUI.css";
Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(WTUI);
new Vue({
    render: (h) => h(App)
}).$mount("#app");
```

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>wt-antd</title>
    <link rel="stylesheet" href="https://unpkg.com/ant-design-vue/dist/antd.css" />
    <link rel="stylesheet" href="https://unpkg.com/@watone/wt-ui-antd/dist/WTUI.css" />
</head>

<body>
    <div id="app">
        <h1 title="Welcome">欢迎使用 {{ value }}</h1>
        <wt-button>Click me!</wt-button>
    </div>
</body>
<!-- import Vue before -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/@watone/ant-design-vue"></script>
<!-- import JavaScript -->
<script src="https://unpkg.com/@watone/wt-ui-antd"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            value: 'wt-antd'
        }
    })
</script>

</html>
```
