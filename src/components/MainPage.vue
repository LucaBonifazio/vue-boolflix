<template>
  <main class="d-flex p-1">
    <div
      v-if="arrMovies"
      class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 container"
    >
      <CardPage
        v-for="movie in arrMovies"
        :key="movie.i"
        :poster="movie.poster"
        :title="movie.title"
        :author="movie.author"
        :year="movie.year"
      />
    </div>
    <div
      v-else
      class="text-white"
    >
      Loading, page is not ready...
    </div>
  </main>
</template>

<script>
import CardPage from '@/components/CardPage.vue';

export default {
  name: 'MainPage',
  components: {
    CardPage,
  },
};
</script>

<style lang="scss" scoped>
  main {
    height: 90vh;
    background-color: rgb(37, 37, 37);
  }
</style>
