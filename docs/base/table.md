# Table

## 基本使用

指定表格的数据源 `tableData` 为一个数组

::: demo

```vue
<template>
    <wt-table :columns="columns" :tableData="tableData"></wt-table>
</template>
<script>
export default {
    data() {
        return {
            columns: [
                {
                    dataIndex: 'name',
                    title: '姓名'
                },
                {
                    dataIndex: 'sex',
                    title: '性别',
                    customRender: (text, record, index) => ['女', '男'][text]
                },
                {
                    dataIndex: 'age',
                    title: '年龄'
                }
            ],
            tableData: [
                { id: 1, name: '张三', sex: 0, age: 20 },
                { id: 2, name: '李四', sex: 1, age: 30 },
                { id: 3, name: '王五', sex: 0, age: 21 }
            ]
        }
    }
}
</script>
```

:::

## 远程加载数据

指定数据获取 `api` 接口, 可通过 `params` 传递接口所需查询参数

::: demo

```vue
<template>
    <wt-table :columns="columns" :api="$api.getData" :params="queryParams">
        <template slot="sex" slot-scope="text, record">{{ ['女', '男'][text] }}</template>
    </wt-table>
</template>
<script>
export default {
    data() {
        return {
            columns: [
                {
                    dataIndex: 'name',
                    title: '姓名'
                },
                {
                    dataIndex: 'sex',
                    title: '性别',
                    scopedSlots: { customRender: 'sex' }
                },
                {
                    dataIndex: 'age',
                    title: '年龄'
                }
            ],
            queryParams: {
                name: '',
                age: '',
                sex: ''
            }
        }
    }
}
</script>
```

:::

## 筛选与排序

对某一列数据进行筛选，使用列的 `filters` 属性来指定需要筛选菜单的列，`onFilter` 用于筛选当前数据，`filterMultiple` 用于指定多选和单选。

对某一列数据进行排序，通过指定列的 `sorter` 函数即可启动排序按钮。`sorter: function(rowA, rowB) { ... }`， rowA、rowB 为比较的两个行数据。

`sortDirections: ['ascend' | 'descend']` 改变每列可用的排序方式，切换排序时按数组内容依次切换，设置在 table props 上时对所有列生效。

使用 `defaultSortOrder` 属性，设置列的默认排序顺序。

:::demo

```vue
<template>
    <wt-table :columns="columns" :tableData="tableData" @change="handleChange">
        <template slot="sex" slot-scope="text, record">{{ ['女', '男'][text] }}</template>
    </wt-table>
</template>
<script>
export default {
    data() {
        return {
            columns: [
                {
                    dataIndex: 'name',
                    title: '姓名',
                    sorter: (a, b) => a.name.length - b.name.length,
                    sortDirections: ['descend']
                },
                {
                    dataIndex: 'sex',
                    title: '性别',
                    scopedSlots: { customRender: 'sex' },
                    filters: [
                        {
                            text: '女',
                            value: 0
                        },
                        {
                            text: '男',
                            value: 1
                        }
                    ],
                    onFilter: (value, record) => record.sex === value
                },
                {
                    dataIndex: 'age',
                    title: '年龄',
                    sorter: (a, b) => a.age - b.age,
                    defaultSortOrder: 'descend'
                },
                {
                    dataIndex: 'address',
                    title: '地址',
                    filters: [
                        {
                            text: '杭州',
                            value: '杭州'
                        },
                        {
                            text: '临安',
                            value: '临安'
                        }
                    ],
                    onFilter: (value, record) => record.address.indexOf(value) !== -1,
                    filterMultiple: false
                }
            ],
            tableData: [
                { id: 1, name: '李四', sex: 1, age: 30, address: '浙江杭州' },
                { id: 2, name: '张三三', sex: 0, age: 20, address: '浙江杭州' },
                { id: 3, name: '王五', sex: 0, age: 21, address: '浙江临安' }
            ]
        }
    },
    methods: {
        handleChange(pagination, filters, sorter) {
            console.log(pagination, filters, sorter)
        }
    }
}
</script>
```

:::

## 嵌套子表格

:::demo

