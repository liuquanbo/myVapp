// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueLazyload from 'vue-lazyload'

Vue.use(Vuex)
Vue.config.productionTip = false

var store=new Vuex.Store({
	state:{
		loadingShow:false
	},
	mutations:{
		showLoading(state,n){
			state.loadingShow = n
		}
	}
})

Vue.http.interceptors.push(
	(request, next) => {
		store.commit('showLoading',true)	
		next((response) => {
			store.commit('showLoading',false)
			//console.log(request)	
			return response
		})
	}
)

Vue.use(VueLazyload, {
  error: '../static/images/timg.gif',
  loading: '../static/images/timg.gif',
  try: 3 // default 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
