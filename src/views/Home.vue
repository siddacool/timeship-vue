<template>
  <div class="home">
    <div class="container">
      <Cities />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Cities from '@/components/Cities.vue';

export default {
  name: 'home',
  components: {
    Cities,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .home {
    background-color: #f5f5f5;
    display: block;
    height: calc(100vh - 24px);
    width: 100vw;

    @media only screen and (min-width: 1025px) {
      height: calc(100vh - 64px);
    }
  }
</style>