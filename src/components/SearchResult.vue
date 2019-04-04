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
 }
</style>
