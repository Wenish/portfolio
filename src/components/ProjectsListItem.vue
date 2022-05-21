<template>
<div class="p-2 grid place-items-center">
    <div class="max-w-4xl grid grid-cols-2 place-items-center">
        <div>
            <div class="text-xl">{{ title }}</div>
            <div><i class="fa-regular fa-calendar"></i> {{ period }}</div>
            <div>{{ description }}</div>
            <div class="flex flex-wrap gap-2">
                <div v-for="(tech, index) in techStack" :key="index" class="bg-orange-400 rounded-full px-2">{{ tech }}</div>
            </div>
        </div>
        <div>
            <img v-for="(url, index) in images" :key="index" :src="url" />
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
    period: {
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
img {
    image-rendering: crisp-edges;
}
</style>