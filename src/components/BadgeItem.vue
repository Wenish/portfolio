<template>
    <div class="bg-gray-500/30 text-white px-2 pb-1 pt-0.5 font-medium">
        {{ name }}
    </div>
</template>
<script setup lang="ts">
defineProps<{
    name: string;
}>();
</script>