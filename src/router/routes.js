import HomePage from '@/pages/HomePage.vue'
import ConversationShowPage from '@/pages/conversations/ConversationShowPage.vue'
import ConversationsIndexPage from '@/pages/conversations/ConversationsIndexPage.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      auth: false
    }
  },
  {
    path: '/conversations',
    name: 'conversations',
    component: ConversationsIndexPage
  },
  {
    path: '/conversations/:id',
    name: 'conversation-show',
    component: ConversationShowPage
  }
]