# Form

> 该组件采用[ant-design-vue](http://form-create.com/v2/ant-design-vue/)作为基础组件,
兼容市面大多数UI框架[在线体验](http://www.form-create.com/designer/)

![](http://form-create.com/img/rule-info.png)

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

## 校验规则

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
        formData: { field1: '' },
        rule: [
          {
            type: 'input',
            field: 'field1',
            title: '商品',
            value: 'aaa',
            validate: [
              { required: true, message: '请输入商品名称', trigger: 'blur' },
            ]
          },
          {
            type: 'InputNumber', field: 'field2', title: '价格', value: "",
            validate: [
              { required: true, message: '请输入商品价格', trigger: 'blur' },
              { type: 'number', min: 10, max: 100, required: true, message: '最小为10,最大为100' },
            ]
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
            type: 'checkbox',
            field: 'label',
            title: '标签',
            value: [],
            options: [
              { label: '好用', value: 0 },
              { label: '快速', value: 1 },
              { label: '高效', value: 2 },
              { label: '全能', value: 3 },
            ],
            validate: [{ type: 'array', min: 3, required: true, message: '最少选择3个' }]
          },
          {
            type: "input",
            field: 'unique',
            title: "简介",
            validate: [
              {
                validator: (rule, val, d) => {
                  val && !/^[a-z]+$/.test(val) ? d(true) : d()
                }, message: "只能填写 a-z"
              }
            ]
          }
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

## 配置规则

可通过 col 配置项设置布局规则

| 属性 | 说明 | 类型 | 默认值 |
| -------- | ------------------------------ | ---------------------------------------------------- | ----------------- |
|offset|	栅格左侧的间隔格数，间隔内不可以有栅格	|number	| 0|
|order|	栅格顺序，flex 布局模式下有效	|number	| 0|
|pull|	栅格向左移动格数	|number	| 0|
|push|	栅格向右移动格数	|number	| 0|
|span|	栅格占位格数，为 0 时相当于 display: none	|number	| -|
|xs|	<576px 响应式栅格，可为栅格数或一个包含其他属性的对象|number、object	| -|
|sm|	≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象|number、object	| -|
|md|	≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象|number、object	| -|
|lg|	≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象|number、object	| -|
|xl|	≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象|	number、object	| -|
|xxl|	≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象|	number、object	| -|

## 构成

> 全局配置中额外支持一下配置项

- form：表单整体显示规则配置
- row：表单组件布局配置
- submitBtn：提交按钮样式配置
- resetBtn：重置按钮样式配置
- info：组件提示消息配置
- wrap: 配置FormItem v2.5.0+

## api

> [form-create-api](http://form-create.com/v2/instance.html#%E8%8E%B7%E5%8F%96api)

## 内置组件
- Hidden 隐藏字段
- Input 输入框
- InputNumber 数字输入框
- AutoComplete 自动生成
- Radio 单选框
- Checkbox 多选框
- Select 下拉选择框
- Switch 开关
- Cascader 多级联动
- DatePicker 日期选择器
- TimePicker 时间选择器
- Upload 上传
- Rate 评分
- Slider 滑块
- Tree 树形组件
- Frame 框架

## 事件

| 事件名 | 说明 | 回调值 |
| ------ | -------------- | ------ |
| submit | 提交表单 | 校验通过会触发 |