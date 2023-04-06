<template>
    <div>
        <navigationVue/>
    </div>
</template>


<script setup>
import navigationVue from './components/navigation/index.vue'
import { getCategory } from '@/api/category';
import { ref } from 'vue';


const categorys = ref([])
const getCategoryData =async () =>{
   const res =  await getCategory()
   categorys.value = res
}
getCategoryData()
</script>