import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/page/index'
import production from '@/components/page/production'
import article from '@/components/page/article'
import composer from '@/components/page/composer'
import serve from '@/components/page/serve'
import login from '@/components/page/login'
import VueResource from 'vue-resource'
import vueValidator from 'vue-validator'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(vueValidator)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
     {
      path: '/production',
      name: 'production',
      component: production
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/composer',
      name: 'composer',
      component: composer
    },
    {
      path: '/serve',
      name: 'serve',
      component: serve
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ],
  scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
