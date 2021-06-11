<template>
  <wt-table :api="$api.getData" :columns="columns"></wt-table>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {dataIndex: 'name', title: '姓名'},
        {dataIndex: 'age', title: '年龄'},
        {dataIndex: 'sex', title: '性别'},
      ]
    }
  }
}
</script>