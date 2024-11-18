import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import SingleEpisodePage from './pages/SingleEpisodePage.vue';
import SingleCharacterPage from './pages/SingleCharacterPage.vue'; // Nuevo componente

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/episode/:idrouter',
      name: 'SingleEpisodePage',
      component: SingleEpisodePage,
    },
    {
      path: '/character/:idrouter', // Nueva ruta para personajes
      name: 'SingleCharacterPage',
      component: SingleCharacterPage,
    },
  ],
});

export default router;
