/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-20 21:25:52
 * @LastEditTime: 2019-05-20 21:25:52
 * @LastEditors: your name
 */
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
    const valid_map = ['admin', 'editor']
    return valid_map.indexOf(str.trim()) >= 0
}