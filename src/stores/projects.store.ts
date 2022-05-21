import { defineStore } from 'pinia'
import { ref } from 'vue'

import assetUrlRnr1 from '../assets/projects/rnr/search.webp'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useProjectsStore = defineStore(
  'projects',
  () => {
    const projects = ref<{
      title: string,
      description: string,
      period: string,
      techStack: string[],
      images: string[]
    }[]>([])

    const loadProjects = () => {
      projects.value = [
        {
          title: 'Rooms and Ressources',
          description: 'Internal Room Booking System for Swisscom AG.',
          period: '2020-2021',
          techStack: ['Node', 'React'],
          images: [assetUrlRnr1]
        },
        {
          title: 'Dino Jump',
          description: 'A realtime multiplayer platformer game.',
          period: '2020-2021',
          techStack: ['Unity', 'Node', 'Colyseus', 'TypeScript', 'Vue', 'C#', 'Firebase'],
          images: []
        },
        {
          title: 'SBB Resale',
          description: 'An E-commerce platform for resalling used goods.',
          period: '2020-2021',
          techStack: ['Node', 'TypeScript', 'Vue', 'Nestjs', 'Firebase', 'Azure', 'MongoDB'],
          images: []
        }
      ]
    }
    loadProjects()

    return {
        projects
    }
  }
)
