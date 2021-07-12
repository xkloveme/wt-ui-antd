<template>
    <div :class="isDataV ? 'wt-card wt-card-dataV' : 'wt-card'">
        <h4 class="card-title" v-if="showTitle">
            {{ title }}
            <span class="warn-msg">{{ warnMsg }}</span>
        </h4>
        <div class="card-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'WtCard',
    props: {
        title: {
            default: '标题',
            type: String
        },
        warnMsg: {
            default: '',
            type: String
        },
        showTitle: {
            default: true,
            type: Boolean
        },
        isDataV: {
            default: false,
            type: Boolean
        }
    }
}
</script>
<style scoped lang="less">
.wt-card {
    margin: 20px 0px;
    background-color: #ffffff;
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.1);
    .card-title {
        padding-top: 10px;
    }
    .card-title::before {
        content: '';
        display: inline-block;
        width: 5px;
        height: 10px;
        margin-right: 10px;
        background-color: #1890ff;
    }
    .warn-msg {
        color: #ff0000;
    }
    .card-content {
        padding: 10px 15px;
    }
}
.wt-card-dataV {
    color: #fff;
    background-color: rgb(10, 49, 144);
    .card-title {
        color: #fff;
        padding-top: 10px;
    }
}
</style>
