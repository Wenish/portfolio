<template>
<div>
    <TheHeader class="sticky top-0 backdrop-blur z-20" />
    <main><slot></slot></main>
    <TheFooter />
</div>
</template>
<script lang="ts" setup>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
</script>
<style scoped>
main:before {
    background-size: 100px 100px;
    background-image: url('../assets/grid.png');
    z-index: 0;
    background-position-y: -9px;
    -webkit-mask-image: linear-gradient(to bottom,transparent,10%,white,90%,transparent);
    mask-image: linear-gradient(to bottom,transparent,10%,white,90%,transparent);
    position: absolute;
    aspect-ratio: 1 / 1;
    width: 100%;
    content: "";
    -webkit-mask-image: linear-gradient(to bottom,white,transparent);
    mask-image: linear-gradient(to bottom,white,transparent);
}
</style>