<template>
<div>Projects List</div>
</template>
<script lang="ts" setup>
import { useProjectsStore } from '../stores/projects.store';

const projectsStore = useProjectsStore()
</script>