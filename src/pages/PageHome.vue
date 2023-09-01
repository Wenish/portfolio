<template>
<LayoutBasic>
    <div class="relative z-10">
        <WelcomeIntroduction></WelcomeIntroduction>
        <ContactInformation class="py-4 md:py-12" />
        <MyTechStack class="py-4 md:py-12" ></MyTechStack>
        <ProjectsList class="py-4 md:py-12" ></ProjectsList>
    </div>
</LayoutBasic>
</template>
<script lang="ts" setup>
import LayoutBasic from '../layouts/LayoutBasic.vue';
import WelcomeIntroduction from '../components/WelcomeIntroduction.vue';
import ContactInformation from '../components/ContactInformation.vue'
import MyTechStack from '../components/MyTechStack.vue';
import ProjectsList from '../components/ProjectsList.vue';
</script>