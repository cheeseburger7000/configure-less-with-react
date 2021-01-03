# Configure Less with React

在学习 Less 的语法时, 想结合 React 一起练习, 但是苦恼 Less 无法直接在 create-react-app 搭建的 React 开发环境中直接使用. 我在网上搜索🔍到里一篇挺好的 Less 和 React 的配置[文章](https://medium.com/@sunilkumarbanjare/configure-less-with-ant-design-in-react-ba238faedb39), 但需要引入 [antd](https://ant.design/components/overview/).(虽然我平时开发也是使用antd, 但是我更喜欢 Material-UI 😄)

## 配置的大致流程

安装依赖

```bash
npm install antd @craco/craco craco-antd craco-less less-loader --save
```

项目根路径创建 `craco.config.js`

```js
const CracoLessPlugin = require('craco-less')

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]
};
```

修改 `package.json`

```json
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },
```

引入 antd.less 测试搭建结果

```less
@import ‘~antd/dist/antd.less’;
```

## 运行项目

```bash
npm install

npm run start
```