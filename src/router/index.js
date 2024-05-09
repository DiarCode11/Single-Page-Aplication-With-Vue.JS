import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/Dashboard.vue";
import About from "../views/About.vue";

// Varibel yang menampung jalur website
const routes = [
    { path:'', component: DashboardView },
    { path:'/about', component: About }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router