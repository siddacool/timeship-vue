<template>
  <div id="app">
    <div class="layout">
      <NavTime />
      <router-view/>
    </div>
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

  .layout {
    display: grid;
    grid-template-rows: 24px auto;
    grid-template-columns: 100vw;
    overflow-x: hidden;
    min-height: 100vh;

    @media only screen and (min-width: 1025px) {
      grid-template-rows: 64px auto;
    }
  }

  @media only screen and (min-width: 1025px) {
    .container {
      margin: 0 auto;
      max-width: 700px;
    }
  }
</style>
