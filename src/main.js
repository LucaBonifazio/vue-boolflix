import Vue from 'vue';
import 'bootstrap';
import LangFlag from 'vue-lang-code-flags';
import App from './App.vue';

Vue.component('LangFlag', LangFlag);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
