<!--
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-05-20 21:25:52
 * @LastEditors: caoqinghua
 * @LastEditTime: 2019-09-18 10:04:04
 -->

# ele-template

## Build Setup

```bash
# 克隆项目
git clone https://github.com/cqh52306/ele-template.git

# 进入项目目录
cd ele-template

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:2019](http://localhost:2019)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

## License

[MIT](https://github.com/PanJiaChen/ele-template/blob/master/LICENSE) license.