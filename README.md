# react-admin-manage
a management system using react+antd

[在线演示：https://echovic.github.io/react-admin-manage/build/index](https://echovic.github.io/react-admin-manage/build/index)

### 依赖模块

- [react@15.5.0](https://facebook.github.io/react/)
- [react-router@3.0.2](https://react-guide.github.io/react-router-cn/)
- [antd@2.9.3](https://ant.design/index-cn)(<span style="color: rgb(243,121,52);">蚂蚁金服开源的react ui组件框架</span>)
- [axios@0.16.1](https://github.com/mzabriskie/axios)(<span style="color: rgb(243,121,52);">http请求模块，可用于前端任何场景，很强大</span>)
- [echarts-for-react@1.2.0](https://github.com/hustcc/echarts-for-react)(<span style="color: rgb(243,121,52);">可视化图表，别人基于react对echarts的封装，足够用了</span>)
- [recharts@0.22.3](http://recharts.org/#/zh-CN/)(<span style="color: rgb(243,121,52);">另一个基于react封装的图表，个人觉得是没有echarts好用</span>)
- [nprogress@0.2.0](https://github.com/rstacruz/nprogress)(<span style="color: rgb(243,121,52);">顶部加载条</span>)
- [react-draft-wysiwyg@1.9.6](https://github.com/jpuri/react-draft-wysiwyg)(<span style="color: rgb(243,121,52);">别人基于react的富文本封装，如果找到其他更好的可以替换</span>)
- [react-draggable@2.2.4](https://github.com/mzabriskie/react-draggable)(<span style="color: rgb(243,121,52);">拖拽模块，找了个简单版的</span>)
- [screenfull@3.2.0](https://github.com/sindresorhus/screenfull.js/)(<span style="color: rgb(243,121,52);">全屏插件</span>)
- [photoswipe@4.1.2](https://github.com/dimsemenov/photoswipe)(<span style="color: rgb(243,121,52);">图片弹层查看插件，不依赖jQuery，还是蛮好用👍</span>)
- [animate.css@3.5.1](http://daneden.me/animate)(<span style="color: rgb(243,121,52);">css动画库</span>)

### 代码目录
```js
+-- build/                                  ---打包的文件目录
+-- config/                                 ---npm run eject 后的配置文件目录
+-- node_modules/                           ---npm下载文件目录
+-- public/
|   --- index.html							---首页入口html文件
|   --- npm.json							---echarts测试数据
|   --- weibo.json							---echarts测试数据
+-- src/                                    ---核心代码目录
|   +-- axios                               ---http请求存放目录
|   |    --- index.js
|   +-- components                          ---各式各样的组件存放目录
|   |    +-- animation                      ---动画组件
|   |    |    --- ...
|   |    +-- charts                         ---图表组件
|   |    |    --- ...
|   |    +-- dashboard                      ---首页组件
|   |    |    --- ...
|   |    +-- forms                          ---表单组件
|   |    |    --- ...
|   |    +-- pages                          ---页面组件
|   |    |    --- ...
|   |    +-- tables                         ---表格组件
|   |    |    --- ...
|   |    +-- ui                             ---ui组件
|   |    |    --- ...
|   |    --- BreadcrumbCustom.jsx           ---面包屑组件
|   |    --- HeaderCustom.jsx               ---顶部导航组件
|   |    --- Page.jsx                       ---页面容器
|   |    --- SiderCustom.jsx                ---左边菜单组件
|   +-- style                               ---项目的样式存放目录，主要采用less编写
|   +-- utils                               ---工具文件存放目录
|   --- App.js                              ---组件入口文件
|   --- index.js                            ---项目的整体js入口文件，包括路由配置等
--- .env                                    ---启动项目自定义端口配置文件
--- .eslintrc                               ---自定义eslint配置文件，包括增加的react jsx语法限制
--- package.json
```
### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9999
npm start

# build for production with minification
npm run build
```