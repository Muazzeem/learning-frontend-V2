import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css';
import './assets/css/css-purpose.css';
import './assets/css/css-all.min.css';
import './assets/css/dist-jquery.fancybox.min.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
