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
      dateStart: string,
      dateEnd: string,
      techStack: string[],
      images: string[]
    }[]>([])

    const loadProjects = () => {
      projects.value = [
        {
          title: 'Rooms and Ressources',
          description: 'Internal Room Booking System for Swisscom AG.',
          dateStart: '01.01.2019',
          dateEnd: '01.03.2020',
          techStack: ['Node', 'React'],
          images: [assetUrlRnr1]
        },
        {
          title: 'Dino Jump',
          description: 'A realtime multiplayer platformer game.',
          dateStart: '01.02.2022',
          dateEnd: '01.05.2022',
          techStack: ['Unity', 'Node', 'Colyseus', 'TypeScript', 'Vue', 'C#', 'Firebase'],
          images: []
        },
        {
          title: 'SBB Resale',
          description: 'An E-commerce platform for resalling used goods.',
          dateStart: '01.11.2021',
          dateEnd: '01.05.2022',
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
