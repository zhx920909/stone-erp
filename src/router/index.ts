import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

import type { App } from 'vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/About.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/Register.vue'),
        },
    ],
})

export default router

export function setupRouter(app: App) {
    app.use(router)
}
