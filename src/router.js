import { createRouter, createWebHistory} from "vue-router";

import AppHome from "./pages/AppHome.vue";
import CarsList from "./pages/CarsList.vue";
import AppNotFound from "./pages/AppNotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            "path" : "/",
            "name" : "home",
            component: AppHome
        },
        {
            "path" : "/car",
            "name" : "Cars",
            component: CarsList
        },
        {
            "path" : "/:catchAll(.*)",
            "name" : "not-found",
            component: AppNotFound
        }
    ]

})

export { router }