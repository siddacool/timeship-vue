<template>
  <div class="nav-time">
    <div class="container">
      <span class="utc-title">UTC Time</span>
      <span class="utc-time"> {{ getDate | makeTime }} </span>
      <span class="utc-day"> {{ getDate | makeDay }} </span>
    </div>
  </div>
</template>

<script>
import DateTime from 'luxon/src/datetime';

export default {
  name: 'NavTime',
  props: [
    'timer',
  ],
  props: {
    timer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      utcOffSet: '+00:00',
    }
  },
  computed: {
    getDate () {
      return this.$store.state.date !== '---' ? DateTime.fromMillis(this.$store.state.date).setZone(`UTC${this.utcOffSet}`) : '---';
    }
  },
  filters: {
    makeDay(date) {
      return date !== '---' ? date.toFormat('cccc, MMM dd') : date;
    },
    makeTime(date) {
      return date !== '---' ? date.toFormat('hh:mm a') : date;
    },
  },
  mounted() {
    if (this.timer) {
      this.$store.dispatch('starttime');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .nav-time {
    background-color: #f5f5f5;
    display: block;
    font-size: 14px;
    font-weight: 600;
    height: 100%;
    width: 100vw;

    @media only screen and (min-width: 1025px) {
      font-size: 24px;
    }
  }

  .container {
    display: flex;
    padding: 0 1rem;
    justify-content: space-between;
    height: 100%;
    align-items: center;
  }
</style>
