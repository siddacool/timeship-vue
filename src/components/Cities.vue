<template>
  <div class="cities"
    v-long-press="500"
    @long-press-start="onLongPressStart"
    @long-press-stop="onLongPressStop">
    <div class="container">
      <draggable v-model="cityList" :disabled="!this.$store.state.isEditMode">
        <City v-for="town in cityList"
          :key="town.city_id"
          :itr="town.city_id"
          :name="town.name"
          :country="town.country_name"
          :timezone="town.timezone"
          :date="date"/>
      </draggable >
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import DateTime from 'luxon/src/datetime';
import LongPress from 'vue-directive-long-press';
import City from '@/components/City.vue';

export default {
  name: 'Cities',
  components: {
    City,
    draggable,
  },
  data() {
    return {
      sortableCities: [],
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
        this.sortableCities = cities;
        // this.$store.dispatch('updateCities', {
        //   cities,
        // });
      },
    },
  },
  methods: {
    onLongPressStart () {
      this.$store.dispatch('toggleEditMode', 'on');
      console.log('start');
    },
    onLongPressStop () {
      console.log('end');
    }
  },
  directives: {
    'long-press': LongPress,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .cities {
    padding-top: 8px;
    max-height: calc(100vh - 145px);
    overflow-y: overlay;
  }
</style>