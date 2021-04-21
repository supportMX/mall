import { createRouter, createWebHistory } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Cart = () => import('views/cart/Cart.vue')
const Profile = () => import('views/profile/Profile.vue')

const routes = [
    {
        path: '/',
        name: 'Home1',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/category',
        name: 'Category',
        component: Category,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
]

const Router = createRouter({
    history: createWebHistory(),
    routes,
})

export default Router
