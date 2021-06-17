# Form

> 该组件采用[ant-design-vue](http://form-create.com/v2/ant-design-vue/)作为基础组件,兼容市面大多数UI框架[在线体验](http://www.form-create.com/designer/)

## 基本使用

::: demo

```vue
<template>
  <div>
    <res v-model="formData">formData:</res>
    <wt-form :rule="rule" v-model="formData" @submit="handleSubmit"></wt-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formData: { field1: '苹果手机' },
        rule: [
          { type: 'input', field: 'field1', title: '商品', value: 'aaa' },
          { type: 'input', field: 'field2', title: '类型', value: 'sss' }
        ]
      }
    },
    methods: {
      handleSubmit(data) {
        console.log(data)
      }
    }
  }
</script>
```

:::

## 栅格布局规则

::: demo
```vue
<template>
  <div>
    <res v-model="formData">formData:</res>
    <wt-form :rule="rule" v-model="formData" :option="option" :submitBtn="false"></wt-form>
  </div>
</template>
<script>
  export default {
    data() {
      let unqiue = (() => {
        let unqiue = 1;
        return () => `unqiue_${unqiue++}`
      })()
      return {
        formData: {},
        option: {
          form: {
            labelWidth: 150
          }
        },
        rule: [
          {
            type: 'input',
            field: unqiue(),
            title: 'span6',
            col: {
              span: 6
            }
          },
          {
            type: 'input',
            field: unqiue(),
            title: 'span6',
            col: {
              span: 6
            }
          },
          {
            type: 'input',
            field: unqiue(),
            title: 'span6',
            col: {
              span: 6
            }
          },
          {
            type: 'input',
            field: unqiue(),
            title: 'span6',
            col: {
              span: 6
            }
          },
          {
            type: 'input',
            field: unqiue(),
            title: 'span12',
            col: {
              span: 11
            }
          },
          {
            type: 'input',
            field: unqiue(),
            title: 'span12',
            col: {
              span: 11,
              push: 2
            }
          },
          {
            type: 'input',
            field: unqiue(),
            title: '响应式',
            col: {
              xs: {
                span: 12
              },
              md: {
                span: 24
              }
            }
          }
        ]
      }
    }
  }
</script>
```

:::

## 内置组件

::: demo

```vue
<template>
  <div>
    <res v-model="formData">formData:</res>
    <wt-form :rule="rule" v-model="formData" :option="option"></wt-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formData: { field1: '苹果手机' },
        option: {
          "form": {
            "labelPosition": "right",
            "size": "mini",
            "labelWidth": "125px",
            "hideRequiredAsterisk": false,
            "showMessage": true,
            "inlineMessage": false
          }
        },
        rule: [
          {
            "type": "input",
            "field": "m2j5r84vnnwd",
            "title": "输入框",
            "info": "",
            "_fc_drag_tag": "input",
            "hidden": false,
            "display": true
          },
          {
            "type": "select",
            "field": "if65r86uz3pt",
            "title": "选择器",
            "info": "",
            "effect": {
              "fetch": ""
            },
            "options": [
              {
                "value": "1",
                "label": "选项1"
              },
              {
                "value": "2",
                "label": "选项2"
              }
            ],
            "_fc_drag_tag": "select",
            "hidden": false,
            "display": true
          },
          {
            "type": "FcRow",
            "children": [
              {
                "type": "col",
                "props": {
                  "span": 12,
                  "offset": 0,
                  "push": 0,
                  "pull": 0
                },
                "children": [
                  {
                    "type": "radio",
                    "field": "hld1lk9wzkeme",
                    "title": "单选框",
                    "info": "",
                    "effect": {
                      "fetch": ""
                    },
                    "options": [
                      {
                        "value": "1",
                        "label": "选项1"
                      },
                      {
                        "value": "2",
                        "label": "选项2"
                      }
                    ],
                    "_fc_drag_tag": "radio",
                    "hidden": false,
                    "display": true
                  }
                ],
                "_fc_drag_tag": "col",
                "hidden": false,
                "display": true
              },
              {
                "type": "col",
                "props": {
                  "span": 12,
                  "offset": 0,
                  "push": 0,
                  "pull": 0
                },
                "children": [
                  {
                    "type": "checkbox",
                    "field": "1udfzmr5x2lr9",
                    "title": "多选框",
                    "info": "",
                    "effect": {
                      "fetch": ""
                    },
                    "options": [
                      {
                        "value": "1",
                        "label": "选项1"
                      },
                      {
                        "value": "2",
                        "label": "选项2"
                      }
                    ],
                    "_fc_drag_tag": "checkbox",
                    "hidden": false,
                    "display": true
                  }
                ],
                "_fc_drag_tag": "col",
                "hidden": false,
                "display": true
              }
            ],
            "_fc_drag_tag": "row",
            "hidden": false,
            "display": true
          },
          {
            "type": "FcRow",
            "children": [
              {
                "type": "col",
                "props": {
                  "span": 8,
                  "offset": 0,
                  "push": 0,
                  "pull": 0
                },
                "children": [
                  {
                    "type": "slider",
                    "field": "i001lk9wseaoo",
                    "title": "滑块",
                    "info": "",
                    "_fc_drag_tag": "slider",
                    "hidden": false,
                    "display": true,
                    "value": 0
                  }
                ],
                "_fc_drag_tag": "col",
                "hidden": false,
                "display": true
              },
              {
                "type": "col",
                "props": {
                  "span": 8,
                  "offset": 0,
                  "push": 0,
                  "pull": 0
                },
                "children": [
                  {
                    "type": "rate",
                    "field": "re41lk9wsoumj",
                    "title": "评分",
                    "info": "",
                    "_fc_drag_tag": "rate",
                    "hidden": false,
                    "display": true,
                    "value": 0
                  }
                ],
                "_fc_drag_tag": "col",
                "hidden": false,
                "display": true
              },
              {
                "type": "col",
                "props": {
                  "span": 8,
                  "offset": 0,
                  "push": 0,
                  "pull": 0
                },
                "children": [
                  {
                    "type": "switch",
                    "field": "udy1lk9wty166",
                    "title": "开关",
                    "info": "",
                    "_fc_drag_tag": "switch",
                    "hidden": false,
                    "display": true
                  }
                ],
                "_fc_drag_tag": "col",
                "hidden": false,
                "display": true
              }
            ],
            "_fc_drag_tag": "row",
            "hidden": false,
            "display": true
          },
          {
            "type": "FcRow",
            "children": [
              {
                "type": "col",
                "props": {
                  "span": 12,
                  "offset": 0,
                  "push": 0,
                  "pull": 0
                },
                "children": [
                  {
                    "type": "datePicker",
                    "field": "1iw1lk9wwtkfl",
                    "title": "日期选择器",
                    "info": "",
                    "_fc_drag_tag": "datePicker",
                    "hidden": false,
                    "display": true
                  }
                ],
                "_fc_drag_tag": "col",
                "hidden": false,
                "display": true
              },
              {
                "type": "col",
                "props": {
                  "span": 12,
                  "offset": 0,
                  "push": 0,
                  "pull": 0
                },
                "children": [
                  {
                    "type": "inputNumber",
                    "field": "zpp1lk9wv9sxx",
                    "title": "计数器",
                    "info": "",
                    "_fc_drag_tag": "inputNumber",
                    "hidden": false,
                    "display": true
                  }
                ],
                "_fc_drag_tag": "col",
                "hidden": false,
                "display": true
              }
            ],
            "_fc_drag_tag": "row",
            "hidden": false,
            "display": true
          },
          {
            "type": "FcRow",
            "children": [
              {
                "type": "col",
                "props": {
                  "span": 24,
                  "offset": 0,
                  "push": 0,
                  "pull": 0
                },
                "children": [
                  {
                    "type": "cascader",
                    "field": "gedfzmr6b2i75",
                    "title": "级联选择器",
                    "info": "",
                    "effect": {
                      "fetch": ""
                    },
                    "props": {
                      "options": [
                        {
                          "value": "zhinan",
                          "label": "指南",
                          "children": [
                            {
                              "value": "shejiyuanze",
                              "label": "设计原则",
                              "children": [
                                {
                                  "value": "yizhi",
                                  "label": "一致"
                                },
                                {
                                  "value": "fankui",
                                  "label": "反馈"
                                },
                                {
                                  "value": "xiaolv",
                                  "label": "效率"
                                },
                                {
                                  "value": "kekong",
                                  "label": "可控"
                                }
                              ]
                            },
                            {
                              "value": "daohang",
                              "label": "导航",
                              "children": [
                                {
                                  "value": "cexiangdaohang",
                                  "label": "侧向导航"
                                },
                                {
                                  "value": "dingbudaohang",
                                  "label": "顶部导航"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "value": "zujian",
                          "label": "组件",
                          "children": [
                            {
                              "value": "basic",
                              "label": "Basic",
                              "children": [
                                {
                                  "value": "layout",
                                  "label": "Layout 布局"
                                },
                                {
                                  "value": "color",
                                  "label": "Color 色彩"
                                },
                                {
                                  "value": "typography",
                                  "label": "Typography 字体"
                                },
                                {
                                  "value": "icon",
                                  "label": "Icon 图标"
                                },
                                {
                                  "value": "button",
                                  "label": "Button 按钮"
                                }
                              ]
                            },
                            {
                              "value": "form",
                              "label": "Form",
                              "children": [
                                {
                                  "value": "radio",
                                  "label": "Radio 单选框"
                                },
                                {
                                  "value": "checkbox",
                                  "label": "Checkbox 多选框"
                                },
                                {
                                  "value": "input",
                                  "label": "Input 输入框"
                                },
                                {
                                  "value": "input-number",
                                  "label": "InputNumber 计数器"
                                },
                                {
                                  "value": "select",
                                  "label": "Select 选择器"
                                },
                                {
                                  "value": "cascader",
                                  "label": "Cascader 级联选择器"
                                },
                                {
                                  "value": "switch",
                                  "label": "Switch 开关"
                                },
                                {
                                  "value": "slider",
                                  "label": "Slider 滑块"
                                },
                                {
                                  "value": "time-picker",
                                  "label": "TimePicker 时间选择器"
                                },
                                {
                                  "value": "date-picker",
                                  "label": "DatePicker 日期选择器"
                                },
                                {
                                  "value": "datetime-picker",
                                  "label": "DateTimePicker 日期时间选择器"
                                },
                                {
                                  "value": "upload",
                                  "label": "Upload 上传"
                                },
                                {
                                  "value": "rate",
                                  "label": "Rate 评分"
                                },
                                {
                                  "value": "form",
                                  "label": "Form 表单"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    "_fc_drag_tag": "cascader",
                    "hidden": false,
                    "display": true
                  }
                ],
                "_fc_drag_tag": "col",
                "hidden": false,
                "display": true
              }
            ],
            "_fc_drag_tag": "row",
            "hidden": false,
            "display": true
          }
        ]
      }
    }
  }
</script>
```

:::


## 默认设置

| 属性 | 说明 | 类型 | 默认值 |
| -------- | ------------------------------ | ---------------------------------------------------- | ----------------- |
| disabled | 按钮失效状态 | boolean | false |
| ghost | 幽灵属性，使按钮背景透明 | boolean | false |
| htmlType | 设置 | button 原生的 type 值，可选值请参考 HTML 标准 string | button |
| icon | 设置按钮的图标类型 | string | - |
| loading | 设置按钮载入状态 | boolean | { delay: number } | false |
| shape | 设置按钮形状，可选值为 | circle、 round 或者不设 string | - |
| size | 设置按钮大小，可选值为 | small large 或者不设 string | default |
| type | 设置按钮类型，可选值为 | primary dashed danger link 或者不设 string | default |
| block | 将按钮宽度调整为其父宽度的选项 | | boolean false |

## 属性设置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | -------- | ---------------- | ------ | ------ |
| tips | 按钮提示 | String 、 Number | - | - |

## 事件

| 事件名 | 说明 | 回调值 |
| ------ | -------------- | ------ |
| click | 点击按钮时触发 | event |