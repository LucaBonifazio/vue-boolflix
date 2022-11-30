<template>
  <div class="col">
    <div class="movie_card text-center d-flex">
      <div class="content d-flex flex-column m-auto">
        <div class="title">
          {{ title }}
        </div>
        <div class="original_title">
          {{ original_title }}
        </div>
        <div class="original_language">
          {{ original_language }}
        </div>
        <div class="vote_count">
          {{ vote_count }}
        </div>
        <!-- TODO cercare moto per inserire immagine -->
        <!-- <div class="poster_path">
          {{ poster_path }}
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardPage',
  props: {
    title: String,
    original_title: String,
    original_language: String,
    vote_count: Number,
    poster_path: String,
  },
};
</script>

<style lang="scss" scoped>
.movie_card {
  height: 100%;
  background-color: #414141;
  color: white;
  &:hover{
    cursor: pointer;
    transform: rotate3d(0, 1, 0, 180deg);
    transition: 1s;
  };
}
</style>
