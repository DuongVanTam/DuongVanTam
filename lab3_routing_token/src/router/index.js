import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Dashboard from '../components/Dashboard'
import ListProducts from '../components/ListProducts'
import ListArticles from '../components/ListArticles'
import login from '../components/TheLogin'
import { isAuth } from '../assets/auth'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/',
          component: Dashboard
        },
        {
          path: 'products',
          name: 'ListProducts',
          component: ListProducts
        },
        {
          path: 'articles',
          component: ListArticles
        }
      ]
    },
    {
      path: '/auth-login',
      name: 'auth-login',
      component: login
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name !== 'auth-login' && !isAuth()) next({ name: 'auth-login' })
  else next()
})
export default router
