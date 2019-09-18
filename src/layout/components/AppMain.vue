<!--
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-05-23 10:07:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-09-18 16:39:21
 -->
<template>
  <section class="app-main">
    <router-view id="content" class="content" :key="key" />
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route.fullPath
    }
  }
}
</script>

<style  lang="scss" scoped>
.app-main {
  /*50 = navbar  */
  width: 100%;
  position: relative;
  padding: 8px;
  box-sizing: border-box;
  flex-direction: column;
  background: #f2f2f2;
  // height: 100%;
  height: calc(100vh - 50px);
  overflow: hidden;
  .content {
    height: 100%;
    box-sizing: border-box;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    padding: 10px 10px 0;
    background: #fff;
  }
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
