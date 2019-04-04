<template>
  <div class="search">
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'search',
  components: {
    SearchBar,
  },
};
</script>

<style scoped lang="scss">
  .search {
    background-color: #f5f5f5;
    display: block;
    grid-row-start: 2;
    grid-row-end: 3;
    padding-top: 8px;
  }
</style>
