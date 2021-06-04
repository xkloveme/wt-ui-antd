<template>
    <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from './echarts.js'
import resize from './resize.js'

export default {
    name: 'wt-echarts',
    mixins: [resize],
    props: {
        className: {
            type: String,
            default: 'chart'
        },
        // 主题
        theme: {
            type: String,
            default: 'light'
        },
        // 无障碍花纹
        aria: {
            type: Boolean,
            default: false
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '400px'
        },
        autoResize: {
            type: Boolean,
            default: true
        },
        // 配置项
        chartOptions: {
            default: () => {
                return {
                    name: '折线图',
                    chartData: [
                        {
                            name: '类型A',
                            data: [72, 3, 5],
                            color: '#0c6bff',
                            options: {}
                        },
                        {
                            name: '类型B',
                            data: [10, 39, 58],
                            color: '#F0f033',
                            options: {}
                        },
                        {
                            name: '类型C',
                            data: [50, 89, 38],
                            color: '#00ca00',
                            options: {}
                        },
                        {
                            name: '类型D',
                            data: [20, 49, 27],
                            color: '#4dbeff',
                            options: {}
                        }
                    ],
                    chartName: ['2019', '2020', '2021'],
                    options: {}
                }
            },
            type: Object,
            required: false
        }
    },
    data() {
        return {
            chart: null
        }
    },
    watch: {
        chartOptions: {
            deep: true,
            handler(val, oldVal) {
                if (this.chart) {
                    this.setOptions(val, true)
                } else {
                    this.chart.dispose()
                    this.chart = null
                    this.initChart()
                    this.setOptions(val)
                }
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initChart()
        })
    },
    beforeDestroy() {
        if (!this.chart) {
            return
        }
        this.chart.dispose()
        this.chart = null
    },
    methods: {
        initChart() {
            this.chart = echarts.init(this.$el, this.theme)
            let self = this
            this.chart.on('click', function(params) {
                self.$emit('onClick', { ...params, event: undefined })
            })
            this.setOptions(this.chartOptions)
        },
        setOptions({ chartData, chartName, options } = {}, status) {
            const series = []
            let legend = null
            let arr = []
            chartData.map(item => {
                arr.push(item.name)
                series.push({
                    type: 'line',
                    name: item.name,
                    data: item.data,
                    emphasis: {
                        focus: 'series'
                    },
                    ...item
                })
            })
            if (arr.length) {
                legend = { data: arr }
            }
            this.chart.setOption(
                {
                    aria: {
                        enabled: this.aria
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: 'rgba(0, 255, 233,0)'
                                        },
                                        {
                                            offset: 0.5,
                                            color: 'rgba(255, 255, 255,1)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(0, 255, 233,0)'
                                        }
                                    ],
                                    global: false
                                }
                            }
                        }
                    },
                    legend: legend,
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            show: false
                        },
                        data: chartName
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: series,
                    ...options
                },
                status
            )
        }
    }
}
</script>
