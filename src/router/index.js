import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:type?',
      name: 'Test',
      component: Test
    }
  ]
})
