<template>
<div class="py-4 grid place-items-center">
    <div class="max-w-4xl grid grid-cols-1 place-items-center md:grid-cols-2 px-4">
        <div class="content font-light">
            <div class="text-2xl pb-2">{{ title }}</div>
            <div class="py-1 text-base"><i class="fa-regular fa-calendar"></i> {{ dateStart }} - {{ dateEnd }}</div>
            <div class="text-lg">{{ description }}</div>
            <div class="flex flex-wrap gap-2 py-4">
                <div v-for="(tech, index) in techStack" :key="index" class="bg-orange-400 rounded-full px-2 font-medium">{{ tech }}</div>
            </div>
        </div>
        <div>
            <img v-for="(url, index) in images" :key="index" :src="url" class="aspect-[16/9] object-contain object-top" />
        </div>
    </div>
</div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Title'
    },
    description: {
        type: String,
        default: 'Description'
    },
    dateStart: {
        type: String,
        default: '2020-2021'
    },
    dateEnd: {
        type: String,
        default: '2020-2021'
    },
    techStack: {
        type: Array as PropType<Array<string>>,
        default: ['Node', 'TypeScript']
    },
    images: {
        type: Array as PropType<Array<string>>,
        default: ['https://i.imgur.com/gQUlPMN.jpeg']
    },
})
</script>
<style scoped>
.content {
    width: -webkit-fill-available;
}
img {
    image-rendering: crisp-edges;
}
</style>