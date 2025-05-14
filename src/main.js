import { msalInstance } from '@/lib/microsoftGraph.js'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { useUserStore } from './store/user'

async function bootstrap() {
  const pinia = createPinia()
  await msalInstance.initialize()

  const app = createApp(App)
    .provide('msal', msalInstance)
    .use(pinia)

  app.mount('#app')

  const userStore = useUserStore()
  userStore.checkAuthState()
}

bootstrap()
