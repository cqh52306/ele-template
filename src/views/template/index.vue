<!--
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-09-17 11:34:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-09-18 16:08:11
 -->
<template>
  <div>
    <ele-search ref="searchBar" :config="searchBarConfig" :selections="selections" />
    <ele-tables :height="tableHeight" :pagination="pagination" :route-change="handleRouteChange" :config="tablesConfig" :table-data="table"></ele-tables>
    <ele-dialog v-model="visible" :confirmFunc="confirmBtn" title="新增">
      <template slot="dialog-body">
        内容区域
      </template>
    </ele-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import mixins from 'src/mixins/mixins'

const IS_AUTH = [{
  value: 'Y',
  label: '是'
},
{
  value: 'N',
  label: '否'
}]
export default {
  name: "app",
  data () {
    return {
      pagination: {
        pageSize: 20, // 每页显示条目个数
        pageSizes: [20, 50], // 每页显示个数选择器的选项设置
        layout: "total, sizes, prev, pager, next" //, jumper组件布局，子组件名用逗号分隔
      },
      selections: [],
      visible: false,
      searchBarConfig: {
        labelw: "120px",
        searchForm: {
          sources: [
            {
              type: "text",
              label: "姓名",
              value: "",
              prop: "name",
              rules: ""
            },
            {
              type: "text",
              label: "证件号码",
              value: "",
              prop: "certNo",
              rules: ""
            },
            {
              type: "text",
              label: "手机号",
              value: "",
              prop: "mobile",
              rules: ""
            },
            {
              type: "datetimerangeOneMonth",
              label: "开始日期",
              value: "",
              prop: "enterDate",
              rules: ""
            },
            {
              type: "select",
              label: "是否授权",
              value: "",
              prop: "authed",
              rules: "",
              options: IS_AUTH
            }
          ]
        },
        searchBtn: [
          {
            text: "查询",
            icon: "el-icon-search",
            permissions: true,
            onClick: data => {
              this.searchForm = data
              this.toSearch()
            }
          },
          {
            text: "重置",
            icon: "el-icon-refresh",
            permissions: true,
            onClick: data => { }
          }
        ],
        extendBtn: [
          {
            text: "新增",
            icon: "",
            disabled: () => {
              return false
            },
            permissions: true,
            onClick: data => {
              this.openModel()
            }
          }
        ]
      },
      tablesConfig: {
        needPagination: true, // 是否需要分页
        tableRows: [
          { prop: "productName", label: "产品名称" },
          { prop: "name", label: "姓名" },
          { prop: "mobile", label: "手机号", width: 130 },
          { prop: "certNo", label: "身份证号" },
          // {
          //   prop: "startTime",
          //   label: "开始时间",
          //   width: 180,
          //   type: "yy-mm-dd-hh-mm-ss" // 内置两类日期时间格式化yy-mm-dd-hh-mm-ss 和 yy-mm-dd
          // },
          {
            prop: "startTime",
            label: "开始时间",
            width: 180
          },
          {
            prop: "",
            label: "操作",
            width: 60,
            operArr: [
              {
                name: "编辑",
                permission: true,
                openDialog: row => {
                  this.openModel(row)
                }
              }
            ]
          }
        ]
      }
    }
  },
  mixins: [mixins],
  computed: {
    ...mapGetters(['table'])
  },
  created () {
    this.requestBackEndInterface()
  },
  methods: {
    ...mapActions(['getTable']),
    // 请求后端接口
    requestBackEndInterface () {
      const { pageIndex, pageSize } = this.$route.query

      const params = {
        ...this.searchForm,
        pageIndex: pageIndex || 1,
        pageSize: pageSize || 20
      }
      this.getTable(params)
    },
    handleRouteChange (params) {
      const { type } = params
      if (type == "change") {
        this.requestBackEndInterface()
        console.log("参数改变，请求后端接口")
      }
    },
    openDialog () { },
    toSearch () {
      console.log('查询条件', this.searchForm)
    },
    openModel () {
      this.visible = true
    },
    confirmBtn () {
      this.visible = false
      console.log("提交，回调")
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
