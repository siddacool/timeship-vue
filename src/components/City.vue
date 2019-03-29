<template>
  <li class="city">
    <div class="location">
      <span class="name">{{ name }}</span>, <span class="country">{{ country }}</span>
    </div>
    <div class="timeprops">
      <span class="time-12">{{ getDate | makeTime }}<span class="time-am">{{ getDate | makeAm }}</span></span>
      <span class="date-month">{{ getDate | makeDay }}</span>
    </div>
    <a href="#" class="close" @click.prevent="deleteCity(itr)">
      <svg id="icon-iconmonstr-x-mark-10" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 16.084L16.097 17.5l-4.09-4.096L7.905 17.5 6.5 16.095l4.093-4.092L6.5 7.905 7.905 6.5l4.088 4.089L16.084 6.5 17.5 7.903l-4.092 4.087 4.092 4.094z"></path></svg>
    </a>
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
    position: relative;
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

  .close {
    cursor: pointer;
    position: absolute;
    display: inline-block;
    right: 8px;
    top: 8px;
    svg {
    width: 16px;
    height: 16px;
    }
  }
</style>
