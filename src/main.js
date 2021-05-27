import { Vue, createApp } from 'vue'
import App from './App.vue'
import VueRouter from '@/router'
import mitt from 'mitt'

const app = createApp(App)

//挂载事务总线
app.config.globalProperties.$bus = new mitt()

app.use(VueRouter)
app.mount('#app')
