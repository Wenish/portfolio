<template>
<div>Page Home</div>
<ProjectsList></ProjectsList>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const ProjectsList = defineAsyncComponent(() => import('../components/ProjectsList.vue'))
</script>