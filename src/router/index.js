//src/router/index.js  配置路由对象
//1:引入vue模块
import Vue from "vue"
//2:引入vuerouter模块
import VueRouter from "vue-router"
//3:引入首页组件
import MSite from "../pages/Msite/Msite.vue"
import Profile from "../pages/Profile/Profile.vue"
import Search from "../pages/Search/Search.vue"
import Order from "../pages/Order/Order.vue"
//4:注册vuerouter模块
Vue.use(VueRouter)
//5:创建路由字典:完成组件与路由之间的映射关系
export default new VueRouter({
    //配置路由与组件之间映射关系
    routes:[
        //添加一个重定向路由
        {path:"/",redirect:"/msite"}, //添加默认路由
        {path:"/msite",component:MSite},
        {path:"/order",component:Order},
        {path:"/profile",component:Profile},
        {path:"/search",component:Search}
    ]
})