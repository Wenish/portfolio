<template>
<WelcomeIntroduction></WelcomeIntroduction>
<ProjectsList></ProjectsList>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const WelcomeIntroduction = defineAsyncComponent(() => import('../components/WelcomeIntroduction.vue'))
const ProjectsList = defineAsyncComponent(() => import('../components/ProjectsList.vue'))
</script>