<template>
    <div class="bg-white sticky top-0 left-0 z-10">
        <ul
        ref="ulTarget"  
        class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden">
            <!-- 滑块 -->
            <li 
            ref="sliderTarget" 
            :style="sliderStyle"
             class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"></li>
            <!-- 汉堡按键 -->
            <li class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20 shadow-light-50 last:mr-4">
                <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
            </li>
            <li class="flex-shrink-0 px-1.5 py-0.5 z-10 duration-200"
            v-for="(item,index) in data" :key="item.id"
            :class="{
          'text-zinc-100 ': $store.getters.currentCategoryIndex === index
        }"
            :ref="setItemRef"
            @click="onItemClick(item)">{{ item.name }}</li>
        </ul>
        <m-popup>
          <MenuVue :categorys="data"></MenuVue>
        </m-popup>
    </div>
</template>

<script setup>
import { ref, watch, onBeforeUpdate } from 'vue'
import { useScroll } from '@vueuse/core'
import MenuVue from '../../menu/index.vue'
defineProps({
    data:{
        type:Array,
        required:true
    }  
})

// 滑块
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '52px'
})

// 获取填充的所有 item 元素
let itemRefs = []
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}
onBeforeUpdate(() => {
  itemRefs = []
})

// 获取 ul 元素，以计算偏移位置
const ulTarget = ref(null)
const {x:ulScrollLeft} = useScroll(ulTarget)
watch(currentCategoryIndex, (val) =>{
    // 获取选中元素的 left、width
    const { left, width }  = itemRefs[val].getBoundingClientRect()
    // 为 sliderStyle 设置属性
    sliderStyle.value = {
        // ul 横向滚动位置 + 当前元素的 left 偏移量
        transform: `translateX(${ulScrollLeft.value + left - 10 + 'px'})`,
      width: width + 'px'
    }
})

// item 点击事件
const onItemClick = (item) => {
  store.commit('app/changeCurrentCategory', item)
  isOpenPopup.value = false
}


</script>