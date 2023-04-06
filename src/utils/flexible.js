import { PC_DEVICE_WIDTH } from "../constants"
import { computed } from "vue"
import { useWindowSize } from "@vueuse/core"


const { width } = useWindowSize()
// 判断当前是否为移动设备，判断依据为屏幕宽度
export const isMobileTerminal =computed(() =>{
    return width.value < PC_DEVICE_WIDTH
})



// 动态指定rem基准值 最大为40px
// 根据用户的屏幕宽度进行一些计算
export const useREM = ()=>{
    // 定义最大的fontSize
    const MAX_FONT_SIZE = 40
    // 监听html文档被解析完成的事件
    const html = document.querySelector('html')
    // 计算fontSize 根据屏幕宽度 /10
    let fontSize = window.innerWidth /10
    fontSize = fontSize > MAX_FONT_SIZE ?MAX_FONT_SIZE:fontSize
    // 赋值给html
    html.style.fontSize = fontSize +'px'
}