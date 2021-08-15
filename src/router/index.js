import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由对象
import Home from "@/view/Home/home"
import Login from "@/view/Login/login"
import Register from "@/view/Register/register"
import Search from "@/view/Search/search"

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:Home
  },
  {
    path:"/login",
    component:Login
  },
  {
    path:"/register",
    component:Register
  },
  {
    path:"/search",
    component:Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
