import Vue from 'vue'
import Router from 'vue-router'
import Pintu from '../components/pintu.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pintu',
      component: Pintu
    }
  ]
})
