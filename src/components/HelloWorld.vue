<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/store'
const store = useStore()
// ref 定义一个响应式数据,在js中值需要.value方式获取
// 在页面上则不需要
const count = ref(0)
const showCount = computed(() => {
  return store.getters['getCount']
})
const addBtn = () => {
  store.commit('setCount', ++count.value)
}
</script>

<template>
  <h1>{{ showCount }}</h1>
  <el-button type="info" @click="addBtn">点击</el-button>
</template>

<style scoped>
</style>
