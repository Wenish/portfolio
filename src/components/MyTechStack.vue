<template>
    <div class="max-w-4xl grid m-auto px-4 gap-4">
        <h2 class="text-3xl font-bold">Tech I worked with</h2>

        <div class="flex flex-wrap gap-4">
            <BadgeItem v-for="item in programmingLanguages" :key="item.name" :name="item.name" />
        </div>
        
        <div class="flex flex-wrap gap-4">
            <BadgeItem v-for="item in frameworks" :key="item.name" :name="item.name" />
        </div>
        
        <div class="flex flex-wrap gap-4">
            <BadgeItem v-for="item in platorms" :key="item.name" :name="item.name" />
        </div>
        
        <div class="flex flex-wrap gap-4">
            <BadgeItem v-for="item in databases" :key="item.name" :name="item.name" />
        </div>
        
        <div class="flex flex-wrap gap-4">
            <BadgeItem v-for="item in tools" :key="item.name" :name="item.name" />
        </div>
        
        <div class="flex flex-wrap gap-4">
            <BadgeItem v-for="item in versionControls" :key="item.name" :name="item.name" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import BadgeItem from './BadgeItem.vue';

const programmingLanguages = ref<{
    name: string
}[]>([
    {
        name: 'JavaScript'
    },
    {
        name: 'TypeScript'
    },
    {
        name: 'Java'
    },
    {
        name: 'C#'
    },
    {
        name: 'Python'
    },
    {
        name: 'Go'
    }
])

const frameworks = ref<{
    name: string
}[]>([
    {
        name: 'Node'
    },
    {
        name: 'Vue'
    },
    {
        name: 'React'
    },
    {
        name: 'Angular'
    },
    {
        name: 'Spring'
    },
    {
        name: 'NestJS'
    },
    {
        name: 'Electron'
    },
    {
        name: 'Tailwindcss'
    },
    {
        name: 'Colyseus'
    },
    {
        name: 'Cypress'
    }
])

const platorms = ref<{
    name: string
}[]>([
    {
        name: 'Azure'
    },
    {
        name: 'Google Cloud'
    },
    {
        name: 'AWS'
    },
    {
        name: 'Firebase'
    },
    {
        name: 'Railway'
    },
    {
        name: 'Heroku'
    },
    {
        name: 'Digital Ocean'
    }
])

const databases = ref<{
    name: string
}[]>([
    {
        name: 'PostgreSQL'
    },
    {
        name: 'MongoDB'
    },
    {
        name: 'Redis'
    },
    {
        name: 'Neo4j'
    },
    {
        name: 'Kafka'
    }
])

const tools = ref<{
    name: string
}[]>([
    {
        name: 'VS Code',
    },
    {
        name: 'Visual Studio'
    },
    {
        name: 'Unity'
    },
    {
        name: 'Github Desktop'
    }
])

const versionControls = ref<{
    name: string
}[]>([
    {
        name: 'Github',
    },
    {
        name: 'Azure DevOps'
    },
    {
        name: 'Bitbucket'
    }
])
</script>