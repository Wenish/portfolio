<template>
<div class="bg-white max-w-xl p-2 mb-4">
    <div class="text-xl">{{ title }}</div>
    <div>{{ period }}</div>
    <div>{{ description }}</div>
    <div class="flex gap-2">
        <div v-for="(tech, index) in techStack" :key="index">{{ tech }}</div>
    </div>
    <div>
        <img v-for="(url, index) in images" :key="index" :src="url" />
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