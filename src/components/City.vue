<template>
  <li class="city" :class="[{'edit-mode': this.$store.state.isEditMode}, getPhaseOfTheDay]" v-touch:longtap="onlongpress">
    <a href="#" class="handle" v-show="this.$store.state.isEditMode" :class="{pulse: isHandlePulse}">
      <svg width="24px" height="24px" viewBox="0 0 24 24">
        <path d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/>
      </svg>
    </a>
    <div class="location">
      <span class="name">{{ name }}</span>
    </div>
    <div class="timeprops">
      <span class="time-12">{{ getDate | makeTime }}<span class="time-am">{{ getDate | makeAm }}</span></span>
      <span class="date-month">{{ getDate | makeDay }}</span>
    </div>
    <a href="#" class="close" @click.prevent="deleteCity(itr)" v-show="this.$store.state.isEditMode">
      <svg width="24px" height="24px" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 16.084L16.097 17.5l-4.09-4.096L7.905 17.5 6.5 16.095l4.093-4.092L6.5 7.905 7.905 6.5l4.088 4.089L16.084 6.5 17.5 7.903l-4.092 4.087 4.092 4.094z"/>
      </svg>
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
    'date',
    'itr',
    'pos',
  ],
  computed: {
    getDate () {
      return this.date !== '---' ? this.date.setZone(`UTC${this.timezone}`) : '---';
    },
    isHandlePulse() {
      return this.$store.state.isTutorialMode && this.pos === (this.$store.getters.totalCities - 1) && this.$store.getters.totalCities > 1 && this.$store.state.isEditMode && this.$store.state.isSortTutorial;
    },
    getPhaseOfTheDay() {
      if (this.date === '---') {
        return 'stall';
      };

      const { hour }  = this.getDate;

      if (hour >= 4 && hour < 7 ) {
        return 'early-morning';
      } else if (hour >= 7 && hour < 12) {
        return 'morning';
      } else if (hour >= 12 && hour < 17) {
        return 'afternoon';
      } else if (hour >= 17 && hour < 20) {
        return 'evening';
      } else {
        return 'night';
      }
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
    onlongpress() {
      this.$store.dispatch('toggleEditMode', 'on');
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  // colors list
  @import '../styles/colors';

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

    &.edit-mode {
      padding-left: 2rem;

      &:hover {
        box-shadow: 1px 1px 5px 5px rgba(224, 224, 224, 0.28);
      }
    }

    @keyframes shadow-pulse {
      0% {
        box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
      }
      100% {
        box-shadow: 0 0 0 35px rgba(0, 0, 0, 0);
      }
    }

    &.pulse {
      animation: shadow-pulse 1s infinite;
    }

    // phases
    &.early-morning {
      background-color: $phase-early-morning;
      color: #fff;
    }

    &.morning {
      background-color: $phase-morning;
    }

    &.afternoon {
      background-color: $phase-afternoon;
    }

    &.evening {
      background-color: $phase-evening;
    }

    &.night {
      background-color: $phase-night;
      color: #fff;
    }
  }

  .location {
    margin-bottom: 4px;

    .name {
      font-size: 17px;
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
      font-size: 14px;

      @media only screen and (min-width: 800px) {
        font-size: 22px;
      }
    }
  }

  .close {
    cursor: pointer;
    position: absolute;
    display: flex;
    right: 0;
    top: 0;
    width: 2.5rem;
    height: 2.5rem;
    justify-content: center;
    align-items: center;
    svg {
      width: 16px;
      height: 16px;
      fill: $danger-color;
    }
  }

  .handle {
    cursor: pointer;
    position: absolute;
    display: flex;
    align-items: center;
    left: 0;
    top: 0;
    height: 100%;
    width: 2rem;
    padding-left: .5rem;
    opacity: .4;

    &.pulse {
      animation: shadow-pulse 1s infinite;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
</style>
