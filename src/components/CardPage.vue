<template>
  <div class="col">
    <div class="artist_card text-center">
      <img
        :src="poster"
        :alt="title"
        class="img-fluid rounded p-2"
      >
      <h2 class="title p-2">
        {{ title }}
      </h2>
      <div class="author">
        {{ author }}
      </div>
      <div class="year">
        {{ year }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardPage',
  components: {

  },
};
</script>

<style lang="scss" scoped>
.artist_card {
  height: 100%;
  background-color: #2E3A46;
  &:hover{
    cursor: pointer;
    box-shadow: 5px 5px 10px 5px #00ff80;
    transform: scale(1.1);
  }
}
  .title {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }

  .author,
  .year {
    color: #656C71;
  }
</style>
