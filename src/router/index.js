import ScrollBody from "../components/ScrollBody.vue";
import CompanySponsor from "../components/CompanySponsor.vue";
import WhyDoThis from "../components/WhyDoThis.vue";
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