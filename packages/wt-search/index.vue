<template>
  <div>
    <wt-form v-bind="$attrs" :rule="newRule" :option="option" @submit="submit" :isSearch="true"></wt-form>
    <!-- <a-col :md="!advanced && 8 || 24" :sm="24">
      <span
        class="table-page-search-submitButtons"
        :style="advanced && { float: 'right', overflow: 'hidden' } || {} "
      >
        <a-button type="primary" icon="search" @click="$refs.table.refresh(true)">查询</a-button>
        <a-button style="margin-left: 8px" icon="sync" @click="() => queryParam = {}">重置</a-button>
        <a @click="toggleAdvanced" style="margin-left: 8px">
          {{ advanced ? '收起' : '展开' }}
          <a-icon :type="advanced ? 'up' : 'down'" />
        </a>
      </span>
    </a-col> -->
  </div>
</template>

<script>
export default {
  name: 'WtSearch',
  props: {
    rule: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    newRule () {
      const arr = []
      this.rule.map(item => {
        arr.push({
          ...item,
          col: { span: 8, md: 8, sm: 24 },
          labelCol: { span: 5 },
          wrapperCol: { span: 15, offset: 1 }
        })
      })
      return arr
    }
  },
  data () {
    return {
      advanced: false,
      option: {
        row: {
          gutter: 10,
          type: undefined,
          align: undefined,
          justify: undefined
        }
      }
    }
  },
  methods: {
    submit (data) {
      console.log('🐛:: submit -> data', data)
    }
  }
}
</script>

<style scoped>
</style>
