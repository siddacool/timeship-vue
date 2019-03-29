<template>
  <div class="cities">
    <ul>
      <City v-for="town in this.$store.state.cityList" :key="town.city_id" :itr="town.city_id" :name="town.name" :country="town.country_name" :timezone="town.timezone" :date="date"/>
    </ul>
  </div>
</template>

<script>
import DateTime from 'luxon/src/datetime';
import City from '@/components/City.vue';

export default {
  name: 'Cities',
  components: {
    City,
  },
  computed: {
    date () {
      return this.$store.state.date !== '---' ? DateTime.fromMillis(this.$store.state.date) : '---';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .cities {
    padding-top: 8px;
  }
</style>