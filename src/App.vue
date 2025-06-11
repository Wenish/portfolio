<template>
  <div
    class="app-bg"
    ref="bgRef"
    :style="{
      '--mouse-x': lerpedXPercent + '%',
      '--mouse-y': lerpedYPercent + '%'
    }"
  >
    <router-view :key="$route.path" />
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useMouse } from '@vueuse/core'

const bgRef = ref<HTMLElement | null>(null)
const { x: pageX, y: pageY } = useMouse()

// Target percentage values (from mouse)
const targetXPercent = ref(50)
const targetYPercent = ref(50)

// Actual interpolated values
const lerpedXPercent = ref(50)
const lerpedYPercent = ref(50)

// Animation loop using requestAnimationFrame
let rafId: number

function animate() {
  // Linear interpolation (lerp)
  const speed = 0.05 // lower is smoother/slower, 1 is instant

  lerpedXPercent.value += (targetXPercent.value - lerpedXPercent.value) * speed
  lerpedYPercent.value += (targetYPercent.value - lerpedYPercent.value) * speed

  rafId = requestAnimationFrame(animate)
}

onMounted(() => {
  rafId = requestAnimationFrame(animate)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
})

// Recalculate target percentage based on page-relative mouse position
watch([pageX, pageY], () => {
  if (!bgRef.value) return
  const rect = bgRef.value.getBoundingClientRect()
  const offsetLeft = rect.left + window.scrollX
  const offsetTop = rect.top + window.scrollY

  targetXPercent.value = ((pageX.value - offsetLeft) / rect.width) * 100
  targetYPercent.value = ((pageY.value - offsetTop) / rect.height) * 100
})

</script>
<style lang="css">
.app-bg {
  --mouse-x: 0%;
  --mouse-y: 0%;
  background-image: radial-gradient(circle 750px at var(--mouse-x) var(--mouse-y), #5724b530, transparent);
  width: 100%;
  min-height: 100vh;
}
</style>
