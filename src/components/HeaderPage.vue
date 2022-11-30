<template>
  <header>
    <h1>BOOFLIX</h1>
    <div class="search_bar">
      <label for="search">
        <input
          id="search"
          v-model="searchString"
          type="text"
          name="search"
          placeholder="Scrivi qui..."
          @keyup.enter="search"
        >
      </label>
      <button
        class="btn btn-danger mx-1"
        @click="search"
      >
        Search
      </button>
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
    search() {
      this.$emit('search', this.searchString);
    },
  },
};
</script>

<style lang="scss" scoped>
  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    height: 10vh;
    background-color: rgb(32, 32, 32);
  }

  header h1{
    font-size: 3rem;
    color: rgb(136, 10, 10);
  }
</style>
