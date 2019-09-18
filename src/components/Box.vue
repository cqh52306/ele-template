<!--
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-09-04 09:45:56
 * @LastEditors: caoqinghua
 * @LastEditTime: 2019-09-17 16:20:17
 -->
<template>
  <div :class="smallScreen=='small-screen' ? 'box-container small-screen' : 'box-container'">
    <!-- {{ minHeight }} -->
    <div class="box-padding box-content">
      <slot />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import $ from 'jquery'
export default {
  data () {
    return {
      smallScreen: '',
      minHeight: ''
    }
  },
  created () {
    this.smallScreenFn()
  },
  mounted () {
    window.onresize = () => {
      this.smallScreenFn()
    }
    this.smallScreenFn()
  },
  methods: {
    smallScreenFn () {
      const width = $(document.body).outerWidth(true)
      const height = $(document.body).outerHeight(true)
      // if (width < 1441 && height < 901) {
      if (width < 1366 && height < 768) {
        this.smallScreen = 'small-screen'
        this.minHeight = height
        $('.small-screen').css('min-height', height - 120)
      } else {
        this.smallScreen = ''
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.box-container {
  height: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.box-content {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
</style>
