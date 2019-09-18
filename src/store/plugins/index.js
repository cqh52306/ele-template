/*
 * @Descripttion: 
 * @version: 
 * @Author: caoqinghua
 * @Date: 2019-05-22 11:22:59
 * @LastEditors: caoqinghua
 * @LastEditTime: 2019-05-22 11:22:59
 */
// 打印日志插件
// import createLogger from 'vuex/dist/logger'

const plugins = [
    store => {
        // 同redux 状态变化会更新到store tree中，触发由store.subscribe()注册的所有listener
        store.subscribe(({ payload }) => {
            if (!payload || !payload.__status__) {
                return
            }
            switch (payload.__status__) {
                case 'pending':
                    break
                case 'success':
                    break
                case 'error':
                    break
                default:
            }
        })
    }
]

// 开发模式打印日志
if (process.env.NODE_ENV === 'development') {
    // 添加到数组起始位置
    // plugins.unshift(createLogger())
}

export default plugins