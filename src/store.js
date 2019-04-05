import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';
import citySearch from '@/helpers/city-search';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'timeship-vue-storage',
  storage: localStorage,
  reducer: state => ({
    cityList: state.cityList,
  }),
});

export default new Vuex.Store({
  state: {
    date: '---',
    controlButton: '',
    cityList: [],
    searchCityList: [],
  },
  mutations: {
    increment(state) {
      state.date = Date.now(); // eslint-disable-line no-param-reassign
    },
    removeCity(state, payload) {
      const filtred = state.cityList.filter(el => el.city_id !== payload.itr);
      state.cityList = filtred; // eslint-disable-line no-param-reassign
    },
    sortCities(state, cities) {
      const sorted = [];

      cities.forEach(({
        city_id: cityId, country, country_name: countryName, date, name, timezone,
      }) => {
        sorted.push({
          city_id: cityId,
          country,
          country_name: countryName,
          date,
          name,
          timezone,
        });
      });

      state.cityList = sorted; // eslint-disable-line no-param-reassign
    },
    switchControl(state, control) {
      state.controlButton = control; // eslint-disable-line no-param-reassign
    },
    populateSearchList(state, cities = []) {
      state.searchCityList = cities; // eslint-disable-line no-param-reassign
    },
    pushNewCity(state, cityId) {
      const cityInSearchState = state.searchCityList.find(city => city.city_id === cityId) || null;
      const isAlreadyExist = state.cityList.find(city => city.city_id === cityId) || null;

      if (cityInSearchState && !isAlreadyExist) {
        state.cityList.push(cityInSearchState);
      }
    },
    cleanSearch(state) {
      state.searchCityList = []; // eslint-disable-line no-param-reassign
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
    updateCities(context, payload) {
      if (payload && payload.cities && payload.cities.length) {
        context.commit('sortCities', payload.cities);
      }
    },
    setControl(context, payload) {
      context.commit('switchControl', payload.control || '');
    },
    requestCityApi(context, payload) {
      citySearch(payload.searchTerm)
        .then((resultArr = []) => {
          context.commit('populateSearchList', resultArr);
          console.log(resultArr);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addCity(context, { cityId }) {
      if (cityId) {
        context.commit('pushNewCity', cityId);
      }
    },
    clearSearchList(context) {
      context.commit('cleanSearch');
    },
  },
  plugins: [vuexPersist.plugin],
});
