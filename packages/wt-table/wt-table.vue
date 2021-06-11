<script>
import cloneDeep from 'lodash.clonedeep'
export default {
    name: 'WtTable',
    props: {
        tableData: {
            type: Array,
            default: () => []
        },
        columns: {
            type: Array,
            default: () => []
        },
        bordered: {
            type: Boolean,
            default: false
        },
        isDataV: {
            type: Boolean,
            default: false
        },
        scroll: {
            type: Object,
            default: () => {
                return { x: null }
            }
        },
        api: {
            type: Function,
            default: null
        },
        params: {
            type: Object,
            default: () => ({})
        },
        pollInterval: {
            type: Number,
            default: 0
        },
        autoload: {
            type: Boolean,
            default: true
        },
        isNeedPageInfo: {
            type: Boolean,
            default: true
        },
        callback: {
            type: Function,
            default: null
        }
    },
    data() {
        return {
            loading: false,
            pageNum: 1,
            pageSize: 10,
            data: [],
            pagination: {
                total: 10,
                current: 1,
                pageSize: 10,
                'show-total': total => `共 ${total} 条记录`,
                'show-size-changer': !this.isDataV,
                'show-quick-jumper': !this.isDataV
            }
        }
    },
    mounted() {
        if (this.autoload) {
            this.getData()
        } else if (this.tableData.length > 0) {
            this.data = this.tableData
            this.pagination.total = this.tableData.length
        }
    },
    destroyed() {
        clearTimeout(this.timer)
    },
    watch: {
        tableData() {
            this.refresh()
        },
        params: {
            handler: function(val) {
                // 特别注意，不能用箭头函数，箭头函数，this指向全局
                this.pageNum = 1
                this.pageSize = 10
                this.pagination.current = 1
            },
            deep: true
        }
    },
    computed: {
        newColumn() {
            const arr = cloneDeep(this.columns)
            if (this.isDataV) {
                arr.unshift({
                    title: '序号',
                    width: 200,
                    dataIndex: 'xhIndex',
                    customRender: (text, row, index) => (
                        <a>{index + 1 + (this.pageNum - 1) * this.pageSize}</a>
                    )
                })
            }
            return arr
        }
    },
    methods: {
        formatter(row, column, cellValue, index) {
            return cellValue === undefined || cellValue === null ? '-' : cellValue
        },
        fetch() {
            const { pageSize, pageNum } = this
            const newParmas = {}
            for (const key in this.params) {
                if (this.params.hasOwnProperty(key)) {
                    const element = this.params[key]
                    if (element !== '' || element !== null || element !== undefined) {
                        newParmas[key] = element
                    }
                }
            }
            const params = {
                ...newParmas,
                pageNum: pageNum,
                pageSize: pageSize
            }
            this.api(this.isNeedPageInfo ? params : this.params)
                .then(data => {
                    this.pagination.total = data.total
                    this.data = data.rows || data.data || []
                    this.loading = false
                })
                .catch(() => {
                    this.loading = false
                })
                .then(() => {
                    clearTimeout(this.timer)
                    if (this.pollInterval) {
                        this.timer = setTimeout(() => this.fetch(), this.pollInterval)
                    }
                })
        },
        getData() {
            if (typeof this.api === 'function' && this.api) {
                this.loading = true
                this.data = []
                this.$nextTick(() => {
                    this.fetch()
                    this.callback && this.callback()
                })
            } else {
                this.loading = true
                this.$nextTick(() => {
                    this.data = this.tableData
                    this.pagination.total = this.tableData.length
                    this.pagination.hideOnSinglePage = true
                    this.loading = false
                })
            }
        },
        handleChange(value) {
            this.pageSize = value.pageSize
            this.pageNum = value.pageNum
            this.getData()
        },
        refresh(pageNum = 1, pageSize = 10) {
            this.pageNum = pageNum
            this.pageSize = pageSize
            this.pagination.current = pageNum
            this.pagination.pageSize = pageSize
            this.$nextTick(() => {
                this.getData()
            })
        },
        handledbClick(expandedRows) {
            this.$emit('expandedRowsChange', expandedRows)
        },
        handleSelectionChange(pagination, filters, sorter, { currentDataSource }) {
            this.refresh(pagination.current, pagination.pageSize)
            this.$emit('change', pagination, filters, sorter, { currentDataSource })
        },
        tableExpand(...args) {
            this.$emit('expand', ...args)
        }
    },
    render() {
        return (
            <div class={this.isDataV ? 'wt-table read-table-content' : 'wt-table'}>
                <a-table
                    loading={this.isDataV ? false : this.loading}
                    pagination={this.isNeedPageInfo ? this.pagination : false}
                    dataSource={this.data}
                    columns={this.newColumn}
                    rowKey="id"
                    bordered={this.bordered}
                    {...{ scopedSlots: { ...this.$scopedSlots } }}
                    {...{
                        props: this.$attrs,
                        on: this.$listeners
                    }}
                    scroll={this.scroll}
                    expandedRowsChange={this.handledbClick}
                    onChange={this.handleSelectionChange}
                    onExpand={this.tableExpand}>
                    {Object.keys(this.$slots).map(name => (
                        <template slot={name}>{this.$slots[name]}</template>
                    ))}
                </a-table>
            </div>
        )
    }
}
</script>
<style lang="less">
.read-table-content {
    padding: 0.2rem;
    /deep/.ant-table {
        font-size: 0.2rem;
        table {
            border: none;
        }
    }
    /deep/.ant-table-thead > tr > th {
        background: transparent;
        color: #89d5f6;
        border: 0;
    }
    /deep/.ant-table-placeholder {
        background: transparent !important;
        border: 0 !important;
        .ant-empty-description {
            color: #fff;
        }
    }
    /deep/.ant-table-tbody > tr {
        &:nth-child(2n-1) {
            background: #022675;
        }
        &:hover {
            td {
                background: transparent;
            }
        }
    }
    /deep/.ant-table-tbody > tr > td {
        color: #fff;
        background: none;
        border: 0;
    }
    /deep/.ant-table-pagination.ant-pagination {
        color: #fff;
    }
    /deep/.ant-pagination-prev .ant-pagination-item-link {
        background: #022676;
        color: #fff;
        border-color: #022676;
    }
    /deep/.ant-pagination-next .ant-pagination-item-link {
        background: #022676;
        color: #fff;
        border-color: #022676;
    }
    /deep/.ant-pagination-item {
        background: #022676;
        color: #fff;
        border-color: #022676;
        a {
            color: #fff;
        }
        &.ant-pagination-item-active {
            // background: url(~@/assets/dataV/jdyjzx/page-bg.png) no-repeat center / cover;
            a {
                color: #fff;
            }
        }
    }
}
</style>
