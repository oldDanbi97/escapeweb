import { createApp } from 'vue'
import { router } from './router';
import store from "./store";

import App from './App.vue'
import '@/assets/css/reset.scss';
import '@/assets/css/imBackendDeveloper.scss';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(ElementPlus);

/* add icons to the library */
library.add(fas);
library.add(far);
library.add(fab);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');