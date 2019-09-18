/*
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-05-22 11:22:59
 * @LastEditors: caoqinghua
 * @LastEditTime: 2019-09-17 15:06:23
 */
import API from '@/api'
import Cookies from 'js-cookie'

const { envInfo } = API

export default {
    state: {
        sidebar: {
            opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
            withoutAnimation: false
        },
        device: 'desktop'
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            state.sidebar.opened = !state.sidebar.opened
            state.sidebar.withoutAnimation = false
            if (state.sidebar.opened) {
                Cookies.set('sidebarStatus', 1)
            } else {
                Cookies.set('sidebarStatus', 0)
            }
        },
        CLOSE_SIDEBAR: (state, withoutAnimation) => {
            Cookies.set('sidebarStatus', 0)
            state.sidebar.opened = false
            state.sidebar.withoutAnimation = withoutAnimation
        },
        TOGGLE_DEVICE: (state, device) => {
            state.device = device
        }
    },
    actions: {
        toggleSideBar({ commit }) {
            commit('TOGGLE_SIDEBAR')
        },
        closeSideBar({ commit }, { withoutAnimation }) {
            commit('CLOSE_SIDEBAR', withoutAnimation)
        },
        toggleDevice({ commit }, device) {
            commit('TOGGLE_DEVICE', device)
        }
    },
    getters: {
        sidebar: state => state.sidebar,
        device: state => state.device
    }
}