<template>
  <el-container class="layout">
    <el-aside width="auto" class="asside">
      <MenuBar></MenuBar>
    </el-aside>
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-main class="main">
        <Tabs></Tabs>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Header from './header/Header.vue';
import MenuBar from './menu/MenuBar.vue';
import Tabs from './tabs/Tabs.vue';
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  .asside {
    background-color: rgb(48, 65, 86);
  }
  .header {
    height: 50px;
    border-bottom:1px solid #e5e5e5;
    display: flex;
    align-items: center;
  }
  .main {
    padding-top: 0;
    // background-color: darkgray;
  }
}
</style>