```vue
<template>
    <wt-table :columns="columns" :tableData="tableData" />
</template>
<script>
export default {
    data() {
        return {
            columns: [
                {
                    dataIndex: 'name',
                    title: '姓名'
                },
                {
                    dataIndex: 'sex',
                    title: '性别'
                },
                {
                    dataIndex: 'age',
                    title: '年龄'
                }
            ],
            tableData: [
                {
                    id: 1,
                    name: '张三',
                    sex: '男',
                    age: 20,
                    children: [
                        {
                            id: 11,
                            name: '张一一',
                            sex: '女',
                            age: '1'
                        }
                    ]
                },
                {
                    id: 2,
                    name: '李四',
                    sex: '女',
                    age: 30,
                    children: [
                        {
                            id: 21,
                            name: '李二二',
                            sex: '男',
                            age: '11'
                        }
                    ]
                },
                {
                    id: 3,
                    name: '王五',
                    sex: '男',
                    age: 21,
                    children: [
                        {
                            id: 31,
                            name: '王一',
                            sex: '女',
                            age: '1'
                        }
                    ]
                }
            ]
        }
    }
}
</script>
```

:::

## 表格数据渲染

### 1、引入外部 `js` , `table` 表头数据,需要把 `this` 作为参数传进去

-   需要创建 `h` 函数,不然会报错,需要把 `js` 文件建立在同级目录便于管理

```js
// 外部数据
// table.js
export default props => [
    {
        title: '序号',
        dataIndex: 'index',
        customRender: (text, row, index) => {
            const h = props.$createElement // 需要创建h函数
            return h('a', index + 1)
        }
    }
]
```

```js
// 组件内部
// 组件内部,需要把this传进去
import columns from './table.js'
export default {
    data() {
        return {
            columns: columns(this)
        }
    }
}
```

-   表格渲染支持四种写法

```html
<wt-table :columns="columns" :api="$api.getManageGetUserApi">
    <span slot="userName">11</span>
</wt-table>
```

```js
// 适用于普通标签,更改文字内容
{
  title: '创建时间',
  dataIndex: 'createTime',
  customRender: (text, row, index) => {
    return {
      children: this.$formatDate(text)
    }
  }
},
// 适用于大多数,前提是使用足够熟练
{
  title: '邮箱',
  dataIndex: 'email',
  customRender: (text, row, index) => {
    const h = this.$createElement
    return h('a', text)
  }
},
// 在HTML连绵写slot渲染,比较负责的处理逻辑,每个表格内容较多
  {
  title: '用户名',
  dataIndex: 'userName',
  scopedSlots: { customRender: 'userName' }
},
// 更简洁的写标签适用熟悉react
{
  title: '备注',
  dataIndex: 'remark',
  customRender: (text, row, index) => {
    return <a>{text}</a>
  }
}
```

### 2、 直接写在组件内部，但可能会造成单文件过长，不利于阅读

-   这种写法支持 `jsx` 形式,可以少写大部分代码「表格数据不多的时候推荐」

```js
columns: [
    {
        title: '创建时间',
        dataIndex: 'createTime',
        customRender: (text, row, index) => {
            return {
                children: this.$formatDate(text)
            }
        }
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        customRender: (text, row, index) => {
            return <a>{text}</a>
        }
    }
]
```

<!-- ## 属性 API -->

## Table

