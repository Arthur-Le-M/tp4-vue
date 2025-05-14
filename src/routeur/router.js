import { createMemoryHistory, createRouter } from 'vue-router';
import { routes } from './routes';

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export function setupRouterGuards() {
  const { useUserStore } = require('@/store/user');
  const userStore = useUserStore();

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
      if (!userStore.isAuthenticated) {
        next({ path: '/' });
      } else {
        next();
      }
    } else {
      next();
    }
  });
}