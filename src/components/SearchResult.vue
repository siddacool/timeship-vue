<template>
  <div class="search-result">
    <div class="container">
      <CitySearch v-for="town in cityList" :key="town.city_id"
        :itr="town.city_id"
        :name="town.name"
        :country="town.country_name"
        :timezone="town.timezone"
        :date="date"
      />
    </div>
  </div>
</template>

<script>
import DateTime from 'luxon/src/datetime';
import CitySearch from '@/components/CitySearch.vue';

export default {
  name: 'SearchResult',
  components: {
    CitySearch,
  },
  computed: {
    cityList() {
      return this.$store.state.searchCityList;
    },
    date () {
      return DateTime.utc();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .search-result {
   padding-top: 1rem;

   .container {
    height: calc(100vh - 80px);
    max-height: 600px;
    overflow-y: overlay;

      @media only screen and (min-width: 1025px) {
        height: calc(100vh - 200px);
        max-height: initial;
      }
   }
 }
</style>
