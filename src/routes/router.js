
import { createRouter, createWebHistory } from 'vue-router'


import Home from '../pages/Home'
import Article from '../pages/Article'

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
    }
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router