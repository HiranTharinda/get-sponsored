import ScrollBody from "../views/ScrollBody.vue";
import CompanySponsor from "../views/CompanySponsor.vue";
import WhyDoThis from "../views/WhyDoThis.vue";
import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/",
        name: "Home",
        component: ScrollBody,
    },
    {
        path: "/companies",
        name: "Companies",
        component: CompanySponsor,
    },
    {
        path: "/why",
        name: "Why",
        component: WhyDoThis,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;