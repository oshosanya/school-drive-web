import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import StaffLogin from './components/StaffLogin';

var router = new VueRouter({
  routes: [
  	{ path: '*', redirect: '/' },
    { path: '/', component: Welcome },
    { path: '/staff', component: StaffLogin },
    //{ path: '/login', component: Login},
  ]
})