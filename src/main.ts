import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.css'
import useRouter from './services/routerRegistration'
import useGlobalComponents from './services/componentsRegistration'
import useGlobalDirectives from './services/directivesRegistration'
import useAxios from './services/axiosRegistration'
import useHead from './services/headRegistration'

const app = createApp(App)

useRouter(app)
useGlobalComponents(app)
useGlobalDirectives(app)
useAxios(app)
useHead(app)

app.mount('#app')
