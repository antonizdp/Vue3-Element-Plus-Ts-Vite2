import { createApp, createVNode } from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import {store,key} from '@/store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//统一导入el-icon图片
import * as Icons from '@element-plus/icons-vue'

const app =createApp(App)
app.use(router)
.use(store,key)
.use(ElementPlus)
.mount('#app')

//方式一
Object.keys(Icons).forEach((key)=>{
  app.component(key,Icons[key as keyof typeof Icons])
})

////方式二
// const Icon = (props:{icon:string}) =>{
//     const {icon} = props;
//     return createVNode(Icons[icon as keyof typeof Icons])
// }
// app.component('Icon',Icon)