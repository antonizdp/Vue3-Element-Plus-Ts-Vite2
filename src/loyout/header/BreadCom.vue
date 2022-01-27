<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in tabs" :to="{ path: item.path }">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang='ts' setup>
import { ref, reactive,watch ,Ref} from 'vue'
import { RouteLocationMatched, useRoute } from 'vue-router'
// 定义面包屑导航数据
const tabs :Ref<RouteLocationMatched[]> = ref([])

const route = useRoute()
const getBreadCom = () => {
  let mached = route.matched.filter(item => item.meta && item.meta.title)
  //判断第一个是否是首页,如果不是 构造一个
  const first = mached[0]
  if (first.path !== '/dashboard') {
    mached = [{ path: '/dashboard', meta: { title: '首页' } } as any].concat(mached)
  }
  tabs.value = mached
}
getBreadCom()
// 监听路由发生变化,重新获取面包屑导航数据
watch(()=>route.path,()=>getBreadCom())
</script>

<style lang='scss' scoped>
</style>