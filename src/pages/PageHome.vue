<template>
<LayoutBasic>
    <div class="relative z-10">
        <WelcomeIntroduction></WelcomeIntroduction>
        <EducationInformation class="py-4 md:py-8" />
        <CertificationsInformation class="py-4 md:py-8"></CertificationsInformation>
        <LanguagesInformation class="py-4 md:py-8"></LanguagesInformation>
        <MyTechStack class="py-4 md:py-12" ></MyTechStack>
        <ProjectsList class="py-4 md:py-12" ></ProjectsList>
    </div>
</LayoutBasic>
</template>
<script lang="ts" setup>
import LayoutBasic from '../layouts/LayoutBasic.vue';
import WelcomeIntroduction from '../components/WelcomeIntroduction.vue';
import EducationInformation from '../components/EducationInformation.vue';
import MyTechStack from '../components/MyTechStack.vue';
import ProjectsList from '../components/ProjectsList.vue';
import CertificationsInformation from '../components/CertificationsInformation.vue'
import LanguagesInformation from '../components/LanguagesInformation.vue';
</script>