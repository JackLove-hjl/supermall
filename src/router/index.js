import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () =>
    import ('../views/home/home')
const category = () =>
    import ('../views/category/category')
const shopCar = () =>
    import ('../views/shopCar/shopCar')
const mine = () =>
    import ('../views/mine/mine')

Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/category',
        component: category
    },
    {
        path: '/shopCar',
        component: shopCar
    },
    {
        path: '/mine',
        component: mine
    }

]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router