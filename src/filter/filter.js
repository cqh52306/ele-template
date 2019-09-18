/*
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-05-22 11:20:35
 * @LastEditors: caoqinghua
 * @LastEditTime: 2019-09-17 17:33:34
 */
import Vue from 'vue'

Vue.mixin({
    data() {
        return {
            // siteId: __SITE_ID__
        }
    },
    methods: {
        getLabel(objs, val) {
            for (var i = 0, len = objs.length; i < len; ++i) {
                if (objs[i].value == val) {
                    return objs[i].label
                }
            }
            return ''
        },
        // sendData: function(asm, txt) {
        //     return true
        // },
        UrlEncode: function(str) {
            var ret = ''
            var strSpecial = '!"#$%&\'()*+,/:;<=>?[]^`{|}~%'
            var tt = '' // eslint-disable-line
            for (var i = 0; i < str.length; i++) {
                var chr = str.charAt(i)
                var c = str2asc(chr)
                tt += chr + ':' + c + 'n'
                if (parseInt('0x' + c) > 0x7f) {
                    ret += '%' + c.slice(0, 2) + '%' + c.slice(-2)
                } else {
                    if (chr == ' ') {
                        ret += '+'
                    } else if (strSpecial.indexOf(chr) != -1) {
                        ret += '%' + c.toString(16)
                    } else {
                        ret += chr
                    }
                }
            }
            return ret
        }
    }
})