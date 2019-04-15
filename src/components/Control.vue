<template>
  <div class="control">
    <div class="container">
      <div class="control-body">
        <a href="#" class="btn done-btn" @click.prevent="turnOffTutorial" v-if="this.$store.state.isEditMode">
          <span class="btn__round" :class="{pulse: isDonePulse}">
            <svg width="100%" height="100%" viewBox="0 0 24 24"><path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z"/></svg>
          </span>
        </a>
        <a href="#" class="btn add-btn" @click.prevent="redirectToSearch" v-else>
          <span class="btn__round" :class="{pulse: isAddPulse}">
            <svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M24 10H14V0h-4v10H0v4h10v10h4V14h10z"></path></svg>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Control',
  computed: {
    isAddPulse() {
      return this.$store.state.isTutorialMode && this.$store.getters.totalCities < 2 && !this.$store.state.isEditMode;
    },
    isDonePulse() {
      return this.$store.state.isTutorialMode && this.$store.state.isEditMode && !this.$store.state.isSortTutorial;
    }
  },
  methods: {
    redirectToSearch() {
      this.$router.push({ name: 'add' });
    },
    turnOffTutorial() {
      this.$store.dispatch('toggleEditMode', 'off');
      this.$store.dispatch('toggleTutorialMode', 'off');

      if (this.$store.state.isFirstStart) {
        this.$store.dispatch('disableTutorialAutoLaunch');
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  // colors list
  @import '../styles/colors';

  .control {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
  }

  .container {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
  }

  .control-body {
    background-color: #fff;
    border-radius: 8px 8px 0 0;
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: 1px 1px 5px 0px rgba(235, 136, 136, 0.078);

    @media only screen and (min-width: 1025px) {
      padding-top: 1.2rem;
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

  .btn {
    display: inline-block;
    padding: 1rem;

    .btn__round {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background: #000;

       &.pulse {
        animation: shadow-pulse 1s infinite;
      }
    }

    svg {
      fill: #fff;
      width: 16px;
      height: 16px;
    }
  }

  .add-btn {
    .btn__round {
      background: $base-color;
    }
  }

  .done-btn {
    .btn__round {
      background: $safe-color;
    }
  }
</style>
