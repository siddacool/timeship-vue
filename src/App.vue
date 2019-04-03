<template>
  <div id="app">
    <div class="layout" :class="countCities">
      <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div> -->
      <NavTime />
      <router-view/>
      <Control />
    </div>
  </div>
</template>

<script>
  import NavTime from '@/components/NavTime.vue';
  import Control from '@/components/Control.vue';

  export default {
    name: 'app',
    components: {
      NavTime,
      Control,
    },
    computed: {
      countCities() {
        return this.$store.state.cityList.length <= 3 ? 'expand' : '';
      }
    }
  };
</script>

<style lang="scss">
  // base settings
  @import './styles/base';

  // colors list
  @import './styles/colors';

  // fonts
  @import url('https://fonts.googleapis.com/css?family=Barlow:400,500,600,800');

  $base-font: 'Barlow', 'segoe ui', Helvatica, arial, sans-serif;

  body {
    font-family: $base-font;
  }

  .layout {
    display: grid;
    grid-template-rows: 24px auto 80px;
    grid-template-columns: 100vw;
    overflow-x: hidden;
    min-height: 100vh;

    @media only screen and (min-width: 1025px) {
      grid-template-rows: 64px auto 80px;
    }

    &.expand {
      grid-template-rows: 64px auto 150px;
        @media only screen and (min-width: 1025px) {
        grid-template-rows: 64px auto 150px;
      }
    }
  }

  @media only screen and (min-width: 1025px) {
    .container {
      margin: 0 auto;
      max-width: 700px;
    }
  }
</style>
