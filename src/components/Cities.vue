<template>
  <div class="cities">
    <ul>
      <City v-for="town in cityList" :key="town.city_id" :name="town.name" :country="town.country_name" :timezone="town.timezone" :date="date"/>
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
    }
  },
  data() {
    return {
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
        }
      ],
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .cities {
    padding-top: 8px;
  }
</style>