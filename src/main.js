// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import router from './vue.routing';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueProgressBar from 'vue-progressbar';
import createPersistedState from 'vuex-persistedstate';
import MessageBox from 'vue-msgbox';
import App from './App';
import AdminLogin from './components/admin/AdminLogin';
import AdminFrame from './components/admin/AdminFrame';
import AdminDashboard from './components/admin/Dashboard';
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import ViewUsers from './components/ViewUsers';

require('./assets/css/bootstrap.min.css');
require('./assets/css/AdminLTE.min.css');
require('./assets/css/skins/_all-skins.min.css');
require('./assets/css/font-awesome.min.css');
require('./assets/css/style.css');
require('vue-msgbox/lib/vue-msgbox.css');
require('./assets/js/jquery.min.js');
require('./assets/js/bootstrap.min.js');
require('./assets/js/app.min.js');

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueProgressBar, {
  color: '#d43710',
  failedColor: 'red',
  height: '20px'
})
Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App },
// });

const store = new Vuex.Store({
	plugins: [createPersistedState()],
  state: {
    authToken: '',
    apiBaseUrl: 'http://localhost:8000/api/v1/',
    clientId: '8ad4-3256'
  },
  mutations: {
    updateToken(state, payload) {
    	state.authToken = payload.token
    }
  },
  getters: {
  	getApiBaseUrl: state => {
  		return state.apiBaseUrl
  	},
  	getAuthToken: state => {
  		return state.authToken
  	},
  	getClientId: state => {
  		return state.clientId
  	}
  }
})


// Pointing routes to the components they should use
var router = new VueRouter({
  routes: [
	//{ path: '*', redirect: '/wecyclers/dashboard' },
    { path: '/admin', component: AdminLogin },
    { path: '/admin', component: AdminFrame,
      children: [
        {
            path: 'dashboard',
            component: AdminDashboard,
        },
        {
            path: 'users',
            component: Users,
              children: [
                {
                  path: 'create',
                  component: CreateUser
                },
                {
                  path: 'view',
                  component: ViewUsers
                }
              ]
        },
    ]},
    //{ path: '/login', component: Login},
  ],
  mode: 'history'
})

new Vue({
  el: '#app',
  store,
  router: router,
  template: '<router-view></router-view>'
})
