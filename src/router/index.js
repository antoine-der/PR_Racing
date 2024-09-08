import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ShoppingView from '../views/ShoppingView.vue'
import ActualiteView from '../views/ActualiteView.vue'
import TeamView from '../views/TeamView.vue'
import SaisonView from '../views/SaisonView.vue'
import ProjetView from '../views/ProjetView.vue'
import GalerieView from '../views/GalerieView.vue'
import PartenairesView from '../views/PartenairesView.vue'
import ContactFormView from '../views/ContactForm.vue'

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
      component: ShoppingView
    },
    {
      path: '/actualite',
      name: 'actualite',
      component: ActualiteView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    },
    {
      path: '/saison',
      name: 'saison',
      component: SaisonView
    },
    {
      path: '/projet',
      name: 'projet',
      component: ProjetView
    },
    {
      path: '/galerie',
      name: 'galerie',
      component: GalerieView
    },
    {
      path: '/partenaires',
      name: 'partenaires',
      component: PartenairesView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactFormView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
