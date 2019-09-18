/*
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-05-22 11:22:59
 * @LastEditors: caoqinghua
 * @LastEditTime: 2019-09-17 16:43:18
 */
import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins'

import settings from './modules/settings'
import app from './modules/app'
import login from './modules/login'
import template from './modules/template'

Vue.use(Vuex)

// 初始化store
export default new Vuex.Store({
    modules: {
        app,
        settings,
        login,
        template
    },
    plugins
})