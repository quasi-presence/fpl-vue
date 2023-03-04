import { createApp } from 'vue'
import App from './App.vue'

// Pico.css https://picocss.com/
import '@picocss/pico'

// Pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(pinia).mount('#app')
