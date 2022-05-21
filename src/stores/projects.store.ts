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
          title: 'Swisscom Rooms and Ressources',
          description: 'Internal Room Booking System for Swisscom AG.',
          dateStart: '01.01.2019',
          dateEnd: '01.03.2020',
          techStack: ['JavaScript', 'Node', 'React', 'Azure DevOps'],
          images: [assetUrlRnr1]
        },
        {
          title: 'Dino Jump',
          description: 'A realtime multiplayer platformer game.',
          dateStart: '01.02.2022',
          dateEnd: '01.05.2022',
          techStack: ['Unity', 'Node', 'Colyseus', 'TypeScript', 'Vue', 'C#', 'Firebase', 'Github', 'Heroku'],
          images: []
        },
        {
          title: 'SBB Resale',
          description: 'An E-commerce platform for resalling used goods.',
          dateStart: '01.11.2021',
          dateEnd: '01.05.2022',
          techStack: ['Node', 'TypeScript', 'Vue', 'Nestjs', 'Firebase', 'Azure', 'MongoDB', 'Azure DevOps'],
          images: []
        },
        {
          title: 'Swisscom News App',
          description: 'Creating a internal news application with a content managment system.',
          dateStart: '01.03.2015',
          dateEnd: '01.03.2016',
          techStack: ['JavaScript', 'Node', 'Knockoutjs', 'Sharepoint', 'Azure DevOps'],
          images: []
        },
        {
          title: 'Swisscom Partner Portal',
          description: 'Creating a internal application for searching and booking personal coaches.',
          dateStart: '01.03.2016',
          dateEnd: '01.07.2017',
          techStack: ['JavaScript', 'Node', 'Knockoutjs', 'Sharepoint', 'Azure DevOps'],
          images: []
        },
        {
          title: 'Swisscom Digital Post-Its',
          description: 'A web application for a digital Post-It wall.',
          dateStart: '01.12.2014',
          dateEnd: '01.02.2015',
          techStack: ['JavaScript', 'jQuery', 'Sharepoint', 'Azure DevOps'],
          images: []
        },
        {
          title: 'Swisscom Blog App',
          description: 'A internal web application for sharing blog posts with images and text.',
          dateStart: '01.03.2016',
          dateEnd: '01.05.2016',
          techStack: ['JavaScript', 'Angular', 'Node', 'Sharepoint', 'Azure DevOps'],
          images: []
        },
        {
          title: 'Swisscom Butler',
          description: 'A windows workplace support app.',
          dateStart: '01.08.2017',
          dateEnd: '01.12.2018',
          techStack: ['C#', 'UWP', 'Microsoft Bot Framework', 'Azure Functions', 'Azure DevOps'],
          images: []
        }
      ].sort((a, b) => (new Date(a.dateEnd) < new Date(b.dateEnd)) ? 1 : ((new Date(b.dateEnd) < new Date(a.dateEnd)) ? -1 : 0))
    }
    loadProjects()

    return {
      projects
    }
  }
)
