import { createApp } from 'vue'
import App from './App.vue'
import Ellipsis from '.'
import '../dist/style.css'

const app = createApp(App)

app.use(Ellipsis)

app.mount('#app')
