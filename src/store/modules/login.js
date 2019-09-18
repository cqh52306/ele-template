/*
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-05-22 11:22:59
 * @LastEditors: caoqinghua
 * @LastEditTime: 2019-09-17 17:30:02
 */
import { fetch } from 'src/utils/fetch'
import API from '@/api'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

export default {
    state: {
        token: getToken(),
        name: '',
        avatar: ''
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        }
    },
    actions: {
        // 登录
        userLogin: ({ state, commit }, query) => {
            fetch({
                url: API.login,
                showTips: true,
                encrypt: true, // 预留是否开启加密
                body: query.params,
                success: function(res) {
                    commit('SET_TOKEN', res.token)
                    setToken(res.token)
                    query.cb && query.cb(res)
                }
            });
        },
        // 获取用户信息
        getInfo: ({ state, commit }, query) => {
            const params = {
                token: state.token
            }
            fetch({
                url: API.info,
                showTips: true,
                encrypt: true, // 预留是否开启加密
                body: params,
                success: function(res) {
                    commit('SET_NAME', res.name)
                }
            });
        },
        // user logout
        logout({ commit, state }, query) {
            const params = {
                token: state.token
            }
            fetch({
                url: API.logout,
                showTips: true,
                encrypt: true, // 预留是否开启加密
                body: params,
                success: function(res) {
                    commit('SET_TOKEN', '')
                    removeToken()
                    resetRouter()
                    query.cb && query.cb(res)
                }
            });
        },
        // remove token
        resetToken({ commit }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            })
        }
    },
    getters: {
        token: state => state.token,
        avatar: state => state.avatar,
        name: state => state.name
    }
}