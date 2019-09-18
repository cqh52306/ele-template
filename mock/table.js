/*
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-05-20 21:25:52
 * @LastEditors: caoqinghua
 * @LastEditTime: 2019-09-17 17:14:01
 */
import Mock from 'mockjs'

const data = Mock.mock({
    'items|20': [{
        id: '@id',
        title: '@sentence(10, 20)',
        'productName|1': ['腾讯', '阿里', '百度', '京东', '顺丰'],
        'name|1': ['张三', '李四'],
        'status|1': ['published', 'draft', 'deleted'],
        certNo: '3101011995030*****',
        author: 'name',
        mobile: '185****3322',
        data: '@date',
        startTime: '@datetime',
        pageviews: '@integer(300, 5000)'
    }]
})

export default [{
    url: '/table/list',
    type: 'post',
    response: config => {
        const items = data.items
        const res = {
            list: items,
            rowCount: items.length + 10,
        }

        return {
            returnCode: '000000',
            returnData: res
        }
    }
}, ]