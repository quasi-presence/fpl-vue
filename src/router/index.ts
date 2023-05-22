import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useUserStore } from '../stores/user';
import HomeLayout from '../layouts/HomeLayout.vue';
import UserLayout from '../layouts/UserLayout.vue';
import HomeView from '../views/HomeView.vue';
import DashboardView from '../views/DashboardView.vue';
import ProfileView from '../views/ProfileView.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'home', component: HomeView, meta: { layout: HomeLayout } },
  { path: '/dashboard', name: 'dashboard', component: DashboardView, meta: { layout: UserLayout, requiresAuth: true } },
  { path: '/profile', name: 'profile', component: ProfileView, meta: { layout: UserLayout, requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Verify user is logged in if route requires auth
router.beforeEach((to, from) => {
  const store = useUserStore();

  let authRequired: boolean = to.matched.some(record => record.meta.requiresAuth);

  if (authRequired && !store.isAuthenticated()) {
    return { name: 'home' };
  }

  if (to.name == 'home' && store.isAuthenticated()) {
    return { name: 'dashboard' };
  }
})

export default router;
