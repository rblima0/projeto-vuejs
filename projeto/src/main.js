import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes';
import './directives/Transform';

import VeeValidate, { Validator } from 'vee-validate';
import msg from './pt_BR'

import './assets/css/teste.css';
import './assets/js/teste.js';

//jquery é importado pelo webpack.config descomente o codigo lá para usar o JQUERY
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';

Vue.use(VueResource);
Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes, //Propriedade: Rota
  mode: 'history' // o padrão é hash
});

Validator.addLocale(msg);
Vue.use(VeeValidate, {
    locale: 'pt_BR'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
