import { App } from 'vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NotFound from '../pages/notfound/notfound.vue'
import Generations from '../pages/generations/generations.vue'
import Generation from '../pages/generation/generation.vue'
import Pokedex from '../pages/pokedex/pokedex.vue'

export default (app: App): void => {

    const routes: RouteRecordRaw[] = [
        {
            path: "",
            redirect: "/generations"
        },
        {
            path: "/generations",
            component: Generations
        },
        {
            path: "/pokedex",
            component: Pokedex
        },
        {
            path: "/generation/:id",
            component: Generation
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

    app.use(router)


}


