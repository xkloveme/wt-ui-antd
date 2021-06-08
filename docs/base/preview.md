# Preview

## 基本使用
preview打开一个新的全屏组件

::: demo

```vue

<template>
    <div @click="onClickCheck">点击打开preview</div>
    <div>
       <wt-preview ref="previewRef" ></wt-preview>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        images: [
          {
            label: 'bing每日一图',
            url:'https://api.xygeng.cn/Bing/'
          },
        ]
      }
    },
    methods: {
      onClickCheck() {
        this.$refs.previewRef.handleOpen(this.images)
      }
    }
  };
</script>
```
:::


## 自动切换
可以自动切换图片，增加autoplay属性

::: demo
```vue

<template>
    <div @click="onClickCheck">点击打开preview</div>
    <div>
       <wt-preview ref="previewRef" :autoplay="true"></wt-preview>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        images: [
          {   
              label: 'bing每日一图',
              url:'https://api.xygeng.cn/Bing/'
          },
          {
              label: '20210605',
              url:'https://www.bing.com/th?id=OHR.ArromanchesLesBains_ZH-CN0631947158_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
          },
          {
              label: '20210604',
              url:'https://www.bing.com/th?id=OHR.ToucanRainforest_ZH-CN0522556036_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
          },
          {
              label: '20210603',
              url:'https://www.bing.com/th?id=OHR.Pilat_ZH-CN0091553547_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
          },
          {
              label: '20210602',
              url:'https://www.bing.com/th?id=OHR.SocaCycles_ZH-CN3583247274_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
          },
          {
              label: '20210601',
              url:'https://www.bing.com/th?id=OHR.EstoshaSpringbok_ZH-CN3452100881_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
          }
        ]
      }
    },
    methods: {
      onClickCheck() {
        this.$refs.previewRef.handleOpen(this.images)
      }
    }
  };
</script>
```
:::

## 默认设置

| 属性     | 说明                           | 类型                                                 | 默认值            |
| -------- | ------------------------------ | ---------------------------------------------------- | ----------------- |
| autoplay | 是否自动切换                     | boolean                                              | false             |
|interval  | 间隔时间传参                     |number                                                | 3000              |
| initialIndex | 初始状态激活的preview的索引，从 0 开始  | number、string                               | 0                 |
| arrow    | 箭头是否显示，可选值为always、never| string                                              |  always            |
| tool     | 工具栏是否显示                   | boolean                                              | true               |

## 事件

| 事件名 | 说明           | 回调值 |
| ------ | -------------- | ------ |
| handleOpen | 	preview 打开的回调,传入数据类型为Array | -  |
| handleClose | 	preview 关闭的回调 | -  |
