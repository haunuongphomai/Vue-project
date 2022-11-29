import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },

    {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/Register.vue')
    },

    {
        path: '/add',
        name: 'Add',
        component: () => import('@/views/Add.vue')
    },
    {
        path: '/modify',
        name: 'Modify',
        component: () => import('@/views/Modify.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Authentication check
        const token = localStorage.getItem('token')
        if (token) {
            // Check if token is valid
            return next()
        }

        return next('/login')
    }

    next()
})

export default router