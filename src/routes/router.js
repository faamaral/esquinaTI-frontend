
import { createRouter, createWebHistory } from 'vue-router'


import Home from '../pages/Home'
import Article from '../pages/Article'
import Login from '../pages/Login.vue'
import CriarConta from '../pages/CriarConta.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/article/:id',
        name: 'Article',
        component: Article
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/CriarConta',
        name: 'CriarConta',
        component: CriarConta
    }
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router