/*
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-05-22 11:20:35
 * @LastEditors: caoqinghua
 * @LastEditTime: 2019-05-22 11:20:35
 */
import Vue from 'vue'

// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
    // 当绑定元素插入到 DOM 中。
    inserted: function(el) {
        // 聚焦元素
        el.focus()
    }
})