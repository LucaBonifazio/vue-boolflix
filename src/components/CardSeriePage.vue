<template>
  <div class="col">
    <div class="flip-card d-flex">
      <div class="flip-card-inner d-flex flex-column m-auto h-100">
        <div
          v-if="serie.poster_path"
          class="flip-card-front"
        >
          <img
            class="img-fluid rounded h-100"
            :src="`http://image.tmdb.org/t/p/w500/${serie.poster_path}`"
            :alt="serie.name"
          >
        </div>
        <div
          v-else
          class="flip-card-inner"
        >
          <img
            class="image_not_found img-fluid rounded h-100"
            src="https://media.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif"
            alt="image not found"
          >
        </div>
        <div class="flip-card-back p-1">
          <div v-if="(serie.name === serie.original_name)">
            <strong>Titolo originale:</strong> {{ serie.original_name }}
          </div>
          <div v-else>
            <strong>Titolo:</strong> {{ serie.name }}
          </div>
          <lang-flag :iso="serie.original_language" />
          <div>
            <strong>Voto:</strong>
            <i
              v-for="i in rate"
              :key="i"
              class="fa-solid fa-star"
              :style="{color: 'gold'}"
            />
            <i
              v-for="i in (5 - rate)"
              :key="i"
              class="fa-regular fa-star"
              :style="{color: 'gold'}"
            />
          </div>
          <div v-if="serie.overview">
            <strong>Trama:</strong> {{ serie.overview }}
          </div>
          <div v-else>
            La trama non è presente
          </div>
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
  data() {
    return {
      rate: Math.ceil((this.serie.vote_average * 5) / 10),
    };
  },
};
</script>

<style lang="scss" scoped>
.image_not_found{
  object-fit: cover;
  object-position: center;
}
.flip-card {
  background-color: transparent;
  width: 200px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  height: 100%;
  overflow: auto;
  background-color: #000000;
  color: white;
  transform: rotateY(180deg);
}

.flip-card-back::-webkit-scrollbar {
    display: none;
}

.flip-card-back {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
