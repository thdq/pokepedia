import { createApp } from 'vue'
import App from './App.vue'
import routes from './services/router'
import './styles/index.css'
import useGlobalComponents from './services/componentsRegistration'

const app = createApp(App)

app.use(routes)
useGlobalComponents(app)

app.mount('#app')
