import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    	{
		  path: '/',
			component: resolve => require(['../pages/Home.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Home'
		}, //首页

		{
			path: '/About',
			component: resolve => require(['../pages/About.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'About'
		}, //关于
  ]
})
