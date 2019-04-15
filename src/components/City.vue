<template>
  <li class="city" :class="{'edit-mode': this.$store.state.isEditMode}" v-touch:longtap="onlongpress">
    <a href="#" class="handle" v-show="this.$store.state.isEditMode" :class="{pulse: isHandlePulse}">
      <IconSet name="handle" />
    </a>
    <div class="location">
      <span class="name">{{ name }}</span>
    </div>
    <div class="timeprops">
      <span class="time-12">{{ getDate | makeTime }}<span class="time-am">{{ getDate | makeAm }}</span></span>
      <span class="date-month">{{ getDate | makeDay }}</span>
    </div>
    <a href="#" class="close" @click.prevent="deleteCity(itr)" v-show="this.$store.state.isEditMode">
      <IconSet name="close" />
    </a>
  </li>
</template>

<script>
import DateTime from 'luxon/src/datetime';
import IconSet from '@/components/IconSet.vue';

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
      return this.$store.state.isTutorialMode && this.pos === 1 && this.$store.getters.totalCities < 3 && this.$store.state.isEditMode && this.$store.state.isSortTutorial;
    },
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
  components: {
    IconSet,
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
