import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactDetailsView from '../views/ContactDetailsView.vue'
import NewContactView from '../views/NewContactView.vue'
import EditContactView from '../views/EditContactView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/contact/:id', component: ContactDetailsView, props: true },
  { path: '/new', component: NewContactView },
  { path: '/edit/:id', component: EditContactView, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
