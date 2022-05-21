<template>
<div class="py-4 grid place-items-center">
    <div class="w-full max-w-4xl grid grid-cols-1 place-items-center md:grid-cols-2 px-4">
        <div class="content font-light">
            <div class="text-2xl pb-2">{{ title }}</div>
            <div class="py-1 text-base"><i class="fa-regular fa-calendar"></i> {{ formattedDateStart }} - {{ formattedDateEnd }}</div>
            <div class="text-lg">{{ description }}</div>
            <div v-if="link">
                <a :href="link" target="_blank" class="text-orange-900 hover:underline">Visit Site</a>
            </div>
            <div class="flex flex-wrap gap-2 py-4">
                <div v-for="(tech, index) in techStack.sort((a, b) => a.localeCompare(b))" :key="index" class="bg-orange-400 rounded-full px-2 font-medium">{{ tech }}</div>
            </div>
        </div>
        <div>
            <img v-for="(url, index) in images" :key="index" :src="url" class="aspect-[16/9] object-contain object-top" alt="" />
        </div>
    </div>
</div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import { DateTime } from "luxon";
import { computed } from '@vue/reactivity';

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