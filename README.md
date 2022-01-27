# Vue3-Element-Plus-Ts-Vite2

## Vite 需要node.js版本 >=12.0.0

## 创建项目

```txt
npm init vite@latest
npm install
npm run build
npm run dev
```

## 解决"vite use `--host` to expose"

```txt
server:{
    host:'0.0.0.0',
    port:8080,
    open:true
  }
```

## vite配置别名

```txt
npm i @types/node --save-dev

resolve:{
    alias:[
      {
        find:'@',
        replacement:resolve(__dirname,"src")
      }
    ]
  }

tsconfig.json
"skipLibCheck": true, // 解决打包报`vue-tsc --noEmit && vite build`的错,忽略所有的声明文件(*.d.ts)的类型检查
    "baseUrl": ".",
    "paths": {
      "@/*":[
        "src/*"
      ]
    }
// ts 排除的文件
"exclude": ["node_modules"]
```

## 安装路由 4.x
```
插件安装
禁用Vetur
安装Vue Language Features (Volar)
安装Element UI Snippets
```
```txt
npm i vue-router@4
src/router/index.ts
```

## 安装VueX 4.x
```
npm i vuex@next --save
src/store/index.ts
```

## 安装eslint,sass
```
npm install --save-dev eslint-plugin-vue
新建 .eslintrc.js
module.exports = {
  root:true,
  parserOptions:{
    sourceType:'module'
  },
  parser:'vue-eslint-parser',
  extends:['plugin:vue/vue3-essential','plugin:vue/vue3-strongly-recommended','plugin:vue/vue3-recommended'],
  env:{
    browser:true,
    node:true,
    es6:true
  },
  rules:{
    'no-console':'off',
    'comma-dangle':[2,'never']//禁止使用拖尾逗号
  }
}

npm i -D sass sass-loader
```

## 安装Element-plus
```
npm install element-plus --save

全部引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

按需导入
自动导入
npm install -D unplugin-vue-components unplugin-auto-import
```
### vite
```ts
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default {
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```

### Webpack
```js
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```


## 主页面布局
```
@/components/HelloWorld.vue
```

## Element Plus图标
```txt
npm i @element-plus/icons
npm uninstall @element-plus/icons
import {Fold} from '@element-plus/icons'

<el-icon>
  <Fold/>
</el-icon>
```

```
treer -e ./result.txt -i node_modules
```
