# Echarts

## 折线图

:::demo

```vue
<template>
    <div>
        <wt-echarts />
    </div>
</template>
```

:::

## 饼图

:::demo

```vue
<template>
    <div>
        <wt-echarts :chartOptions="chartOptions" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            chartOptions: {
                name: '饼图',
                chartData: [
                    {
                        type: 'pie',
                        data: [
                            { value: 235, name: '类型A' },
                            { value: 274, name: '类型B' },
                            { value: 310, name: '类型C' },
                            { value: 335, name: '类型D' }
                        ]
                    }
                ],
                options: { type: 'pie' }
            }
        }
    }
}
</script>
```

:::

## 环形图

:::demo

```vue
<template>
    <div>
        <wt-echarts :chartOptions="chartOptions" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            chartOptions: {
                name: '饼图',
                chartData: [
                    {
                        name: '类型比例',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '40',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 235, name: '类型A' },
                            { value: 274, name: '类型B' },
                            { value: 310, name: '类型C' },
                            { value: 335, name: '类型D' }
                        ]
                    }
                ],
                options: {
                    type: 'pie',
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        top: '5%',
                        left: 'center'
                    }
                }
            }
        }
    }
}
</script>
```

:::

## 关系图
:::demo

```vue
<template>
    <div>
        <wt-echarts :chartOptions="chartOptions" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            chartOptions: {
                name: '饼图',
                chartData: [
                    {
                        name: '类型比例',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '40',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 235, name: '类型A' },
                            { value: 274, name: '类型B' },
                            { value: 310, name: '类型C' },
                            { value: 335, name: '类型D' }
                        ]
                    }
                ],
                options: {
                    type: 'pie',
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        top: '5%',
                        left: 'center'
                    }
                }
            }
        }
    }
}
</script>
```

:::
## theme

::: demo

```vue
<template>
    <div>
        <wt-echarts theme="dark" />
    </div>
</template>
```

:::
