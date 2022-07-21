<template>
    <div class="py-8">
        <div class="max-w-4xl grid m-auto text-left text-2xl font-normal px-4">Projects I did:</div>
        <div class="divide-y-8 divide-surface2 w-full">
            <ProjectsListItem v-for="(project, index) in projectsStore.projects" :key="index" :title="project.title"
                :description="project.description" :dateStart="project.dateStart" :dateEnd="project.dateEnd"
                :techStack="project.techStack" :link="project.link" :images="project.images" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { useProjectsStore } from '../stores/projects.store';

const ProjectsListItem = defineAsyncComponent(() => import('./ProjectsListItem.vue'))

const projectsStore = useProjectsStore()
</script>