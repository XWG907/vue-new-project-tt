import layoutAside from './home/layout-aside.vue'
import layoutHeader from './home/layout-header.vue'
// 所有自定义组件的插件
export default {
  install: function (Vue) {
    Vue.component('layout-aside', layoutAside) // 注册 左侧导航组件
    Vue.component('layout-header', layoutHeader)// 注册 头侧导航组件
  }
}

// Vue.use(对象)    就是调用对象的   install()方法
