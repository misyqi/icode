<template>
    <svg aria-hidden="true">
        <use :xlink-href="symbolId"  :class="fillClass" :fill="color"/>
    </svg>
</template>

<script setup>
import {computed} from 'vue'
const props = defineProps({
    // 显示svg
    name:{
        type:String,
        required:true
    },
    color:{
        type:String
    },
    fillClass:{
        type:String
    }
})

// 真是显示的svg图标
const symbolId = computed(() =>`#icon-${props.name}`)
</script>