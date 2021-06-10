import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import ProductsTable from '@/components/ProductsTable'
import Articles from '@/components/ArticlesTable'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
