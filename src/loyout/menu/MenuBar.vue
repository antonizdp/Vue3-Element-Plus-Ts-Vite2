<template>
  <MenuLogo v-if="!isCollapse"></MenuLogo>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#304156"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <MenuItem :menuList="menuList"></MenuItem>
  </el-menu>
</template>

<script  lang="ts" setup>
// setup 语法糖中 定义的数据和方法,直接可以在模板中使用,无需return
import { ref, reactive, computed } from 'vue'
import { useRoute } from 'vue-router';
import {useStore} from '@/store/index'
import MenuItem from './MenuItem.vue';
import MenuLogo from './MenuLogo.vue'
let menuList = reactive([
  {
    path: "/dashboard",
    component: "Layout",
    meta: {
      title: "首页",
      icon: "Watch",
      roles: ["sys:manage"]
    },
    children: []
  },
  {
    path: "/system",
    component: "Layout",
    alwaysShow: true,
    name: "system",
    meta: {
      title: "系统管理",
      icon: "Menu",
      roles: ["sys:manage"],
      parentId: 0
    },
    children: [
      {
        path: "/department",
        component: "/system/department/department",
        alwaysShow: false,
        name: "department",
        meta: {
          title: "机构管理",
          icon: "ZoomOut",
          roles: ["sys:dept"],
          parentId: 17
        }
      },
      {
        path: "/userList",
        component: "/system/User/UserList",
        alwaysShow: false,
        name: "userList",
        meta: {
          title: "用户管理",
          icon: "ZoomOut",
          roles: ["sys:user"],
          parentId: 17
        }
      },
      {
        path: "/roleList",
        component: "/system/Role/RoleList",
        alwaysShow: false,
        name: "roleList",
        meta: {
          title: "角色管理",
          icon: "ZoomOut",
          roles: ["sys:role"],
          parentId: 17
        }
      },
      {
        path: "/menuList",
        component: "/system/Menu/MenuList",
        alwaysShow: false,
        name: "menuList",
        meta: {
          title: "权限管理",
          icon: "ZoomOut",
          roles: ["sys:menu"],
          parentId: 17
        }
      }
    ]
  },
  {
    path: "/goods",
    component: "Layout",
    alwaysShow: true,
    name: "goods",
    meta: {
      title: "商品管理",
      icon: "ZoomOut",
      roles: ["sys:goods"],
      parentId: 0
    },
    children: [
      {
        path: "/goodCategory",
        component: "/goods/goodsCategory/goodsCategoryList",
        alwaysShow: false,
        name: "goodCategory",
        meta: {
          title: "商品分类",
          icon: "ZoomOut",
          roles: ["sys:goodsCategory"],
          parentId: 34
        }
      }
    ]

  }
])

//获得当前路由
const route = useRoute()
const activeIndex = computed(()=>{
  const {path} = route
  return path
})

const store = useStore()
const isCollapse = computed(()=>{
  return store.getters['getCollapse']
})
const handleOpen = (key: string | number, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string | number, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
}
.el-menu{
  border-right: none;
}
:deep(.el-sub-menu .el-sub-menu__title){
  color: #f4f4f5 !important;
}
:deep(.el-menu .el-menu-item){
  color: #bfcbd9;
}
:deep(.el-menu-item.is-active){
  color: #409eff !important;
}
:deep(.is-opened .el-menu-item){
  background-color: #1f2d3d !important;
}
:deep(.el-menu-item:hover){
  background-color: #001528 !important;
}

</style>