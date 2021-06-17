import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/home/home.vue'
import NotFound from '../pages/notfound/notfound.vue'
import Generations from '../pages/generations/generations.vue'

const routes: RouteRecordRaw[] = [
    {
        path: "",
        component: Home
    },
    {
        path: "/generations",
        component: Generations
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "not-found"
    },
    {
        path: "/not-found",
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
