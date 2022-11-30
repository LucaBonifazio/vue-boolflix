<template>
  <div>
    <HeaderPage />
    <MainPage />
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
    };
  },
  created() {
    axios.get('https://api.themoviedb.org/3', {
      params: {
        api_key: '931d96068b3048df68de10bf86fc9c5f',
        language: 'it-IT',
        query: 'results',
      },
    })
      .then((axiosResponse) => {
        this.arrMovies = axiosResponse.data.results;
        console.log(axiosResponse);
      });
  },
};
</script>

<style lang="scss">
   @import "~bootstrap/scss/bootstrap";
</style>
