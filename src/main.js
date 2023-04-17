import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { useREM } from './utils/flexible'
import mLibs from './libs'
import 'virtual:windi.css'
import store from './store'
import useTheme from './utils/theme'
import mDirective from './directives'
import './permission'

// 注册svg-icons
import 'virtual:svg-icons-register'

useREM()
// 初始化主题
useTheme()
createApp(App).use(router).use(store).use(mLibs).use(mDirective).mount('#app')
