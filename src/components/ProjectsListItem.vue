<template>
<div class="py-4 grid place-items-center">
    <div class="w-full max-w-4xl grid grid-cols-1 place-items-center md:grid-cols-[3fr_2fr] px-4 gap-4">
        <div class="content font-light">
            <div class="text-2xl md:text-4xl pb-2 font-semibold">{{ title }}</div>
            <div class="py-1 text-text2 flex gap-2">
                <div>
                    <i class="fa-regular fa-calendar"></i>
                </div>
                <div>{{ formattedDateStart }} - {{ formattedDateEnd }}</div>
            </div>
            <div class="text-lg">{{ description }}</div>
            <div v-if="link" class="pt-2">
                <a :href="link" target="_blank" class="text-white hover:underline">Visit Site →</a>
            </div>
            <div class="flex flex-wrap gap-4 py-4">
                <div v-for="(tech, index) in techStack.sort((a, b) => a.localeCompare(b))" :key="index" class="bg-gray-200 text-black px-2 pb-1 pt-0.5 font-medium grid items-center">{{ tech }}</div>
            </div>
        </div>
        <div>
            <div>
                <Viewer :images="images">
                    <img v-for="(url, index) in images" :key="index" :src="url" class="aspect-[16/9] object-contain object-top hover:saturate-[.75] cursor-pointer" alt="" />
                </Viewer>
            </div>
        </div>
    </div>
</div>
</template>
<script lang="ts" setup>
import { PropType, computed } from 'vue';
import { DateTime } from "luxon";
import 'viewerjs/dist/viewer.css'
import { component as Viewer } from "v-viewer"

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
    link: {
        type: String,
        default: ''
    },
    images: {
        type: Array as PropType<Array<string>>,
        default: ['https://i.imgur.com/gQUlPMN.jpeg']
    },
})

const formatDate = (date: string) => {
    return DateTime.fromFormat(date, 'dd.MM.yyyy').toFormat('yyyy MMMM')
}

const formattedDateStart = computed(() => {
    return formatDate(props.dateStart)
})

const formattedDateEnd = computed(() => {
    return formatDate(props.dateEnd)
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