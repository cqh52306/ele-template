/*
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-05-22 11:22:59
 * @LastEditors: caoqinghua
 * @LastEditTime: 2019-09-17 17:05:46
 */
import { fetch } from 'src/utils/fetch'
import API from '@/api'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
const { envInfo } = API

export default {
    state: {
        table: {
            list: []
        }
    },
    mutations: {
        SET_TABLE: (state, val) => {
            state.table = val
        }
    },
    actions: {
        // 获取用户信息
        getTable: ({ state, commit }, query) => {
            const params = {
                token: state.token
            }
            fetch({
                url: API.table,
                showTips: true,
                encrypt: true, // 预留是否开启加密
                body: params,
                success: function(res) {
                    commit('SET_TABLE', res)
                }
            });
        }
    },
    getters: {
        table: state => state.table
    }
}