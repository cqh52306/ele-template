/*
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-05-22 15:17:54
 * @LastEditors: caoqinghua
 * @LastEditTime: 2019-09-17 16:43:58
 */
/* eslint-disable */
export default {
    // 环境信息
    envInfo: {
        mode: process.env.VUE_APP_MODE,
        DOMAIN: process.env.VUE_APP_BASE_API,
        CONTEXT: '', // 上下文
    },
    sessionKey: {
        searchParams: '__SEARCH_PARAMS__' // 搜索参数
    },
    login: '/user/login',
    logout: '/user/logout',
    info: '/user/info',
    table: '/table/list'
}