<template>
    <div>Projects List</div>
    <ProjectsListItem v-for="(project, index) in projectsStore.projects" :key="index" :title="project.title"
        :description="project.description" :period="project.period" :techStack="project.techStack" :images="project.images" />
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { useProjectsStore } from '../stores/projects.store';

const ProjectsListItem = defineAsyncComponent(() => import('./ProjectsListItem.vue'))

const projectsStore = useProjectsStore()
</script>