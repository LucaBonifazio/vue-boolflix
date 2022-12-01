<template>
  <div class="col">
    <div class="serie_card d-flex">
      <div class="content_image d-flex flex-column m-auto h-100">
        <img
          class="img-fluid rounded h-100"
          :src="`http://image.tmdb.org/t/p/w500/${serie.poster_path}`"
          alt="poster"
        >
        <div class="content_text">
          <div v-if="(serie.name === serie.original_name)">
            Titolo originale: {{ serie.original_name }}
          </div>
          <div v-else>
            Titolo: {{ serie.name }}
          </div>
          <div>{{ serie.original_language }}</div>
          <div>Voto: {{ serie.vote_average }}</div>
          <div>Trama: {{ serie.overview }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardSeriePage',
  props: {
    serie: Object,
  },
};
</script>

<style lang="scss" scoped>
.serie_card {
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
