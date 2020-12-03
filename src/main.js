import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret);

import '@/assets/scss/all.scss';

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router, VueAxios, axios, AOS);
app.mount('#app');
