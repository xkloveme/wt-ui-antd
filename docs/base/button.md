# Button

## 基本使用

::: demo

```vue
<template>
    <div>
        <div>
            <wt-button type="primary">
                Primary
            </wt-button>
            <wt-button>Default</wt-button>
            <wt-button type="dashed">
                Dashed
            </wt-button>
            <wt-button type="danger">
                Danger
            </wt-button>
            <a-config-provider :auto-insert-space-in-button="false">
                <wt-button type="primary">
                    按钮
                </wt-button>
            </a-config-provider>
            <wt-button type="primary">
                按钮
            </wt-button>
            <wt-button type="link">
                Link
            </wt-button>
        </div>
    </div>
</template>
```

:::

## icon & size

::: demo

```vue
<template>
  <div>
    <a-radio-group :value="size" @change="handleSizeChange">
      <a-radio-button value="large">
        Large
      </a-radio-button>
      <a-radio-button value="default">
        Default
      </a-radio-button>
      <a-radio-button value="small">
        Small
      </a-radio-button>
    </a-radio-group>
    <br></br>
    <wt-button type="primary" :size="size">
      Primary
    </wt-button>

    <wt-button :size="size">
      Normal
    </wt-button>

    <wt-button type="dashed" :size="size">
      Dashed
    </wt-button>
    <wt-button type="danger" :size="size">
      Danger
    </wt-button>
    <wt-button type="link" :size="size">
      Link
    </wt-button>
    <br></br>
    <wt-button type="primary" icon="download" :size="size" />
    <wt-button type="primary" shape="circle" icon="download" :size="size" />
    <wt-button type="primary" shape="round" icon="download" :size="size" />
    <wt-button type="primary" icon="download" :size="size">
      Download
    </wt-button>
      <br><br>
    <wt-button type="primary" icon="download" :size="size" :loading="true"/>
    <wt-button type="primary" shape="circle" icon="download" :size="size" :loading="true"/>
    <wt-button type="primary" shape="round" icon="download" :size="size" :loading="true"/>
    <wt-button type="primary" icon="download" :size="size" :loading="true">
      Download
    </wt-button>
      <br><br>
    <a-button-group :size="size">
      <wt-button type="primary">
        <a-icon type="left" />Backward
      </wt-button>
      <wt-button type="primary">
        Forward<a-icon type="right" />
      </wt-button>
    </a-button-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        size: 'large',
      };
    },
    methods: {
      handleSizeChange(e) {
        this.size = e.target.value;
      },
    },
  };
</script>

```

:::

## href

::: demo

```vue
<template>
    <div>
        <wt-button href="http://www.bing.com" type="primary">外链按钮</wt-button>
    </div>
</template>
```

:::

## tips

::: demo

```vue
<template>
    <div>
        <wt-button tips="正常按钮">
            Normal
        </wt-button>
        <wt-button type="dashed" tips="虚线按钮">
            Dashed
        </wt-button>
        <wt-button type="danger" tips="危险按钮">
            Danger
        </wt-button>
        <wt-button type="link" tips="链接">
            Link
        </wt-button>
    </div>
</template>
```

:::

## disabled

::: demo

```vue
<template>
    <div :style="{ margin: '10px 0' }">
        <wt-button type="primary">
            Primary
        </wt-button>
        <wt-button type="primary" disabled>
            Primary(disabled)
        </wt-button>
        <br />
        <br />
        <wt-button>Default</wt-button>
        <wt-button disabled>
            Default(disabled)
        </wt-button>
        <br />
        <br />
        <wt-button type="dashed">
            Dashed
        </wt-button>
        <wt-button type="dashed" disabled>
            Dashed(disabled)
        </wt-button>
        <br />
        <br />
        <wt-button type="link">
            Link
        </wt-button>
        <wt-button type="link" disabled>
            Link(disabled)
        </wt-button>
        <div :style="{ margin: '8px 8px 0 8px' }">
            <wt-button ghost>
                Ghost
            </wt-button>
            <wt-button ghost disabled>
                Ghost(disabled)
            </wt-button>
        </div>
    </div>
</template>
```

:::

## 事件

::: demo

```vue
<template>
    <div>
        <wt-button type="link" :tips="num"> {{ num }} </wt-button><br />您可以点击体验按钮防抖<br />
        <wt-button type="danger" icon="minus-circle" @click="handleClickSubtract"
            >疯狂点击减一项</wt-button
        >
        <wt-button type="primary" icon="plus-circle" @click="handleClickAdd"
            >疯狂点击加一项</wt-button
        >
    </div>
</template>
<script>
export default {
    data() {
        return {
            num: 100
        }
    },
    methods: {
        handleClickAdd(e) {
            this.num++
        },
        handleClickSubtract(e) {
            this.num--
        }
    }
}
</script>
```

:::

## 默认设置

| 属性     | 说明                           | 类型                                                 | 默认值            |
| -------- | ------------------------------ | ---------------------------------------------------- | ----------------- |
| disabled | 按钮失效状态                   | boolean                                              | false             |
| ghost    | 幽灵属性，使按钮背景透明       | boolean                                              | false             |
| htmlType | 设置                           | button 原生的 type 值，可选值请参考 HTML 标准 string | button            |
| icon     | 设置按钮的图标类型             | string                                               | -                 |
| loading  | 设置按钮载入状态               | boolean                                              | { delay: number } | false |
| shape    | 设置按钮形状，可选值为         | circle、 round 或者不设 string                       | -                 |
| size     | 设置按钮大小，可选值为         | small large 或者不设 string                          | default           |
| type     | 设置按钮类型，可选值为         | primary dashed danger link 或者不设 string           | default           |
| block    | 将按钮宽度调整为其父宽度的选项 |                                                      | boolean false     |

## 属性设置

| 参数 | 说明     | 类型             | 可选值 | 默认值 |
| ---- | -------- | ---------------- | ------ | ------ |
| tips | 按钮提示 | String 、 Number | -      | -      |

## 事件

| 事件名 | 说明           | 回调值 |
| ------ | -------------- | ------ |
| @click | 点击按钮时触发 | event  |
