<template>
    <div>
        <div class="max-w-4xl grid m-auto text-left px-4">
            <h2 class="text-3xl font-bold">Projects I worked on</h2>
        </div>
        <div class="w-full">
            <ProjectsListItem v-for="(project, index) in projectsStore.projectsSorted" :key="index" :title="project.title"
                :description="project.description" :dateStart="project.dateStart" :dateEnd="project.dateEnd"
                :techStack="project.techStack" :link="project.link" :images="project.images" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useProjectsStore } from '../stores/projects.store';
import ProjectsListItem from './ProjectsListItem.vue';

const projectsStore = useProjectsStore()
</script>