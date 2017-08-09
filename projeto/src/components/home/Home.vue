<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="filtro" @input="filtro = $event.target.value"  placeholder="Informe sua busca...">

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">

        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo"></imagem-responsiva>
        </meu-painel>

      </li>
    </ul>
    
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';

export default {

  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva
  },

  data(){
    return{
      titulo: 'Searchall',
      fotos: [],
      filtro: ''
    }
  }, 
    computed: {
      fotosComFiltro(){
        if(this.filtro){
          let exp = new RegExp(this.filtro.trim(), 'i');
          return this.fotos.filter(foto => exp.test(foto.titulo));
        } else {
          return this.fotos;
        }
      }
    },

    created(){
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
  }
}
</script>

<style>
.centralizado {
  text-align: center;
  text-transform: uppercase;
  color: #c0392b;
  border-bottom: 1px solid #e74c3c;
}
.lista-fotos {
  list-style: none;
}
.lista-fotos .lista-fotos-item {
  display: inline-block;
}
.filtro {
  display: block;
  margin: 0 auto;
  width: 60%;
  padding: 0.5em;
  box-shadow: 5px 5px 5px #888888;
}
</style>
