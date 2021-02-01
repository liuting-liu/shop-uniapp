import Vue from 'vue'
import App from './App'

//引入路由组件配置
import router from "./router"
new Vue({
  el: '#app',
  render:h=>h(App),
  router
})
