<template>
  <div>
    <HeaderPage @searchQuery="search" />
    <MainPage
      :movies="arrMovies"
      :series="arrSeries"
      @search="search"
    />
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
        });
    },
  },
};
</script>

<style lang="scss">
   @import "~bootstrap/scss/bootstrap";

</style>
