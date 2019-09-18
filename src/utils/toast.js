/*
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-09-16 14:23:26
 * @LastEditors: caoqinghua
 * @LastEditTime: 2019-09-17 17:28:37
 */
import { Toast as toast, Loading as loading, Notification } from 'element-ui';
let loadoing = {}
const options = {
    fullscreen: true
}

export let Loading = {
    open(message) {
        loadoing = loading.service(options)
    },
    close() {
        loadoing.close();
    }
};

export let Toast = {
    show(message) {
        // zaToast(message);
        Notification.success({
            title: title || '提示',
            message: msg,
        })
    },
    success(message) {
        // zaToast({
        //     message: message || "操作成功",
        //     iconClass: "icon icon-success"
        // });
    }
};