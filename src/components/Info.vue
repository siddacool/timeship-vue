<template>
  <div class="info" v-if="!this.$store.state.isTutorialMode">
    <a href="#" class="info-btn" @click.prevent="turnOnTutorialMode">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z"/></svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Info',
  methods: {
    turnOnTutorialMode() {
      this.$store.dispatch('toggleTutorialMode', 'on');
      this.$store.dispatch('toggleSortTutorial', 'on');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  // colors list
  @import '../styles/colors';

.info {
  position: absolute;
  bottom: 20px;
  width: 100vw;
  left: 0;
  display: flex;
  justify-content: center;
  min-height: 50px;
  opacity: .8;
}

.info-btn {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
