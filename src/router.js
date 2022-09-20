import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/views/HomePage'
// import Error404 from '@/components/content/Error404'
// import UserTable from '@/components/content/UserTable'
import ShopGrid from '@/views/ShopGrid'
// import Contact from '@/components/content/Contact'

const routes = [
  { name: "home-page", path: "/", component: HomePage },
  // { name: "error-404", component: Error404 },
  // { name: "contact", component: Contact },
  { name: "shop-grid", path: "/shop-grid", component: ShopGrid },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;