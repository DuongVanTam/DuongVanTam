import Vue from 'vue'
import Router from 'vue-router'
import HelloWorldViews from '../views/HelloWorldViews'
import Dashboard from '../components/pages/Dashboard'
import ListProducts from '../modules/products/components/pages/ListProducts'
import ListArticles from '../modules/articles/components/pages/ListArticles'
import login from '../components/pages/TheLogin'
import { isAuth } from '../assets/auth'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorldViews',
      component: HelloWorldViews,
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
