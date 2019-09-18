/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-22 11:20:35
 * @LastEditTime: 2019-09-18 15:11:06
 * @LastEditors: Please set LastEditors
 */
import $ from 'jquery'

function getTableHeight() {
    const content = $('#content')
    // 存在才计算高度
    if (content && content.height()) {
        const content_height = content.height()
        // .position().top
        $('.case-view').height(content_height - 54)
        const tableOffsetTop = $('.el-table').offset() ? $('.el-table').offset().top : 0
        const lastHeight = content_height - tableOffsetTop - 50
        return lastHeight > 300 ? lastHeight : 300
    } else {
        return 300
    }
}

export default {
    data() {
        return {
            tableHeight: 300
        }
    },
    methods: {
        mixinsSetTabelHeight(arg) {
            setTimeout(() => {
                this.tableHeight = getTableHeight()
                console.log(this.tableHeight)
            }, 100)
        }
    },
    mounted() {
        this.mixinsSetTabelHeight('mounted')
    },
    updated() {
        this.mixinsSetTabelHeight('updated')
    }
}