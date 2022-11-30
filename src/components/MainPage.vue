<template>
  <main class="d-flex p-1">
    <div
      v-if="movies"
      class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 container m-auto"
    >
      <CardPage
        v-for="movie in movies"
        :key="movie.id"
        :title="movie.title"
        :original_title="movie.original_title"
        :original_language="movie.original_language"
        :vote_count="movie.vote_count"
      />
    </div>
    <div
      v-else
      class="text-white m-auto"
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
  props: {
    movies: Array,
  },
};
</script>

<style lang="scss" scoped>
  main {
    height: 90vh;
    background-color: rgb(37, 37, 37);
  }
</style>
