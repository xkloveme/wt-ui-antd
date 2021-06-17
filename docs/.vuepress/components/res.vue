<template>
    <pre class="code_show"><slot></slot>{{ fromValue }}</pre>
</template>

<script>
export default {
    props: ['value'],
    computed: {
        //表单数据
        fromValue: {
            get() {
                return JSON.stringify(this.value, null, 2)
            }
        }
    }
}
</script>

<style lang="less" scoped>
.code_show {
    background-color: #000;
    color: chartreuse;
}
</style>