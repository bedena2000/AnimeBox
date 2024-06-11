import { createApp } from 'vue'
import App from './App.vue'
import { router } from "@/router/index.js";
import { createPinia } from "pinia";
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(PrimeVue);

app.mount('#app');
