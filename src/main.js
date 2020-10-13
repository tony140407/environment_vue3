import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.vue';
import router from './router';

import '@/assets/scss/all.scss';

createApp(App)
  .use(router, VueAxios, axios, AOS)
  .mount('#app');
