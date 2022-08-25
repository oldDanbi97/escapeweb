import { createApp } from 'vue'
import { router } from './router';
import store from "./store";

import App from './App.vue'
import '@/assets/css/reset.scss';
import '@/assets/css/imBackendDeveloper.scss';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);

app.use(router);
app.use(store);
app.use(ElementPlus);
app.mount('#app');