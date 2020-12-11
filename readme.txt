mock 服务搭建
  mock服务搭建
  1. npm i mocker-api -D   // 主要基于mocker-api
  2. 在 package.json 添加mock启动服务 默认port = 3721,可在mock的 index.js 入口中进行调整
    "scripts": {
        ...
        "mock": "mocker ./mock" 
    }
  3. 在项目根目录创建mock目录
    |--
      |--mock
        |--mock-data // 在mock-data中后端路由接口,这里我将不同的接口定义到对应.js文件中进行分类
          |--template.js // 路由定义模板
          |--user.js 
          ...
        |--index.js // mock服务入口
        |--utils.js // 定义辅助方法模块
      |--src
      ...
  4.启动
    npm run mock
  5.更多配置请自行在npm中搜索mocker-api
css初始化
  normalize.css
移动端适配
  postcss-px-to-viewport
登陆登出功能完成
  基于token


