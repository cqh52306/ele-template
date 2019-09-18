/*
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-05-22 11:24:08
 * @LastEditors: caoqinghua
 * @LastEditTime: 2019-05-22 11:24:08
 */
export function filterEmpty(json, delArry) {
    const obj = {}
    let j
    if (json) {
        for (j in json) {
            if (json[j] !== undefined && json[j] !== '' && json[j] !== null) {
                obj[j] = json[j]
            }
        }
        if (delArry) {
            delArry.map(item => {
                delete obj[item]
            })
        }
    }
    return obj
}