import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import SignupView from '../views/SignupView.vue'
import SigninView from '../views/SigninView.vue'

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: LandingView
  },
  {
    path: '/sign-in',
    name: 'signin',
    component: SigninView
  },
  {
    path: '/sign-up',
    name: 'signup',
    component: SignupView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
