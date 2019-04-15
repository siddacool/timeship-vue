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
    isTutorialMode: false,
    isEditMode: false,
    isSortTutorial: true,
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
    enableEditMode(state) {
      state.isEditMode = true; // eslint-disable-line no-param-reassign
    },
    disableEditMode(state) {
      state.isEditMode = false; // eslint-disable-line no-param-reassign
    },
    enableTutorialMode(state) {
      state.isTutorialMode = true; // eslint-disable-line no-param-reassign
    },
    disableTutorialMode(state) {
      state.isTutorialMode = false; // eslint-disable-line no-param-reassign
    },
    enableSortTutorial(state) {
      state.isSortTutorial = true; // eslint-disable-line no-param-reassign
    },
    disableSortTutorial(state) {
      state.isSortTutorial = false; // eslint-disable-line no-param-reassign
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
    toggleEditMode(context, payload = 'off') {
      if (payload === 'on') {
        context.commit('enableEditMode');
      } else {
        context.commit('disableEditMode');
      }
    },
    toggleTutorialMode(context, payload = 'off') {
      if (payload === 'on') {
        context.commit('enableTutorialMode');
      } else {
        context.commit('disableTutorialMode');
      }
    },
    toggleSortTutorial(context, payload = 'on') {
      if (payload === 'on') {
        context.commit('enableSortTutorial');
      } else {
        context.commit('disableSortTutorial');
      }
    },
  },
  getters: {
    totalCities(state) {
      return state.cityList.length;
    },
  },
  plugins: [vuexPersist.plugin],
});
