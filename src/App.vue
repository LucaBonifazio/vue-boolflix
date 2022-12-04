<template>
  <div class="bg_container">
    <HeaderPage @queryValue="search" />
    <div
      v-if="(arrMovies.length != 0 && arrSeries.length != 0)"
    >
      <MainPage
        :movies="
          arrMovies"
        :series="arrSeries"
        @search="search"
      />
    </div>
    <div
      v-else-if="(axiosEmpty == false && arrMovies.length == 0 && arrSeries.length == 0)"
      class="gif_box d-flex flex-column justify-content-center align-item-center container w-50"
    >
      <h1 class="text-white p-1">
        Non ho trovato quello che cercavi, aiutami a trovare il colpevole!!!
      </h1>
      <img
        class="query_not_found img-fluid rounded h-100"
        src="https://i.pinimg.com/originals/8c/b4/88/8cb48892e3fa929efdab85b19eb31c90.gif"
        alt="not found"
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderPage from './components/HeaderPage.vue';
import MainPage from './components/MainPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,
  },
  data() {
    return {
      arrMovies: [],
      arrSeries: [],
      axiosEmpty: true,
    };
  },
  methods: {
    search(value) {
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '931d96068b3048df68de10bf86fc9c5f',
          language: 'it-IT',
          query: value,
        },
      })
        .then((axiosResponse) => {
          this.arrMovies = axiosResponse.data.results;
          this.axiosEmpty = false;
        });
      axios.get('https://api.themoviedb.org/3/search/tv', {
        params: {
          api_key: '931d96068b3048df68de10bf86fc9c5f',
          language: 'it-IT',
          query: value,
        },
      })
        .then((axiosResponse) => {
          this.arrSeries = axiosResponse.data.results;
          this.axiosEmpty = false;
        });
    },
  },
};
</script>

<style lang="scss">
   @import "~bootstrap/scss/bootstrap";

   .bg_container{
    height: 100vh;
    background-color: rgb(37, 37, 37);
   }
   .gif_box{
    display: flex;
    margin: auto;
   }

</style>
