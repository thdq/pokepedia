import { createApp } from 'vue'
import App from './App.vue'
import routes from './services/router'

const app = createApp(App)

app.use(routes)

app.mount('#app')
