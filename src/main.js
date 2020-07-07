import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'// 引入样式
import './style/index.less' // 引入初始化样式 margin padding li等

// 防止message重复出现
import { message } from './resetMessage/index.js'

Vue.config.productionTip = false
Vue.use(ElementUI) // 全局注册ElementUI组件 任意位置都可以使用
// 将原有的message替换成引入的message
// 调用方式vue.$message.error / warning / success / info('hello')或者this, $message.error({ message: 'hello' })
Vue.prototype.$message = message
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
