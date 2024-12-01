import 'bootstrap/dist/css/bootstrap.css'
import 'lib-flexible'
import 'amfe-flexible'
import './util/rem'    
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.mount('#app')
