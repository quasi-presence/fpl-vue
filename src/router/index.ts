import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useUserStore } from '../stores/user';
import HomeLayout from '../layouts/HomeLayout.vue';
import UserLayout from '../layouts/UserLayout.vue';
import HomeView from '../views/HomeView.vue';
import UserView from '../views/UserView.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'home', component: HomeView, meta: { layout: HomeLayout } },
  { path: '/user', name: 'user', component: UserView, meta: { layout: UserLayout, requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Verify user is logged in if route requires auth
router.beforeEach((to, from) => {
  const store = useUserStore();

  let authRequired: boolean = to.matched.some(record => record.meta.requiresAuth);
  let userNotAuthenticated: boolean = store.currentUser == null;
  let userAuthenticated: boolean = !userNotAuthenticated;

  if (authRequired && userNotAuthenticated) {
    return { name: 'home' };
  }

  if (to.name == 'home' && userAuthenticated) {
    return { name: 'user' };
  }
})

export default router;
