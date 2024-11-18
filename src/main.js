import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide'


const app = createApp(App).use(VueSplide)

app.use(router)

app.mount('#app')
