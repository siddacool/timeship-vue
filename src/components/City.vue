<template>
  <li class="city" @click="deleteCity(itr)">
    <div class="location">
      <span class="name">{{ name }}</span>, <span class="country">{{ country }}</span>
    </div>
    <div class="timeprops">
      <span class="time-12">{{ getDate | makeTime }}<span class="time-am">{{ getDate | makeAm }}</span></span>
      <span class="date-month">{{ getDate | makeDay }}</span>
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
    'date',
    'itr',
  ],
  computed: {
    getDate () {
      return this.date !== '---' ? this.date.setZone(`UTC${this.timezone}`) : '---';
    }
  },
  filters: {
    makeDay(date) {
      return date !== '---' ? date.toFormat('cccc, MMM dd') : date;
    },
    makeAm(date) {
      return date !== '---' ? date.toFormat('a') : date;
    },
    makeTime(date) {
      return date !== '---' ? date.toFormat('h:mm') : date;
    },
  },
  methods: {
    deleteCity(itr) {
      this.$store.dispatch('deleteCity', {
        itr,
      });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .city {
    display: block;
    background-color: #fff;
    margin-bottom: 8px;
    margin-left: 1rem;
    margin-right: 1rem;
    padding: .8rem;
    border-radius: 4px;
    box-shadow: 1px 1px 5px 0px rgba(235, 136, 136, 0.078);
  }

  .location {
    margin-bottom: 4px;

    .name {
      font-size: 20px;
      text-transform: capitalize;
      word-break: break-word;

      @media only screen and (min-width: 800px) {
        font-size: 25px;
      }
    }

    .country {
      font-size: 20px;
      text-transform: capitalize;
      word-break: break-word;

      @media only screen and (min-width: 800px) {
        font-size: 25px;
      }
    }
  }

  .timeprops {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    .time-12 {
      font-size: 34px;
    }

    .time-am {
      font-size: 22px;
      font-weight: 600;
    }

    .date-month {
      font-size: 20px;

      @media only screen and (min-width: 800px) {
        font-size: 22px;
      }
    }
  }
</style>
