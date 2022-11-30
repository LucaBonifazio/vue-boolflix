<template>
  <header>
    <h1>BOOFLIX</h1>
    <div class="search_bar">
      <input
        class="search_input m-3"
        placeholder="Scrivi qui..."
      >
      <button class="btn btn-danger">
        Search
      </button>
    </div>
  </header>
</template>

<script>

export default {
  name: 'HeaderPage',
  components: {

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
    font-size: 4rem;
    color: rgb(136, 10, 10);
  }
</style>
