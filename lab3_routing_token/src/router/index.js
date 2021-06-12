import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import ProductsTable from '@/components/ProductsTable'
import Articles from '@/components/ArticlesTable'
import login from '@/components/login'
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
          name: 'ProductsTable',
          component: ProductsTable
        },
        {
          path: 'articles',
          component: Articles
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
  console.log('hahahahhahhahaha')
  if (to.name !== 'auth-login' && !isAuth) next({ name: 'auth-login' })
  else next()
})
export default router
