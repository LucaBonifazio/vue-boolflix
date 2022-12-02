<template>
  <main class="d-flex flex-column p-1">
    <h1
      v-if="movies.length"
      class="text-white mt-4 px-4"
    >
      Movies
    </h1>
    <div
      class="row row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 container m-auto"
    >
      <CardMoviePage
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <h1
      v-if="series.length"
      class="text-white mt-4 p-4"
    >
      Series
    </h1>
    <div
      class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 container m-auto pb-5"
    >
      <CardSeriePage
        v-for="serie in series"
        :key="serie.id"
        :serie="serie"
      />
    </div>
  </main>
</template>

<script>
import CardMoviePage from '@/components/CardMoviePage.vue';
import CardSeriePage from '@/components/CardSeriePage.vue';

export default {
  name: 'MainPage',
  components: {
    CardMoviePage,
    CardSeriePage,
  },
  props: {
    movies: Array,
    series: Array,
  },
};
</script>

<style lang="scss" scoped>
  main {
    height: 90vh;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    background-color: rgb(37, 37, 37);
  }
  main::-webkit-scrollbar {
    display: none;
  }
</style>
