<template>
  <div class="home">
    <Cities />
    <Control />
  </div>
</template>

<script>
// @ is an alias to /src
import Cities from '@/components/Cities.vue';
import Control from '@/components/Control.vue';

export default {
  name: 'home',
  components: {
    Cities,
    Control,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .home {
    background-color: #f5f5f5;
    display: block;
    grid-row-start: 2;
    grid-row-end: 3;
  }
</style>