# vue-front-nuxt

#### 介绍

谷粒学院（前端用户页面vue）
 始于2022/2.20 ----2022/4/12

```
@Author treeRoot
```

#### 软件架构

本仓库使用https://gitee.com/xu-genyin/guli-parent/ 作为接口为用户页面


#### 安装教程

```shell
git clone git@gitee.com:xu-genyin/vue-front-nuxt.git
```

#### 或者

```shell
git clone https://gitee.com/xu-genyin/vue-front-nuxt.git
```

#### 运行方式

```shell
npm run dev
```

#### 您所需要的环境

node -v：v12.22.11
vue-cli：2.9.6
vue:  2.5.17
vue-router:  3.0.1
vuex: 3.0.1
axios: 0.18.0
echarts: 4.1.0
element-ui: 2.4.6
js-cookie:  2.2.0

#### 项目使用的前端技术

使用了Nuxt轻量级框架
使用node成为js的一个运行环境，将前端部署在node上

> Nuxt也就是服务器渲染技术也可以充当静态站点引擎，它可以很好的解决SEO问题，SEO简称（搜索引|擎优化）
> 比如说我前端显示一张图片，是通过ajax异步请求得到数据的，抓取工具并不会等待异步完成后才对页面内容进行抓取。
> 而用服务器渲染技术，我们无需等待所有的s加载完后执行，而是在服务端中通过nodejs将我们查询出来的数据全部封裝，
> 然后一次性返回到前端获得更快的内容到达时间，这就是NUXT的简单操作流程，而且都是在服务端中实现的。

#### axios拦截器

axios的拦截器特性

1) request请求拦截
当我们请求的时候会检查cookie中是否有token如果有就将token设置进request的head当中，发送到服务端做单点登录的逻辑处理。
2)  response响应拦截做一个全局异常处理
  拦截每一个响应信息，判断状态码是否正常，如果返回报错状态码，用弹窗的形式给用户展现友好的信息，如果正常就将response返回给
  后面业务使用。

#### NPM

包管理工具，类似Maven

1. vue
   **基本语法**
   **相关指令**：v-bind，单向绑定
   v-model，双向绑定，
   v-if，v-for，v-html
   **生命周期** ：created()页面渲染之前执行，mounted()页面渲染之后执行。
2. Element-ui
3. Nodejs：是JS的运行环境，不需要浏览器直接运行js代码，模拟服务器效果
4. NPM：包管理工具（js依赖），类似于Maven（jar包依赖）
5. Babel：转码器，把ES6的代码转换成ES5代码
6. 前端模块化：一个JS引入另一个JS并调用方法
7. 后台系统使用vue-admin-template，基于vue+Element-ui
8. 前台系统使用Nuxt，基于vue，服务端渲染技术
9. Echarts，图标工具

#### 参与贡献

- Fork 本仓库
- 新建 Feat_xxx 分支
- 提交代码
- 新建 Pull Request

#### other

自我介绍：

常州信息大二移动互联学生

谷粒学院是鄙人第一次独立前后端分离作品

也是值得纪念的..以及纪念的...

#### 爱我的话给我回答

<球球了，OSS还有视频点播很耗钱的，大学生真的支撑不起，你们使用该套源码可能会直接访问我资源烧钱的>

<img src="https://cdn.jsdelivr.net/gh/xuXian0425/phpotoBed@main/1649739946938wx.jpg" style="zoom: 25%;" />

<img src="https://cdn.jsdelivr.net/gh/xuXian0425/phpotoBed@main/1649739954949zfb.jpg" style="zoom:25%;" />

#### 期待下次更新

https://gitee.com/gitee-stars/)
