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
      link: string,
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
          link: '',
          images: [assetUrlRnr1]
        },
        {
          title: 'Dino Jump',
          description: 'A realtime multiplayer platformer game.',
          dateStart: '01.02.2022',
          dateEnd: '01.05.2022',
          techStack: ['Unity', 'Node', 'Colyseus', 'TypeScript', 'Vue', 'C#', 'Firebase', 'Github', 'Heroku', 'Vite', 'Netlify'],
          link: 'https://dino-fun-land.web.app/',
          images: []
        },
        {
          title: 'SBB Resale',
          description: 'An e-commerce platform for reselling used goods.',
          dateStart: '01.11.2021',
          dateEnd: '01.05.2022',
          techStack: ['Node', 'TypeScript', 'Vue', 'Nestjs', 'Firebase', 'Azure', 'MongoDB', 'Azure DevOps', 'Vite'],
          link: '',
          images: []
        },
        {
          title: 'Swisscom News App',
          description: 'A internal news application with a content managment system.',
          dateStart: '01.03.2015',
          dateEnd: '01.03.2016',
          techStack: ['JavaScript', 'Node', 'Knockoutjs', 'Sharepoint', 'Azure DevOps'],
          link: '',
          images: []
        },
        {
          title: 'Swisscom Partner Portal',
          description: 'A internal application for searching and booking personal coaches.',
          dateStart: '01.03.2016',
          dateEnd: '01.07.2017',
          techStack: ['JavaScript', 'Node', 'Knockoutjs', 'Sharepoint', 'Azure DevOps'],
          link: '',
          images: []
        },
        {
          title: 'Swisscom Digital Post-Its',
          description: 'A web application for a digital Post-It wall.',
          dateStart: '01.12.2014',
          dateEnd: '01.02.2015',
          techStack: ['JavaScript', 'jQuery', 'Sharepoint', 'Azure DevOps'],
          link: '',
          images: []
        },
        {
          title: 'Swisscom Blog App',
          description: 'A internal web application for sharing blog posts with images and text.',
          dateStart: '01.03.2016',
          dateEnd: '01.05.2016',
          techStack: ['JavaScript', 'Angular', 'Node', 'Sharepoint', 'Azure DevOps'],
          link: '',
          images: []
        },
        {
          title: 'Swisscom Appointment Finder',
          description: 'An app for scheduling an interview with job applicants.',
          dateStart: '01.09.2019',
          dateEnd: '01.03.2020',
          techStack: ['JavaScript', 'Vue', 'Node', 'Quasar', 'Azure DevOps'],
          link: '',
          images: []
        },
        {
          title: 'Swisscom Butler',
          description: 'A windows workplace support app.',
          dateStart: '01.08.2017',
          dateEnd: '01.12.2018',
          techStack: ['C#', 'UWP', 'Microsoft Bot Framework', 'Azure Functions', 'Azure DevOps'],
          link: '',
          images: []
        },
        {
          title: 'SBB Bahnknowhow',
          description: 'A internal web application for sharing and consuming railway knowledge.',
          dateStart: '01.04.2020',
          dateEnd: '01.08.2021',
          techStack: ['Bitbucket', 'Angular', 'TypeScript', 'Node', 'Java', 'Sprint Boot', 'Neo4j', 'Openshift', 'Azure', 'Cypress'],
          link: '',
          images: []
        },
        {
          title: 'ICT Berufsbildung Modulbaukasten',
          description: 'Informational site for ICT modules.',
          dateStart: '01.08.2021',
          dateEnd: '01.05.2022',
          techStack: ['Azure DevOps', 'Angular', 'Node'],
          link: 'https://www.modulbaukasten.ch/',
          images: []
        },
        {
          title: 'BF Card Creator',
          description: 'A web application for creating Battle Forge playing Cards.',
          dateStart: '01.03.2018',
          dateEnd: '01.04.2018',
          techStack: ['Github', 'Vue', 'Node', 'Firebase', 'Travis CI'],
          link: 'https://bfcards.app/',
          images: []
        },
        {
          title: 'Grid Map Editor',
          description: 'A web application for creating 2D grid maps.',
          dateStart: '01.06.2021',
          dateEnd: '01.07.2021',
          techStack: ['Github', 'Vue', 'Node', 'Firebase', 'Vite'],
          link: 'https://grid-map-editor.web.app/',
          images: []
        },
        {
          title: 'Skill Picker',
          description: 'A proof of concept for a game skill pick system.',
          dateStart: '01.03.2022',
          dateEnd: '01.04.2022',
          techStack: ['Github', 'Vue', 'Node', 'Firebase', 'Vite'],
          link: 'https://skill-picker.web.app/',
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
