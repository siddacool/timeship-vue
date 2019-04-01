import Vue from 'vue';
import LongPress from 'vue-directive-long-press'
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.directive('long-press', LongPress);

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
