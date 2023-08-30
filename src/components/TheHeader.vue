<template>
    <div class="px-8 py-6">
        <div class="flex gap-6">
            <a class="text-green-700 hover:text-green-600 inline-block" href="https://open.spotify.com/artist/2UMPXGNnurwP45ae7lPdAG" target="_blank">
                <IconSpotify class=" h-6 w-6" />
            </a>
            <a class="text-violet-700 hover:text-violet-600" href="https://github.com/Wenish" target="_blank">
                <IconGithub class=" h-6 w-6" />
            </a>
        </div>
    </div>
</template>
<script setup lang="ts">
import IconSpotify from './IconSpotify.vue';
import IconGithub from './IconGithub.vue'
</script>