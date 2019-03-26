<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <NavTime />
    <router-view/>
  </div>
</template>

<script>
  import NavTime from '@/components/NavTime.vue';

  export default {
    name: 'app',
    components: {
      NavTime,
    },
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

  @media only screen and (min-width: 1025px) {
    .container {
      margin: 0 auto;
      max-width: 700px;
    }
  }
</style>
