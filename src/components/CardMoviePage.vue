<template>
  <div class="col">
    <div class="movie_card d-flex">
      <div class="content_image d-flex flex-column m-auto h-100">
        <img
          class="img-fluid rounded h-100"
          :src="`http://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          alt="poster"
        >
        <div class="content_text p-1">
          <div v-if="(movie.title === movie.original_title)">
            Titolo originale: {{ movie.original_title }}
          </div>
          <div v-else>
            Titolo: {{ movie.title }}
          </div>
          <lang-flag iso="en" />
          <div>{{ movie.original_language }}</div>
          <div>Voto: {{ movie.vote_average }}</div>
          <div>Trama: {{ movie.overview }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
  name: 'CardMoviePage',
  components: {
    LangFlag,
  },
  props: {
    movie: Object,
  },
  // data() {
  //   return {
  //     LanguageFlag: '{{ movie.original_language }}',
  //   };
  // },
};
</script>

<style lang="scss" scoped>
.movie_card {
  height: 100%;
  background-color: #000000;
  color: white;
  position: relative;
};

.content_image {
  &:hover{
    cursor: pointer;
    visibility: hidden;
    .content_text {
      visibility: visible;
    }
  }
};
.content_text{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: hidden;
};
</style>
