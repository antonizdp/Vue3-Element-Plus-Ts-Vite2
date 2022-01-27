<template>
  <el-tabs v-model="activeTab" @tab-click="clickBtn" type="card" closable @tab-remove="removeTab">
    <el-tab-pane v-for="item in tabsList" :key="item.path" :label="item.title" :name="item.path"></el-tab-pane>
  </el-tabs>
</template>

<script lang='ts' setup>
import { ref, reactive, computed, watch,onMounted } from 'vue'
import { useStore } from '@/store'
import { useRoute, useRouter } from 'vue-router';
import { ITabe } from '@/store/type';
const store = useStore()
const route = useRoute()
const router = useRouter()

// 获取tabs数据
const tabsList = computed(() => {
  return store.getters['getTabs']
})
//当前激活的选项卡
const activeTab = ref('2')
const setActiveTab = () => {
  activeTab.value = route.path
}

//删除选项卡
const removeTab = (targetName: string) => {
  if(targetName === '/dashboard') return
  if(store.state.tabsList.length === 1) return
  //选项卡数据
  const tabs = tabsList.value
  let activeName = activeTab.value
  if (activeName === targetName) {
    tabs.forEach((tab: ITabe, index: number) => {
      if (tab.path === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.path
        }
      }
    })
  }
  //重新设置当前激活的选项卡
  activeTab.value = activeName
  //重新设置选项卡数据
  store.state.tabsList = tabs.filter((tab: ITabe) => tab.path !== targetName)
  //跳转路由
  router.push({path:activeName})
}

//点击选项卡
const clickBtn = (tab: any) => {
  const { props } = tab
  //跳转路由
  router.push({ path: props.name })
}

//添加选项卡
const addTab = () => {
  const { path, meta } = route
  const tab: ITabe = {
    path: path,
    title: meta.title as string
  }
  store.commit('addTabe', tab)
}

//监听路由的变化
watch(() => route.path, () => {
  //设置激活的选项卡
  setActiveTab()
  //把当前路由添加到选项卡数据
  addTab()
})

//解决刷新数据丢失的问题
const beforRefresh =  () =>{
  window.addEventListener("beforeunload",()=>{
    sessionStorage.setItem('tabsView',JSON.stringify(tabsList.value))
  })
  let tabSession = sessionStorage.getItem('tabsView')
  if(tabSession){
    let oldTabs = JSON.parse(tabSession)
    if(oldTabs.length>0){
      store.state.tabsList = oldTabs
    }
  }
}

onMounted(()=>{
  beforRefresh()
  setActiveTab()
  addTab()
})

</script>

<style lang='scss' scoped>
</style>