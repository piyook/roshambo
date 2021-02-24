import { createApp } from 'vue';
import App from './App.vue'
import router from './router';
import store from './store';


import 'bootswatch/dist/superhero/bootstrap.css';

import AlertModal from '@/components/Global/AlertModal';
import LoadSpinner from '@/components/Global/LoadSpinner';

const app = createApp(App);

app.use(store)
    .use(router)
    .component('alert-modal', AlertModal)
    .component('load-spinner', LoadSpinner)

app.mount('#app')
