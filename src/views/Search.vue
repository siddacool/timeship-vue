<template>
  <div class="search">
    <SearchBar />
    <SearchResult />
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
import SearchResult from '@/components/SearchResult.vue';

export default {
  name: 'search',
  components: {
    SearchBar,
    SearchResult,
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
