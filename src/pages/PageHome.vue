<template>
<LayoutBasic>
    <WelcomeIntroduction></WelcomeIntroduction>
    <ProjectsList></ProjectsList>
</LayoutBasic>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const LayoutBasic = defineAsyncComponent(() => import('../layouts/LayoutBasic.vue'))
const WelcomeIntroduction = defineAsyncComponent(() => import('../components/WelcomeIntroduction.vue'))
const ProjectsList = defineAsyncComponent(() => import('../components/ProjectsList.vue'))
</script>