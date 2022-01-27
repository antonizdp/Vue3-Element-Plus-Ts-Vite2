<template>
  <el-icon class="icons"  @click="changeIcon">
    <component class="icons" :is="status ? 'expand' : 'fold'" />
  </el-icon>
</template>

<script lang='ts' setup>
import { ref,computed } from 'vue'
import {useStore} from '@/store/index'

const store = useStore()
const status = computed(()=>{
  return store.getters['getCollapse']
})
const changeIcon = () => {
  // status.value = !status.value
  store.commit('setCollapse',!status.value)
}
</script>

<style lang='scss' scoped>
.icons {
  display: flex;
  align-items: center;
  font-size: 40px;
  color: #303133;
  cursor: pointer;
  margin-right: 15px;
}
</style>