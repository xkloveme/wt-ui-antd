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

## 雷达图

::: demo

```vue
<template>
    <div>
        <wt-echarts theme="dark" :chartOptions="chartOptions" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            chartOptions: {
                name: '雷达图',
                chartData: [
                    {
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        data: [
                            {
                                value: [4200, 3000, 20000, 35000, 50000, 18000],
                                name: '预算分配（Allocated Budget）'
                            },
                            {
                                value: [5000, 14000, 28000, 26000, 42000, 21000],
                                name: '实际开销（Actual Spending）'
                            }
                        ]
                    }
                ],
                options: {
                    title: {
                        text: '基础雷达图'
                    },
                    legend: {
                        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
                    },
                    xAxis: null,
                    yAxis: null,
                    radar: {
                        // shape: 'circle',
                        indicator: [
                            { name: '销售（Sales）', max: 6500 },
                            { name: '管理（Administration）', max: 16000 },
                            { name: '信息技术（Information Technology）', max: 30000 },
                            { name: '客服（Customer Support）', max: 38000 },
                            { name: '研发（Development）', max: 52000 },
                            { name: '市场（Marketing）', max: 25000 }
                        ]
                    }
                }
            }
        }
    }
}
</script>
```

:::

## 仪表盘

::: demo

```vue
<template>
    <div>
        <wt-echarts :aria="true" :chartOptions="chartOptions" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            chartOptions: {
                name: '仪表盘',
                chartData: [
                    {
                        name: 'hour',
                        type: 'gauge',
                        startAngle: 90,
                        endAngle: -270,
                        min: 0,
                        max: 12,
                        splitNumber: 12,
                        axisLine: {
                            lineStyle: {
                                width: 15,
                                color: [[1, 'rgba(0,0,0,0.7)']],
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                                shadowBlur: 15
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 3,
                                shadowOffsetX: 1,
                                shadowOffsetY: 2
                            }
                        },
                        axisLabel: {
                            fontSize: 25,
                            distance: 25,
                            formatter: function(value) {
                                if (value === 0) {
                                    return ''
                                }
                                return value
                            }
                        },
                        pointer: {
                            icon:
                                'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                            width: 12,
                            length: '55%',
                            offsetCenter: [0, '8%'],
                            itemStyle: {
                                color: '#C0911F',
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 8,
                                shadowOffsetX: 2,
                                shadowOffsetY: 4
                            }
                        },
                        detail: {
                            show: false
                        },
                        title: {
                            offsetCenter: [0, '30%']
                        },
                        data: [
                            {
                                value: 0
                            }
                        ]
                    },
                    {
                        name: 'minute',
                        type: 'gauge',
                        startAngle: 90,
                        endAngle: -270,
                        min: 0,
                        max: 60,
                        axisLine: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        pointer: {
                            icon:
                                'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                            width: 8,
                            length: '70%',
                            offsetCenter: [0, '8%'],
                            itemStyle: {
                                color: '#C0911F',
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 8,
                                shadowOffsetX: 2,
                                shadowOffsetY: 4
                            }
                        },
                        anchor: {
                            show: true,
                            size: 20,
                            showAbove: false,
                            itemStyle: {
                                borderWidth: 15,
                                borderColor: '#C0911F',
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 8,
                                shadowOffsetX: 2,
                                shadowOffsetY: 4
                            }
                        },
                        detail: {
                            show: false
                        },
                        title: {
                            offsetCenter: ['0%', '-40%']
                        },
                        data: [
                            {
                                value: 0
                            }
                        ]
                    },
                    {
                        name: 'second',
                        type: 'gauge',
                        startAngle: 90,
                        endAngle: -270,
                        min: 0,
                        max: 60,
                        animationEasingUpdate: 'bounceOut',
                        axisLine: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        pointer: {
                            icon:
                                'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                            width: 4,
                            length: '85%',
                            offsetCenter: [0, '8%'],
                            itemStyle: {
                                color: '#C0911F',
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 8,
                                shadowOffsetX: 2,
                                shadowOffsetY: 4
                            }
                        },
                        anchor: {
                            show: true,
                            size: 15,
                            showAbove: true,
                            itemStyle: {
                                color: '#C0911F',
                                shadowColor: 'rgba(0, 0, 0, 0.3)',
                                shadowBlur: 8,
                                shadowOffsetX: 2,
                                shadowOffsetY: 4
                            }
                        },
                        detail: {
                            show: false
                        },
                        title: {
                            offsetCenter: ['0%', '-40%']
                        },
                        data: [
                            {
                                value: 0
                            }
                        ]
                    }
                ],
                options: {
                    animation: true,
                    animationDurationUpdate: 0,
                    xAxis: null,
                    yAxis: null,
                    legend: null
                }
            }
        }
    },
    mounted() {
        var timeUpdatedStatus = {
            second: false,
            minute: false,
            hour: false
        }
        let self = this
        function updateSeries(time, series, type) {
            var isCritical = Math.floor(time) === 0 || (type === 'second' && time === 1)
            series.data[0].value = time
            series.clockwise = true
            if (isCritical && timeUpdatedStatus[type] === true) {
                timeUpdatedStatus[type] = false
                series.data[0].value = 0
                series.clockwise = true
                self.chartOptions.options.animationDurationUpdate = 0
            }
            if (time === 0) {
                timeUpdatedStatus[type] = true
                series.clockwise = false
            }
        }
        setInterval(function() {
            var date = new Date()
            var second = date.getSeconds()
            var minute = date.getMinutes() + second / 60
            var hour = (date.getHours() % 12) + minute / 60
            updateSeries(second, self.chartOptions.chartData[2], 'second')
            updateSeries(minute, self.chartOptions.chartData[1], 'minute')
            updateSeries(hour, self.chartOptions.chartData[0], 'hour')
            self.chartOptions.options.animationDurationUpdate = 200
            date = null
        }, 1000)
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

## 事件

::: demo

```vue
<template>
    <div>
        <wt-echarts theme="dark" :chartOptions="chartOptions" @onClick="handleClick" />
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
                        name: '半径模式',
                        type: 'pie',
                        radius: ['30%', '80%'],
                        center: ['50%', '50%'],
                        roseType: 'radius',
                        label: {
                            show: true,
                            normal: {
                                position: 'outside',
                                fontSize: 16
                            }
                        },
                        labelLine: {
                            length: 1,
                            length2: 20,
                            smooth: true
                        },
                        data: [
                            {
                                value: 1,
                                name: 'rose1',
                                itemStyle: {
                                    color: 'rgba(50,123,250,0.7)',
                                    borderColor: 'rgba(50,123,250,1)',
                                    borderWidth: 3
                                }
                            },
                            {
                                value: 2,
                                name: 'rose2',
                                itemStyle: {
                                    color: 'rgba(244,201,7,0.7)',
                                    borderColor: 'rgba(244,201,7,1)',
                                    borderWidth: 3
                                }
                            },
                            {
                                value: 3,
                                name: 'rose3',
                                itemStyle: {
                                    color: 'rgba(23,216,161,0.7)',
                                    borderColor: 'rgba(23,216,161,1)',
                                    borderWidth: 3
                                }
                            }
                        ]
                    }
                ],
                options: {
                    legend: {
                        orient: 'vertical',
                        top: 'center',
                        right: '5%',
                        data: ['rose1', 'rose2', 'rose3'],
                        textStyle: {
                            color: '#fff',
                            fontSize: 16
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    }
                }
            }
        }
    },
    methods: {
        handleClick(e) {
            this.$read(JSON.stringify(e))
        }
    }
}
</script>
```

:::

::: warning
这是一个满足基本使用,并不完全的版本,你可以通过它更方便的使用图表
:::

## 插件列表

| 组件名称   | 插件名称           |
| ---------- | ------------------ |
| BarChart   | TitleComponent     |
| LineChart  | TooltipComponent   |
| LinesChart | ToolboxComponent   |
| PieChart   | LegendComponent    |
| MapChart   | VisualMapComponent |
| TreeChart  | TimelineComponent  |
| GraphChart | CalendarComponent  |
| RadarChart | GridComponent      |
| GaugeChart | -                  |

<br/>

## 默认字段

| 属性         | 说明                                           | 类型    | 默认值 |
| ------------ | ---------------------------------------------- | ------- | ------ |
| name         | 图表名称                                       | String  | 折线图 |
| chartData    | 对应 option.series 字段,含有 name 和 data 字段 | Object  | -      |
| options      | 对应配置项 option                              | Object  | -      |
| option       | 同 options,权限更高                            | Object  | -      |
| className    | 类名                                           | String  | chart  |
| theme        | 主题(light、dark)可选                          | String  | light  |
| width        | 宽                                             | String  | 100%   |
| height       | 高                                             | String  | 400px  |
| autoResize   | 自动缩放                                       | Boolean | true   |
| chartOptions | 配置项(见下)                                   | Object  | -      |

## chartOptions 值

| 属性      | 说明                                           | 类型   | 默认值 |
| --------- | ---------------------------------------------- | ------ | ------ |
| name      | 图表名称                                       | String | 折线图 |
| chartData | 对应 option.series 字段,含有 name 和 data 字段 | Object | -      |
| options   | 对应配置项 option                              | Object | -      |
| option    | 同 options,权限更高                            | Object | -      |
