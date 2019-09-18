/*
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-05-20 21:25:52
 * @LastEditors: caoqinghua
 * @LastEditTime: 2019-09-16 16:40:06
 */
import Cookies from 'js-cookie'

const TokenKey = 'ele_template_token'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}