import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
require('@/store/subscriber')

store.dispatch('auth/attempt', localStorage.getItem('access_token')).then(() => {
    createApp(App).use(store).use(router).mount('#app')
})

const app = createApp(App);
app.use(VueSweetalert2);

//createApp(App).use(store).use(router).mount('#app');
