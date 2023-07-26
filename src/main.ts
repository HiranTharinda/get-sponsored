import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import Vue3Lottie from 'vue3-lottie'
import axios from "axios";
import { createHead } from '@vueuse/head';
import VueGtag from "vue-gtag";

const head = createHead()
axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL

createApp(App)
    .use(VueGtag, {
        config: { id: import.meta.env.VITE_APP_G_TAG }
    })
    .use(router)
    .use(head)
    .use(store)
    .use(Vue3Lottie)
    .mount('#app')