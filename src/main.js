import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { useREM } from './utils/flexible'
import mLibs from './libs'
import 'virtual:windi.css'

// 注册svg-icons
import 'virtual:svg-icons-register'

useREM()
createApp(App).use(router).use(mLibs).mount('#app')
