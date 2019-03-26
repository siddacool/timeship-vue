import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    date: '---',
  },
  mutations: {
    increment(state) {
      const timeToUpdate = Date.now();
      state.date = timeToUpdate;
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
