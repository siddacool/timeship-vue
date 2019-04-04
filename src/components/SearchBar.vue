<template>
  <div class="search-bar">
    <div class="container">
      <div class="search-bar-body" :class="{ active : isFocusActive }">
        <a href='#' class="back-btn" @click.prevent="redirectToHome">
          <svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167L16.67 24 4.5 12.004z"></path></svg>
        </a>
        <input type="text" class="search-term" ref="searchTerm" v-model="searchTerm" placeholder="Add a City, e.g. Mumbai, New York"
          @blur="searchBlur"
          @focus="searchFocus"
        >
        <a href='#' class="cancel-btn" @click.prevent="clearSearch">
          <svg viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 16.084L16.097 17.5l-4.09-4.096L7.905 17.5 6.5 16.095l4.093-4.092L6.5 7.905 7.905 6.5l4.088 4.089L16.084 6.5 17.5 7.903l-4.092 4.087 4.092 4.094z"></path></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import DateTime from 'luxon/src/datetime';

export default {
  name: 'SearchBar',
  data(){
    return {
      searchTerm: '',
      isFocusActive: false,
    }
  },
  mounted() {
    this.$refs.searchTerm.focus();
  },
  methods: {
    redirectToHome() {
      this.$router.push({ name: 'home' });
    },
    clearSearch() {
      this.searchTerm = '';
    },
    searchBlur() {
      this.isFocusActive = false;
    },
    searchFocus() {
      this.isFocusActive = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .search-bar-body {
    background-color: #fff;
    height: 48px;
    border-radius: 25px;
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: stretch;
    box-shadow: 1px 1px 5px 0px rgba(235, 136, 136, 0.078);

    &.active {
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.18);
    }
  }

  .search-term {
    flex: 1;
    height: 100%;
    border: none;
    font-size: 14px;
    letter-spacing: .4PX;
  }

  .back-btn {
    padding: 0 .5rem;
    padding-right: 1rem;
    display: inline-flex;
    align-items: center;
    svg {
      height: 14px;
      width: 14px;
    }
  }

  .cancel-btn {
    padding: 0 .7rem;
    padding-left: 1rem;
    display: inline-flex;
    align-items: center;
    min-width: 44px;

    svg {
      height: 16px;
      width: 16px;
    }
  }
</style>
