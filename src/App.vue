<template>
  <div class="app-bg" ref="bgRef" 
    :style="{
      '--mouse-x': mouseXPercent + '%',
      '--mouse-y': mouseYPercent + '%'
    }">
    <router-view :key="$route.path" />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { useMouse } from '@vueuse/core'

const bgRef = ref<HTMLElement | null>(null)
const { x: pageX, y: pageY } = useMouse()

const mouseXPercent = computed(() => {
  if (!bgRef.value) return 50
  const rect = bgRef.value.getBoundingClientRect()
  const offsetLeft = rect.left + window.scrollX
  return ((pageX.value - offsetLeft) / rect.width) * 100
})

const mouseYPercent = computed(() => {
  if (!bgRef.value) return 50
  const rect = bgRef.value.getBoundingClientRect()
  const offsetTop = rect.top + window.scrollY
  return ((pageY.value - offsetTop) / rect.height) * 100
})
</script>
<style lang="css">
.app-bg {
  --mouse-x: 0%;
  --mouse-y: 0%;
  background-image: radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), #5724b526, transparent);
  width: 100%;
  min-height: 100vh;
}
</style>
