# Card

## 基本使用

::: demo

```vue
<template>
  <div>
    <wt-card>
      基本使用
    </wt-card>
  </div>
</template>
```

:::

## 自定义title

::: demo

```vue
<template>
  <div>
    <wt-card title="自定义title">
      基本使用
    </wt-card>
  </div>
</template>

```

:::

## warnMsg

::: demo

```vue
<template>
  <div>
    <wt-card title="自定义title" warnMsg="您有新的错误信息">
      基本使用
    </wt-card>
  </div>
</template>

```

:::


## dataV

::: demo

```vue
<template>
  <div>
    <wt-card title="自定义title" error="您有新的错误信息" isDataV>
      基本使用
    </wt-card>
  </div>
</template>

```

:::

## 默认设置

| 属性 | 说明 | 类型 | 默认值 |
| -------- | ------------------------------ | ---------------------------------------------------- | ----------------- |
| title | 标题 | string | "标题" |
| warnMsg | 错误信息 | string | "" |
| showTitle | 是否显示标题 | button  | true |
| isDataV | 是否是dataV | button  | false |
