<template>
  <div class="cities">
    <div class="container">
      <draggable v-model="cityList" :disabled="!isEditMode" handle=".handle">
        <City v-for="(town, index) in cityList"
          :key="town.city_id"
          :itr="town.city_id"
          :pos="index"
          :name="town.name"
          :country="town.country_name"
          :timezone="town.timezone"
          :date="date"/>
      </draggable >
      <Info v-if="totalCities < 1"/>
      <Tooltip v-if="isTutorialMode && totalCities < 1 && !isEditMode" pin="bottom" name="add-tooltip">Add New City</Tooltip>
      <Tooltip v-if="isTutorialMode && totalCities === 1 && !isEditMode" pin="bottom" name="add-another-tooltip">Add Another City</Tooltip>
      <Tooltip v-if="isTutorialMode && totalCities > 1 && !isEditMode" pin="top" name="edit-mode-tooltip" >Long Press a city and Release, to activate edit mode</Tooltip>
      <Tooltip v-if="isTutorialMode && totalCities > 1 && isEditMode && isSortTutorial" pin="top" name="sort-tooltip">Sort Using Handle</Tooltip>
      <Tooltip v-if="isTutorialMode && totalCities > 1 && isEditMode && !isSortTutorial" pin="bottom" name="accept-tooltip">Deactivate Edit Mode</Tooltip>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import draggable from 'vuedraggable'
import DateTime from 'luxon/src/datetime';
import City from '@/components/City.vue';
import Tooltip from '@/components/Tooltip.vue';
import Info from '@/components/Info.vue';

export default {
  name: 'Cities',
  components: {
    City,
    draggable,
    Tooltip,
    Info,
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
    ...mapState([
      'isTutorialMode',
      'isSortTutorial',
      'isEditMode',
    ]),
    ...mapGetters([
      'totalCities',
    ])
  },
  watch: {
    cityList(newList, oldList) {
      if (newList.length === oldList.length && newList !== oldList) {
        this.$store.dispatch('toggleSortTutorial', 'off');
      }

      if (newList.length < 1) {
        this.$store.dispatch('toggleEditMode', 'off');
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .cities {
    padding-top: 8px;
    height: calc(100vh - 120px);
    overflow-y: auto;
    padding-bottom: 8px;
    position: relative;
  }

  .add-tooltip,
  .add-another-tooltip,
  .accept-tooltip {
    bottom: 120px;
  }

  .add-tooltip {
    left: calc(50vw - 55px);
  }

  .add-another-tooltip {
    left: calc(50vw - 66px);
  }

  .edit-mode-tooltip {
    top: 300px;
    position: absolute;
    left: calc(50vw - 171px);

    @media only screen and (min-width: 1025px) {
      margin-top: 100px;
    }
  }

  .sort-tooltip {
    top: 300px;
    left: 10px;
    position: absolute;

    @media only screen and (min-width: 1025px) {
      left: calc(50vw - 64px);
      margin-top: 100px;
    }
  }

  .remove-tooltip {
    right: 10px;
  }

  .accept-tooltip {
    left: calc(50vw - 79px);
  }
</style>