#一个学习JavaScript数据结构的例子


### 使用说明

* 依赖node环境 
* 先执行`(c)npm install` 安装依赖文件
* 开发环境执行`npm run dev`
* 生产环境执行`npm run pro`

### dist目录

* 同时生成了dist目录，即生产环境下打包后的代码，可以直接访问看到最终效果（需要http服务）
* 启动http服务的方法很多，方便的话可以使用node插件http-server 
* 执行`(c)npm install http-server -g` 全局安装
* 进入dist目录执行 `http-server`(默认端口8080)，关于[http-server](https://www.npmjs.com/package/http-server)
* 如果不冲突的话，浏览器`http://127.0.0.1:8080/`即可看到效率，（ui有点丑）


### 更新说明

#### 2017-05-05

* 增加集合
* 增加树（二叉树）
* 统一配置路由前置钩子

#### 2017-04-21

* 增加散列类目

#### 2017-04-20

* 增加 `clean-webpack-plugin` 插件用以每次执行生产打包时删除上一次的文件
* 增加字典类目
* 增加队列类目

#### 2017-04-19

* 增加栈类目

#### 2017-04-14

* 新增一些公用组件如，弹层，loading等
* 增加数组类目
* 增加列表类目

#### 2017-04-10

* 新增链表类目，包含链表概述，创建简单链表，创建循环链表，双向链表，链表实例应用
* 新增node服务，给前端提供接口，这里主要是node格式化代码文本，以方便前端高亮展示

#### 2017-04-01
* 初始化webpack构建
* 初始化readme