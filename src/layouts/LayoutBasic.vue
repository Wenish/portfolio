<template>
<div>
    <TheHeader class="sticky top-0 backdrop-blur" />
    <main><slot></slot></main>
    <TheFooter />
</div>
</template>
<script lang="ts" setup>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
</script>