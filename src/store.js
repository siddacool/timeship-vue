import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    date: '---',
  },
  mutations: {
    increment(state) {
      state.date = Date.now(); // eslint-disable-line no-param-reassign
    },
  },
  actions: {
    starttime(context) {
      const generateCurruntTime = () => {
        context.commit('increment');

        requestAnimationFrame(generateCurruntTime);
      };

      generateCurruntTime();
    },
  },
});
