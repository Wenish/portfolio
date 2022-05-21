import { defineStore } from 'pinia'
import { ref } from 'vue'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useProjectsStore = defineStore(
  'projects',
  () => {
    const projects = ref<[]>([])

    return {
        projects
    }
  }
)
