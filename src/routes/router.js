
import { createRouter, createWebHistory } from 'vue-router'


import Home from '../pages/Home'
import Article from '../pages/Article'
import Login from '../pages/Login.vue'
import CriarConta from '../pages/CriarConta.vue'
import SobreNos from '../pages/SobreNos.vue'
import Contato from '../pages/Contato.vue'

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
    },
    {
        path: '/SobreNos',
        name: 'SobreNos',
        component: SobreNos
    },
    {
        path: '/Contato',
        name: 'Contato',
        component: Contato
    }
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router