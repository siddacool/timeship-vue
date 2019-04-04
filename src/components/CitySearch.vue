<template>
  <li class="city-search">
    <div class="location">
      <span class="name">{{ name }}</span>, <span class="country">{{ country }}</span>
    </div>
    <div class="timeprops">
      <span class="time-12">{{ getDate | makeTime }}</span>
    </div>
  </li>
</template>

<script>
import DateTime from 'luxon/src/datetime';

export default {
  name: 'CitySearch',
  props: [
    'country',
    'name',
    'timezone',
    'date',
  ],
  computed: {
    getDate () {
      return this.date.setZone(`UTC${this.timezone}`);
    }
  },
  filters: {
    makeTime(date) {
      return date.toFormat('h:mm a');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .city-search {
    position: relative;
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
    max-width: calc(100% - 70px);

    .name {
      font-size: 16px;
      text-transform: capitalize;
      word-break: break-word;
      font-weight: 600;

      @media only screen and (min-width: 800px) {
        font-size: 20px;
      }
    }

    .country {
      font-size: 16px;
      text-transform: capitalize;
      word-break: break-word;

      @media only screen and (min-width: 800px) {
        font-size: 20px;
      }
    }
  }

  .timeprops {
    position: absolute;
    right: 1rem;
    top: 1rem;

    .time-12 {
      font-weight: 500;
      font-size: 14px;
      opacity: .5;

      @media only screen and (min-width: 800px) {
        font-size: 16px;
      }
    }
  }
</style>
