// 按需导入echarts图表
import * as echarts from 'echarts/core'
// 引入图表，图表后缀都为 Chart
import {
    BarChart,
    LineChart,
    LinesChart,
    PieChart,
    MapChart,
    TreeChart,
    GraphChart,
    RadarChart,
    GaugeChart
} from 'echarts/charts'
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
    TitleComponent,
    TooltipComponent,
    ToolboxComponent,
    LegendComponent,
    VisualMapComponent,
    TimelineComponent,
    CalendarComponent,
    GridComponent
} from 'echarts/components'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'
let charts = [
    BarChart,
    LineChart,
    LinesChart,
    PieChart,
    MapChart,
    TreeChart,
    GraphChart,
    RadarChart,
    GaugeChart
]

let components = [
    TitleComponent,
    TooltipComponent,
    ToolboxComponent,
    LegendComponent,
    VisualMapComponent,
    TimelineComponent,
    CalendarComponent,
    GridComponent
]
// 注册必须的组件
echarts.use([...charts, ...components, CanvasRenderer])

export default echarts
