import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/Cart',
    component: Cart
  },
  {
    path: '/Category',
    component: Category
  },
  {
    path: '/Profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history' // 默认hash（url上有#）
})

export default router
