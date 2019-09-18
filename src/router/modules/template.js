/*
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-05-21 13:42:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-09-18 16:57:14
 */
/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

export default {
    path: '/template',
    component: Layout,
    redirect: '/table/list',
    name: 'template',
    meta: {
        title: 'template',
        icon: 'template'
    },

    path: '/table',
    component: Layout,
    redirect: '/table/list',
    name: 'Table',
    meta: {
        title: '列表页',
        icon: 'table'
    },
    children: [{
        path: 'list',
        component: () => import('@/views/template'),
        name: 'template',
        meta: { title: '列表页模版' }
    }]
}