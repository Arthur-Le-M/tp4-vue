import { msalInstance } from '@/lib/microsoftGraph.js'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { router, setupRouterGuards } from './router/router'
import { useUserStore } from './store/user'

async function bootstrap() {
  const pinia = createPinia()
  await msalInstance.initialize()

  const app = createApp(App)
    .provide('msal', msalInstance)
    .use(pinia)
    .use(router)

  app.mount('#app')

  const userStore = useUserStore()
  userStore.checkAuthState()
  setupRouterGuards()
}

bootstrap()
