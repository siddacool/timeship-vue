<template>
  <div class="cities">
    <div class="container">
      <draggable v-model="cityList" :disabled="!this.$store.state.isEditMode" handle=".handle">
        <City v-for="town in cityList"
          :key="town.city_id"
          :itr="town.city_id"
          :name="town.name"
          :country="town.country_name"
          :timezone="town.timezone"
          :date="date"/>
      </draggable >
      <Tooltip v-if="totalCities < 1" :pin="tooltipPin" :name="tooltipClass" :bounce="tooltipBounce">{{ tooltipMsg }}</Tooltip>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import DateTime from 'luxon/src/datetime';
import City from '@/components/City.vue';
import Tooltip from '@/components/Tooltip.vue';

export default {
  name: 'Cities',
  components: {
    City,
    draggable,
    Tooltip,
  },
  data() {
    return {
      tooltipMsg: 'Add New City',
      tooltipPin: 'bottom',
      tooltipClass: 'add-tooltip',
      tooltipBounce: true,
    }
  },
  mounted() {
    this.sortableCities = this.$store.state.cityList;
  },
  computed: {
    date () {
      return this.$store.state.date !== '---' ? DateTime.fromMillis(this.$store.state.date) : '---';
    },
    totalCities() {
      return this.$store.state.cityList.length;
    },
    cityList: {
      get() {
        return this.$store.state.cityList;
      },
      set(cities) {
        this.$store.dispatch('updateCities', {
          cities,
        });
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .cities {
    padding-top: 8px;
    max-height: calc(100vh - 145px);
    overflow-y: auto;
  }

  .add-tooltip {
    bottom: 150px;
    left: calc(50vw - 55px);
  }
</style>