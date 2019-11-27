import 'font-awesome/css/font-awesome.css';
import Vue from 'vue';
import App from './App.vue';
import './config/bootstrap';
import store from './config/store';
import router from './config/router';

Vue.config.productionTip = false;

// TEMPORARY AUTHORIZATION
require('axios').defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlBhdHJpY2lhIEZlbGl4IiwiZW1haWwiOiJwYXRyaWNpYWZlbGl4eEBvdXRsb29rLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1NzQ4NjcyMDAsImV4cCI6MTU3NTEyNjQwMH0.F-jFbuxttM02zsWu7z8QqHHgWkmA_lPVP52G-6Xgvi8'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
