<template>
  <header>
    <h1>BOOFLIX</h1>
    <div class="search_bar">
      <form @submit.prevent="searchQuery">
        <label for="query">
          <input
            id="query"
            v-model="searchString"
            type="text"
            name="query"
            placeholder="Scrivi qui..."
          >
        </label>
        <button
          class="btn btn-danger mx-1"
        >
          Search
        </button>
      </form>
    </div>
  </header>
</template>

<script>

export default {
  name: 'HeaderPage',
  data() {
    return {
      searchString: '',
    };
  },
  methods: {
    searchQuery() {
      this.$emit('queryValue', this.searchString);
    },
  },
};
</script>

<style lang="scss" scoped>
  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem;
    height: 10vh;
    background-color: rgb(32, 32, 32);
  }

  header h1{
    font-size: 3rem;
    color: rgb(136, 10, 10);
  }
</style>
