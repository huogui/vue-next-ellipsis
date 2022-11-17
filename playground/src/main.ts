import { createApp } from 'vue'
import './style.css'
// import Ellipsis from 'vue-next-ellipsis'
import Ellipsis from '../../src/index'
import 'vue-next-ellipsis/dist/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(Ellipsis)

app.mount('#app')
