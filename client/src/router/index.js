import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import SignupView from '../views/SignupView.vue'
import SigninView from '../views/SigninView.vue'
import HomeView from '../views/HomeView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import PlannerView from '../views/PlannerView.vue'
import JournalView from '../views/JournalView.vue'
import AddJournalView from '../views/AddJournalView.vue'
import WatchlistView from '../views/WatchlistView.vue'
import CoinLaunchView from '../views/CoinLaunchView.vue'
import ProfilePageView from '../views/ProfilePageView.vue'

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
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: CalculatorView
  },
  {
    path: '/planner',
    name: 'planner',
    component: PlannerView
  },
  {
    path: '/journal',
    name: 'journal',
    component: JournalView
  },
  {
    path: '/journal-add',
    name: 'addJournal',
    component: AddJournalView
  },
  {
    path: '/watchlist',
    name: 'watchlist',
    component: WatchlistView
  },
  {
    path: '/launch',
    name: 'launch',
    component: CoinLaunchView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePageView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
