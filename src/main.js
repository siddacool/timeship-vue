import Vue from 'vue';
import Vue2TouchEvents from 'vue2-touch-events';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(Vue2TouchEvents);

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
