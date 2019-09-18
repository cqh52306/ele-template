/*
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-05-23 09:57:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-09-18 15:53:39
 */
import Vue from 'vue'
// css样式集合
import 'src/styles/reset.css'
// import 'src/styles/theme/index.css'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import TouchRipple from 'vue-touch-ripple'
import EleTables from "ele-tables"
import EleSearch from "ele-search"
import EleDialog from "ele-dialog"
import "ele-search/lib/ele-search.css"
import "ele-tables/lib/ele-tables.css"
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import 'src/directive/directive'
// 导入过滤器
import 'src/filter/filter'
import API from '@/api'
const { envInfo } = API

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
// 生产环境使用这段配置
if (process.env.NODE_ENV === 'production') {
    mockXHR()
}

console.log('envInfo--main', envInfo)
console.log('process.env', process.env)

// set ElementUI lang to EN
Vue.use(ElementUI, {
    size: 'small',
    zIndex: 3000
})
Vue.use(TouchRipple)
Vue.use(EleTables)
Vue.use(EleSearch)
Vue.use(EleDialog)
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})