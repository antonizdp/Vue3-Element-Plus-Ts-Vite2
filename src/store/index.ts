import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { ITabe } from './type';

export interface State {
  count: number,
  collapse: boolean,
  tabsList: Array<ITabe>
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
    collapse: false,
    tabsList: []
  },
  mutations: {
    setCount(state: State, count: number) {
      state.count = count
    },
    setCollapse(state: State, collapse: boolean) {
      state.collapse = collapse
    },
    addTabe(state: State, tab: ITabe) {
      // 判断是否已经存在,如果不存在,才放入
      if(state.tabsList.some(item => item.path === tab.path)) return;
      state.tabsList.push(tab)
    }
  },
  getters: {
    getCount(state: State) {
      return state.count
    },
    getCollapse(state: State) {
      return state.collapse
    },
    // 获取Tabs
    getTabs(state: State) {
      return state.tabsList
    }
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key)
}