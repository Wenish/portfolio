<template>
<div class="py-12">
    <slot></slot>
    <TheFooter></TheFooter>
</div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const TheFooter = defineAsyncComponent(() => import('../components/TheFooter.vue'))
</script>