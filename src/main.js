import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import Vue3Lottie from 'vue3-lottie'
import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

createApp(App).use(router).use(store).use(Vue3Lottie).mount('#app')