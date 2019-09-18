/*
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-05-22 15:34:52
 * @LastEditors: caoqinghua
 * @LastEditTime: 2019-09-17 16:21:05
 */
import axios from "axios";
import { Loading, Toast } from "@/utils/toast";
import API from '@/api'

let ajaxIdsMap = {};

const { envInfo } = API

/**
 * 隐藏 loading 处理
 */
function hideLoading(options) {
    delete ajaxIdsMap[options.url];
    if (Object.keys(ajaxIdsMap).length === 0) {
        setTimeout(() => {
            Loading.close();
        }, 100);
    }
}

/**
 * 请求成功处理
 */
function resHandler(response, options) {
    let { returnCode, returnMsg } = response;
    // console.log('返回结果', response)
    hideLoading(options);
    if (returnCode === "000000") {
        options.success && options.success(response.returnData);
    } else {
        options.error && options.error();
        options.showTips && Toast.show(returnMsg);
    }
    return response;
}


/**
 * 检测请求状态
 */
function checkStatus(response, options) {
    try {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    } catch (err) {
        hideLoading(options);
    }
}



/**
 * 请求失败处理
 */
function errHandler(err, options) {
    ajaxIdsMap = {};
    Loading.close();
    let msg = "";
    switch (err.response.status.toString()) {
        case "0":
            msg = "您的网络有问题,请稍后再试。";
            break;
        case "302":
            msg = "临时重定向";
            break;
        case "403":
            msg = "无访问权限";
            break;
        case "404":
            msg = "请求的资源不存在";
            break;
        case "500":
        case "501":
        case "502":
        case "504":
            msg = "服务器内部错误";
            break;
        default:
            msg = "未知错误";
    }
    Toast.show(msg);
    throw err;
}

/**
 * 请求方法
 */
function request(options) {
    let {
        url,
        body = {},
        headers = {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method = "POST",
        showLoading = true, // 显示 loading
        showTips = true, // 现实后端返回错误提示
        success = () => {},
        error = () => {},
        tempAesKey = ''
    } = options;
    // 组装请求地址
    const reqPath = `${envInfo.DOMAIN}${envInfo.CONTEXT}${url}`
    let opts = {
        url: reqPath,
        headers,
        method,
        showLoading,
        showTips,
        success,
        error
    };

    if (method === "POST") {
        opts.data = JSON.stringify(body);
    }

    if (showLoading) {
        ajaxIdsMap[opts.url] = 1;
        Loading.open();
    }
    return axios(opts)
        .then(response => checkStatus(response, opts))
        .then(response => {
            return resHandler(response.data, opts);
        })
        .catch(err => {
            errHandler(err, opts);
        });
}

/**
 * get 请求
 */
export function getRequest(options) {
    return request({ method: "GET", ...options });
}

/**
 * post 请求
 */
export function postRequest(options) {
    return request({ method: "POST", ...options });
}

export function fetch(options) {
    return request({ ...options });
}