import Vue from 'vue';
import Vuex from 'vuex';
import citySearch from '@/helpers/city-search';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    date: '---',
    controlButton: '',
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
      {
        city_id: 'city-1536q5444000',
        country: 'EG',
        country_name: 'Egypt',
        date: 1553593565000,
        name: 'alexandria',
        timezone: '+02:00',
      },
      {
        city_id: 'city-153sss5444000',
        country: 'EG',
        country_name: 'Egypt',
        date: 1553593565000,
        name: 'alexandria',
        timezone: '+02:00',
      },
      {
        city_id: 'city-153sssdw5444000',
        country: 'EG',
        country_name: 'Egypt',
        date: 1553593565000,
        name: 'alexandria',
        timezone: '+02:00',
      },
      {
        city_id: 'city-153ssssdw5444000',
        country: 'EG',
        country_name: 'Egypt',
        date: 1553593565000,
        name: 'alexandria',
        timezone: '+02:00',
      },
      {
        city_id: 'city-153ssssdws5444000',
        country: 'EG',
        country_name: 'Egypt',
        date: 1553593565000,
        name: 'alexandria',
        timezone: '+02:00',
      },
      {
        city_id: 'city-153ssssdws5s444000',
        country: 'EG',
        country_name: 'Egypt',
        date: 1553593565000,
        name: 'alexandria',
        timezone: '+02:00',
      },
      {
        city_id: 'city-153ssssdssws5s444000',
        country: 'EG',
        country_name: 'Egypt',
        date: 1553593565000,
        name: 'alexandria',
        timezone: '+02:00',
      },
    ],
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
  },
});
