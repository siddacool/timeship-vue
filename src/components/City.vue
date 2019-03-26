<template>
  <li>
    <div class="name">
      {{ name }}
    </div>
    <div class="country">
      {{ country }}
    </div>
    <div class="timezone">
      {{ timezone }}
    </div>
    <div class="day">
      {{ getDate | makeTime }}
    </div>
  </li>
</template>

<script>
import DateTime from 'luxon/src/datetime';

export default {
  name: 'City',
  props: [
    'country',
    'name',
    'timezone',
    'countryCode',
    'date'
  ],
  computed: {
    getDate () {
      return this.date !== '---' ? this.date.setZone(`UTC${this.timezone}`) : '---';
    }
  },
  filters: {
    makeTime(date) {
      return date !== '---' ? date.toFormat('hh:mm a') : date;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
