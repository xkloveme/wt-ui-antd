# wt-ui-antd

基于vue2.0
和antd的UI组件库基于vue2.0和antd的UI组件库

<h1 align="center">
<h1>WT-UI-ANTD</h1>
  <a><img src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg" alt="Build Status"></a>
  <a><img src="https://img.shields.io/badge/language-vue-42b983.svg" alt="Language"></a>
  <a href="https://www.npmjs.com/package/@wt/wt-ui-antd"><img src="https://img.shields.io/badge/npmjs-WTUIAntd-red.svg" alt="npmjs"></a>
  <br>

    <a href="https://996.icu"><img src="https://img.shields.io/badge/link-996.icu-red.svg" alt="996.icu"></a>

  <a href="https://github.com/xkloveme/wt-ui-antd"><img src="https://img.shields.io/badge/WTUIAntd-doc-blue.svg" alt="docs"></a>
   <a href="https://github.com/xkloveme/wt-ui-antd"><img src="https://img.shields.io/badge/github-lib-darkslategrey.svg" alt="github"></a>

<a href="https://www.jixiaokang.com/wt-ui-antd/"><img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="github"></a>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.jenkins.io" target="_blank"> <img src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" alt="jenkins" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> <a href="https://vuejs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40"/> </a> <a href="https://vuepress.vuejs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/AliasIO/wappalyzer/master/src/drivers/webextension/images/icons/VuePress.svg" alt="vuepress" width="40" height="40"/> </a> </p>

</h1>

*   _简洁至上_
    > 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。

*   _Vue 驱动_
    > 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。

*   _高性能_
    > VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。

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

您也可以通过 unpkg.com/@watone/wt-ui-antd 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

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

## 贡献者 ✨

<!-- ALL-CONTRIBUTORS-LIST: START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.jixiaokang.com/"><img src="https://avatars.githubusercontent.com/u/29595042?v=4" width="100px;" style="borderRadius:100%" alt=""/><br /><sub><b>superDragon</b></sub></a></td>
    <td align="center"><a href="https://github.com/strawHatYz"><img src="https://avatars.githubusercontent.com/u/43464132?v=4" width="100px;" style="borderRadius:100%" alt=""/><br /><sub><b>strawHatYz</b></sub></a></td>
    <td align="center"><a href="https://github.com/webdevBeginner"><img src="https://avatars.githubusercontent.com/u/37663902?v=4" width="100px;" style="borderRadius:100%" alt=""/><br /><sub><b>webdevBeginner</b></sub></a></td>
    <td align="center"><a href="https://github.com/nanyou0316"><img src="https://avatars.githubusercontent.com/u/55910517?v=4" width="100px;" style="borderRadius:100%" alt=""/><br /><sub><b>nanyou0316</b></sub></a></td>
    <td align="center"><a href="https://github.com/jingyongx"><img src="https://avatars.githubusercontent.com/u/74340084?v=4" width="100px;" style="borderRadius:100%" alt=""/><br /><sub><b>jingyongx</b></sub></a></td>
    <td align="center"><a href="https://github.com/autumn-ohh"><img src="https://avatars.githubusercontent.com/u/35619392?v=4" width="100px;" style="borderRadius:100%" alt=""/><br /><sub><b>autumn-ohh</b></sub></a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST: END -->

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, xkloveme