-   以下仅列出部分属性方法，更多属性请查看 [https://www.antdv.com/components/table-cn/#API​](https://www.antdv.com/components/table-cn/#API​)

### 默认属性

| 属性           | 说明                                                      | 类型                             | 默认值    |
| -------------- | --------------------------------------------------------- | -------------------------------- | --------- |
| isNeedPageInfo | 是否需要分页器，接口请求是否添加参数 `pageSize` `pageNum` | boolean                          | true      |
| autoload       | 是否自动加载一次数据，调用`api`接口或填充 `tableData`     | boolean                          | true      |
| isDataV        | 是否为大屏展示，style 样式不同，如背景色、文字颜色等      | boolean                          | false     |
| showHeader     | 是否显示表头                                              | boolean                          | true      |
| size           | 表格大小                                                  | `default | middle | small`       | `default` |
| rowKey         | 表格行 `key` 的取值，可以是字符串或一个函数               | `string|Function(record):string` | 'id'      |

### 属性设置

| 属性                   | 说明                                                                                      | 类型                                                                                                                             | 默认值                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| tableData              | 数据数组                                                                                  | `any[]`                                                                                                                          |                                                                          |
| api                    | 查询数据 api 接口                                                                         | function                                                                                                                         |                                                                          |
| childrenColumnName     | 指定树形结构的列名                                                                        | string[]                                                                                                                         | children                                                                 |
| columns                | 表格列的配置描述，具体项见下表                                                            | array                                                                                                                            | -                                                                        |
| components             | 覆盖默认的 table 元素                                                                     | object                                                                                                                           | -                                                                        |
| defaultExpandAllRows   | 初始时，是否展开所有行                                                                    | boolean                                                                                                                          | false                                                                    |
| defaultExpandedRowKeys | 默认展开的行                                                                              | string[]                                                                                                                         | -                                                                        |
| expandedRowKeys        | 展开的行，控制属性。可用 .sync 后缀, 参见 `update:expandedRowKeys`                        | string[]                                                                                                                         | -                                                                        |
| expandedRowRender      | 额外的展开行                                                                              | `Function(record, index, indent, expanded):VNode | slot="expandedRowRender"` <br> `slot-scope="record, index, indent, expanded"` | -                                                                        |
| expandIcon             | 自定义展开图标                                                                            | `Function(props):VNode | slot="expandIcon" slot-scope="props"`                                                                   | -                                                                        |
| expandRowByClick       | 通过点击行来展开子行                                                                      | boolean                                                                                                                          | false                                                                    |
| expandIconColumnIndex  | 展开的图标显示在哪一列，如果没有 rowSelection，默认显示在第一列，<br>否则显示在选择框后面 | number                                                                                                                           |
| footer                 | 表格尾部                                                                                  | `Function(currentPageData)`                                                                                                      | slot-scope                                                               |  |
| indentSize             | 展示树形数据时，每层缩进的宽度，以 px 为单位                                              | number                                                                                                                           | 15                                                                       |
| locale                 | 默认文案设置，目前包括排序、过滤、空数据文案                                              | object                                                                                                                           | filterConfirm: '确定' <br> filterReset: '重置'<br> emptyText: '暂无数据' |
| showHeader             | 是否显示表头                                                                              | boolean                                                                                                                          | true                                                                     |
| rowClassName           | 表格行的类名                                                                              | Function(record, index):string                                                                                                   | -                                                                        |
| rowSelection           | 列表项是否可选择，配置项                                                                  | object                                                                                                                           | null                                                                     |
| title                  | 表格标题                                                                                  | Function(currentPageData)                                                                                                        | slot-scope                                                               |  |
| customHeaderRow        | 设置头部行属性                                                                            | Function(column, index)                                                                                                          | -                                                                        |
| customRow              | 设置行属性                                                                                | Function(record, index)                                                                                                          | -                                                                        |

### 事件

| 事件名                                        | 说明                       | 参数                                                           |
| --------------------------------------------- | -------------------------- | -------------------------------------------------------------- |
| change                                        | 分页、排序、筛选变化时触发 | `Function(pagination, filters, sorter, { currentDataSource })` |
| expand                                        | 点击展开图标时触发         | `Function(expanded, record)`                                   |
| expandedRowsChange</br>update:expandedRowKeys | 展开的行变化时触发         | `Function(expandedRowKeys)`                                    |

## Column

列描述数据对象，是 columns 中的一项，Column 使用相同的 API。
[快速生成 columns 小工具](https://www.jixiaokang.com/black-tool/)

| 属性                                                                                           | 说明                                                                                                                                                  | 类型                                                                     | 默认值   |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | -------- |
| align                                                                                          | 列内容对齐方式                                                                                                                                        | `'left' | 'center' | 'right'`                                            | `'left'` |
| dataIndex                                                                                      | 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法                                                                                                   | string                                                                   | -        |
| title                                                                                          | 列头显示文字                                                                                                                                          | `string | slot`                                                          | -        |
| width                                                                                          | 列宽度                                                                                                                                                | `string|number`                                                          | -        |
| fixed                                                                                          | 列是否固定，可选 `true`(等效于 left) `'left'` `'right'`                                                                                               | `boolean|string`                                                         | false    |
| customRender                                                                                   | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，<br>@return 里面可以设置表格行/列合并,可参考 demo 表格行/列合并                     | `Function(text, record, index) {}|slot-scope`                            | -        |
| scopedSlots                                                                                    | 使用 columns 时，可以通过该属性配置支持 slot-scope 的属性，<br>如 `scopedSlots: { customRender: 'XXX'}`                                               | object                                                                   | -        |
| ellipsis                                                                                       | 超过宽度将自动省略，暂不支持和排序筛选一起使用。<br>设置为 true 时，表格布局将变成 tableLayout="fixed"。                                              | boolean                                                                  | false    |
| defaultFilteredValue                                                                           | 默认筛选值                                                                                                                                            | string[]                                                                 | -        |
| colSpan                                                                                        | 表头列合并,设置为 0 时，不渲染                                                                                                                        | number                                                                   |          |
| filterDropdown                                                                                 | 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互                                                                                        | `VNode | slot-scope`                                                     | -        |
| filterDropdownVisible                                                                          | 用于控制自定义筛选菜单是否可见。在 template 中可用 .sync 后缀, <br>参见 `update:filterDropdownVisible`                                                | boolean                                                                  | -        |
| filtered                                                                                       | 标识数据是否经过过滤，筛选图标会高亮                                                                                                                  | boolean                                                                  | false    |
| filteredValue                                                                                  | 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组                                                                                   | string[]                                                                 | -        |
| filterIcon                                                                                     | 自定义 filter 图标。                                                                                                                                  | `VNode | (filtered: boolean, column: Column) => vNode |slot |slot-scope` | false    |
| filterMultiple                                                                                 | 是否多选                                                                                                                                              | boolean                                                                  | true     |
| filters                                                                                        | 表头的筛选菜单项                                                                                                                                      | object[]                                                                 | -        |
| sorter                                                                                         | 排序函数，本地排序使用一个函数(参考 Array.sort 的 compareFunction)，需要服务端排序可设为 true                                                         | `Function|boolean`                                                       | -        |
| sortOrder                                                                                      | 排序的受控属性，外界可用此控制列的排序，可设置为 `'ascend'` `'descend'` `false`                                                                       | `boolean|string`                                                         | -        |
| customCell                                                                                     | 设置单元格属性                                                                                                                                        | Function(record, rowIndex)                                               | -        |
| customHeaderCell                                                                               | 设置头部单元格属性                                                                                                                                    | Function(column)                                                         | -        |
| onFilter                                                                                       | 本地模式下，确定筛选的运行函数, 使用 template 或 jsx 时作为 filter 事件使用                                                                           | Function                                                                 | -        |
| onFilterDropdownVisibleChange<br>@filterDropdownVisibleChange<br>@update:filterDropdownVisible | 自定义筛选菜单可见 filterDropdownVisible 变化时调用，使用 template 或 jsx 时作为 filterDropdownVisibleChange 或 update:filterDropdownVisible 事件使用 | function(visible) {}                                                     | -        |
| slots                                                                                          | 使用 columns 时，可以通过该属性配置支持 slot 的属性，如 `slots: { filterIcon: 'XXX'}`                                                                 | object                                                                   | -        |

## rowSelection

选择功能的配置。

| 参数                  | 说明                                            | 类型                                                  | 默认值     |
| --------------------- | ----------------------------------------------- | ----------------------------------------------------- | ---------- |
| columnWidth           | 自定义列表选择框宽度                            | `string|number`                                       | -          |
| columnTitle           | 自定义列表选择框标题                            | `string|VNode`                                        | -          |
| fixed                 | 把选择框列固定在左边                            | boolean                                               | -          |
| getCheckboxProps      | 选择框的默认属性配置                            | Function(record)                                      | -          |
| hideDefaultSelections | 去掉『全选』『反选』两个默认选项                | boolean                                               | false      |
| selectedRowKeys       | 指定选中项的 key 数组，需要和 onChange 进行配合 | string[]                                              | []         |
| selections            | 自定义选择配置项, 设为 true 时使用默认选择项    | `object[]|boolean`                                    | -          |
| type                  | 多选/单选，`checkbox` or `radio`                | string                                                | `checkbox` |
| onChange              | 选中项发生变化时的回调                          | Function(selectedRowKeys, selectedRows)               | -          |
| onSelect              | 用户手动选择/取消选择某列的回调                 | Function(record, selected, selectedRows, nativeEvent) | -          |
| onSelectAll           | 用户手动选择/取消选择所有列的回调               | Function(selected, selectedRows, changeRows)          | -          |
| onSelectInvert        | 用户手动选择反选的回调                          | Function(selectedRows)                                | -          |

## scroll

| 参数                     | 说明                                                                                        | 类型            | 默认值 |
| ------------------------ | ------------------------------------------------------------------------------------------- | --------------- | ------ |
| x                        | 设置横向滚动，也可用于指定滚动区域的宽和高，可以设置为像素值，百分比，true 和 'max-content' | `number | true` | -      |
| y                        | 设置纵向滚动，也可用于指定滚动区域的宽和高，可以设置为像素值，百分比，true 和 'max-content' | `number | true` | -      |
| scrollToFirstRowOnChange | 当分页、排序、筛选变化后是否滚动到表格顶部                                                  | boolean         | -      |

## selection

自定义选择配置项

| 参数     | 说明                     | 类型                        | 默认值 |
| -------- | ------------------------ | --------------------------- | ------ |
| key      | Vue 需要的 key，建议设置 | string                      | -      |
| text     | 选择项显示的文字         | `string|VNode`              | -      |
| onSelect | 选择项点击回调           | Function(changeableRowKeys) | -      |
