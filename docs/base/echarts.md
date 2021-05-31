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
                        type: 'graph',
                        layout: 'force', //采用力引导布局
                        symbolSize: 45,
                        legendHoverLink: true, //启用图例 hover 时的联动高亮。
                        focusNodeAdjacency: false, //在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
                        roam: true,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                textStyle: {
                                    fontSize: 12
                                }
                            }
                        },
                        force: {
                            repulsion: 1000
                        },
                        edgeSymbolSize: [4, 50],
                        edgeLabel: {
                            normal: {
                                show: true,
                                textStyle: {
                                    fontSize: 10
                                },
                                formatter: '{c}'
                            }
                        },
                        categories: ['机构', '文献', '人员'],
                        data: [
                            {
                                name: '人员1',
                                id: '1-1',
                                category: 1,
                                draggable: true
                            },
                            {
                                name: '文献',
                                id: '3',
                                category: 3,
                                draggable: true
                            },
                            {
                                name: '机构',
                                id: '2',
                                category: 2,
                                draggable: true
                            },
                            {
                                name: '项目',
                                id: '0',
                                draggable: true
                            },
                            {
                                name: '人员',
                                id: '1',
                                category: 1,
                                draggable: true
                            }
                        ],
                        links: [
                            {
                                source: '1',
                                target: '1-1',
                                value: ''
                            },
                            {
                                source: '0',
                                target: '1',
                                value: ''
                            },
                            {
                                source: '0',
                                target: '2',
                                value: ''
                            },
                            {
                                source: '0',
                                target: '3',
                                value: ''
                            }
                        ],
                        lineStyle: {
                            normal: {
                                opacity: 0.9,
                                width: 1,
                                curveness: 0
                            }
                        }
                    }
                ],
                options: {
                    title: {
                        text: ''
                    },
                    color: ['#BB8FCE', '#0099FF', '#5DADE2'],
                    tooltip: {},
                    animationDurationUpdate: 1500,
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: 12
                            }
                        }
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
