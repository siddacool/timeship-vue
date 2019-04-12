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
      <Tooltip v-if="this.$store.getters.totalCities < 1 && !this.$store.state.isEditMode" pin="bottom" name="add-tooltip" :bounce="tooltipBounce">Add New City</Tooltip>
      <Tooltip v-if="this.$store.getters.totalCities === 1 && !this.$store.state.isEditMode" pin="bottom" name="add-another-tooltip" :bounce="tooltipBounce">Add Another City</Tooltip>
      <Tooltip v-if="this.$store.getters.totalCities === 2 && !this.$store.state.isEditMode" pin="top" name="edit-mode-tooltip" :bounce="tooltipBounce">Long Press and Release, to Edit</Tooltip>
      <Tooltip v-if="this.$store.getters.totalCities === 2 && this.$store.state.isEditMode" pin="top" name="sort-tooltip" :bounce="tooltipBounce">Sort Using ...</Tooltip>
      <Tooltip v-if="this.$store.getters.totalCities === 2 && this.$store.state.isEditMode" pin="top" name="remove-tooltip" :bounce="tooltipBounce">Use x to delete</Tooltip>
      <Tooltip v-if="this.$store.getters.totalCities < 3 && this.$store.state.isEditMode" pin="bottom" name="accept-tooltip" :bounce="tooltipBounce">Deactivate Edit Mode</Tooltip>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import DateTime from 'luxon/src/datetime';
import City from '@/components/City.vue';
import IconSet from '@/components/IconSet.vue';
import Tooltip from '@/components/Tooltip.vue';

export default {
  name: 'Cities',
  components: {
    City,
    draggable,
    Tooltip,
    IconSet,
  },
  data() {
    return {
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

  .add-tooltip,
  .add-another-tooltip,
  .accept-tooltip {
    bottom: 150px;
  }

  .add-tooltip {
    left: calc(50vw - 55px);
  }

  .add-another-tooltip {
    left: calc(50vw - 66px);
  }

  .edit-mode-tooltip {
    top: 300px;
    left: calc(50vw - 110px);
  }

  .sort-tooltip,
  .remove-tooltip {
    top: 300px;
  }

  .sort-tooltip {
    left: 10px;
  }

  .remove-tooltip {
    right: 10px;
  }

  .accept-tooltip {
    left: calc(50vw - 79px);
  }
</style>