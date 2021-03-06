// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import axios from 'axios'

require('./mock.js')
Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.use(ElementUI);
Vue.use(router);
// Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
Vue.filter('getYMD',function(input){
  return input.split('')[0];
})
