<!--
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-05-20 21:25:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-09-18 16:47:57
 -->
<template>
  <div class="dashboard-container">
    <div class="dashboard-text">当前用户名: {{ name }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
