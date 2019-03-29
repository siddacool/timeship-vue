import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    date: '---',
    cityList: [
      {
        city_id: 'city-1536298962000',
        country: 'IN',
        country_name: 'India',
        date: 1553582256000,
        name: 'Mumbai',
        timezone: '+05:30',
      },
      {
        city_id: 'city-1536915444000',
        country: 'EG',
        country_name: 'Egypt',
        date: 1553593565000,
        name: 'alexandria',
        timezone: '+02:00',
      },
    ],
  },
  mutations: {
    increment(state) {
      state.date = Date.now(); // eslint-disable-line no-param-reassign
    },
    removeCity(state, payload) {
      const filtred = state.cityList.filter(el => el.city_id !== payload.itr);
      state.cityList = filtred; // eslint-disable-line no-param-reassign
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
    deleteCity(context, payload) {
      context.commit('removeCity', payload);
    },
  },
});
