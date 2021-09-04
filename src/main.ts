import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/materialdesignicons.min.css';
import './assets/scss/style.scss';
import router from './router';

const app = createApp(App);

app.use(router);
app.mount('#app');
