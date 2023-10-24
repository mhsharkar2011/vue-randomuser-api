import './assets/main.css'
import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const app = Vue.createApp({
    data() {
        return {
            firstName:'hello'
        }
    },
});
app.mount("#app")