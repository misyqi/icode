import svgIcon from './svg-icon/index.vue'
import popup from './popup/index.vue'
import { defineAsyncComponent } from 'vue'

export default {
    install(app){
        app.component('m-svg-icon',svgIcon)
        app.component('m-popup',popup)
        const components =   import.meta.glob('./*/index.vue')
        for(const [fullPath,fn] of Object.entries(components)){
        const componentName = 'm-' + fullPath.replace('./','').split('/')[0]
        app.component(componentName,defineAsyncComponent(fn))
      }
    }
}