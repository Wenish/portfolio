<template>
<LayoutBasic>
    <WelcomeIntroduction></WelcomeIntroduction>
    <ContactInformation />
    <ProjectsList></ProjectsList>
</LayoutBasic>
</template>
<script lang="ts" setup>
import LayoutBasic from '../layouts/LayoutBasic.vue';
import WelcomeIntroduction from '../components/WelcomeIntroduction.vue';
import ContactInformation from '../components/ContactInformation.vue'
import ProjectsList from '../components/ProjectsList.vue';
</script>