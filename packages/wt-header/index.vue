<template>
  <div class="page_header">
    <span class="icon_left" v-if="showIcon" @click="$router.go(-1)">
      <a-icon type="left" />
    </span>
    <span class="color_45 ml_10" style="cursor:pointer" @click="$backToHome()">{{ header }}</span>
    <span class="color_45 fs_20">/</span>
    <span class="active_title">{{ title }}</span>
  </div>
</template>
<script>
export default {
  name: 'WtHeader',
  props: {
    header: {
      default: '惠企政策'
    },
    title: {
      default: '政策详情'
    },
    showIcon: {
      default: false
    }
  }
}
</script>
<style scoped lang="less">
.page_header {
  display: flex;
  height: 50px;
  line-height: 50px;
  background-color: #ffffff;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.1);
}
.icon_left {
  display: inline-block;
  width: 34px;
  height: 50px;
  line-height: 50px;
  color: #0c3ec2;
  text-align: center;
  background-color: #e9eefa;
  cursor: pointer;
}
.active_title {
  font-size: 16px;
  font-weight: bold;
  color: #000000;
}
</style>
