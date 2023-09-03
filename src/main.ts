import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import App from './App.vue'
import router from './router'
import './index.css'
import { firebaseConfig } from './firebaseConfig';

async function appStart() {
    const firebaseApp = initializeApp(firebaseConfig);
    getAnalytics(firebaseApp);
    const app = createApp(App)
    const pinia = createPinia()
    app.use(pinia)
    app.use(router)
    app.mount('#app')
}

appStart()