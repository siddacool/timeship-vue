<template>
  <div class="control">
    <div class="container">
      <transition name="slide">
      <div class="control-body" v-show="this.$route.name === 'home'">
        <a href="#" class="add-btn" @click.prevent="redirectToSearch">
          <span class="add-btn-round">
            <svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M24 10H14V0h-4v10H0v4h10v10h4V14h10z"></path></svg>
          </span>
        </a>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Control',
  methods: {
    redirectToSearch() {
      this.$router.push({ name: 'add' });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .control {
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

  .add-btn {
    display: inline-block;
    padding: 1rem;

    .add-btn-round {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background: #000;
    }

    svg {
      fill: #fff;
      width: 16px;
      height: 16px;
    }
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: transform .2s;
  }

  .slide-enter, .slide-leave-to  {
    transform: translateY(84px);
  }
</style>
