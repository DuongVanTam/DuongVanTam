import Vue from 'vue'
import Router from 'vue-router'
import ContainerComponent from '@/components/ContainerComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ContainerComponent',
      component: ContainerComponent
    }
  ]
})
