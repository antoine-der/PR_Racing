import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: AccueilView
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () => import('../views/ShoppingView.vue')
    },
    {
      path: '/actualite',
      name: 'actualite',
      component: () => import('../views/ActualiteView.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/TeamView.vue')
    },
    {
      path: '/saison',
      name: 'saison',
      component: () => import('../views/SaisonView.vue')
    },
    {
      path: '/projet',
      name: 'projet',
      component: () => import('../views/ProjetView.vue')
    },
    {
      path: '/galerie',
      name: 'galerie',
      component: () => import('../views/GalerieView.vue')
    },
    {
      path: '/partenaires',
      name: 'partenaires',
      component: () => import('../views/PartenairesView.vue')
    }
  ]
})

export default router
