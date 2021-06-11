const path = require('path')

module.exports = {
  title: 'WT-UI-ANTD',
  description: 'vue2.0 antd组件库',
  markdown: {
    lineNumbers: true,
  },
  base: '/wt-ui-antd/',
  theme: 'antdocs',
  themeConfig: {
    repo: 'https://github.com/wt-front-end/wt-ui-antd',
    docsRepo: 'https://github.com/wt-front-end/wt-ui-antd',
    docsDir: 'docs',
    docsBranch: 'master',
    nav: [
      { text: '首页', link: '/' },
      { text: '组件库', link: '/quickstart' }
    ],
    sidebar: [
      {
        title: '起步',
        collapsable: false,
        children: [
          'quickstart.md',
        ],
      },
      {
        title: 'WT组件',
        collapsable: false,
        children: [
          'base/button.md',
          'base/echarts.md',
          'base/preview.md',
          'base/table.md',
          // 'base/link.md',
          // 'base/icon.md',
        ],
      }
    ],
    backToTop: true,
    ads: {
      style: 2,
      speed: 2000,
      items: [
        {
          text: 'Ads details here',
          image: 'https://cn.bing.com/th?id=OHR.LoughriggTarn_ZH-CN1404327665_1920x1080.jpg',
          link: 'https://github.com/xkloveme/wt-ui-antd'
        }
      ]
    },
  },
  plugins: [
    'leo-demo-block',
    require('./plugin-wt-ui')
  ],
  chainWebpack: (config, isServer) => {
    function addStyleResource (rule) {
      rule
        .use("style-resource")
        .loader("style-resources-loader")
        .options({
          // patterns: [
          //   path.resolve(__dirname, "../../packages/assets/css/vars.scss"),
          // ]
        });
    }
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("scss").oneOf(type))
    );
  }
}
