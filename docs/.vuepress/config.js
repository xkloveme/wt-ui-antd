const path = require('path')

module.exports = {
    title: '组件库文档中心',
    description: '轻量级组件库',
    markdown: {
        lineNumbers: true,
    },
    base: '/wt-ui/',
    theme: 'antdocs',
    themeConfig: {
        repo: 'https://github.com/lq782655835/yi-ui',
        docsRepo: 'https://github.com/lq782655835/yi-ui',
        docsDir: 'docs',
        docsBranch: 'master',
        nav: [
            { text: '首页', link: '/' },
            { text: '组件库', link: '/quickstart' }
        ],
        sidebar: [
            {
                title: '指导',
                collapsable: false,
                children: [
                    'quickstart.md',
                ],
            },
            {
                title: '基础组件',
                collapsable: false,
                children: [
                    'base/layout.md',
                    'base/link.md',
                    'base/button.md',
                    'base/icon.md',
                ],
            }
        ],
        backToTop: true,
        ads:{
            style: 2,
            speed: 2000,
            items:[
                {
                text: 'Ads details here',
                image:'https://cn.bing.com/th?id=OHR.LoughriggTarn_ZH-CN1404327665_1920x1080.jpg',
                link: 'https://vuepress.vuejs.org/'
                },
                {
                text: 'Ads details here',
                image:'https://cn.bing.com/th?id=OHR.MetamorphicRocks_ZH-CN9753251368_1920x1080.jpg',
                link: 'https://vuepress.vuejs.org/'
                },
                {
                text: 'Ads details here',
                image:'https://cn.bing.com/th?id=OHR.KeichitsuCrocuse_ZH-CN1061292366_1920x1080.jpg',
                link: 'https://vuepress.vuejs.org/'
                }
            ]
        },
    },
    plugins: [
        'leo-demo-block',
        require('./plugin-wt-ui')
    ],
    chainWebpack: (config, isServer) => {
        function addStyleResource(rule) {
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
