<template>
  <div>
    <h1 class="centralizado" v-meu-transform >{{ titulo }}</h1>

    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    <input type="search" class="filtro" @input="filtro = $event.target.value"  placeholder="Informe sua busca...">

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro" :key="foto._id">

        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva v-meu-transform="{incremento: 180, animate: true}" :url="foto.url" :titulo="foto.titulo" />
          <router-link :to="{ name: 'altera', params: { id: foto._id }}">
            <meu-botao tipo="button" rotulo="ALTERAR" />
          </router-link>
          <meu-botao tipo="button" rotulo="REMOVER" @botaoAtivado="remove(foto)" :confirmacao="true" 
          estilo="perigo" />
        </meu-painel>

      </li>
    </ul>
    
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';
import FotoService from '../../domain/foto/FotoService';

export default {

  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  data(){
    return{
      titulo: 'Searchall',
      fotos: [],
      filtro: '',
      mensagem: ''
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

    methods: {

      remove(foto){

        this.service
        .apaga(foto._id)
        .then(() => {
            let indice = this.fotos.indexOf(foto);
            this.fotos.splice(indice, 1);
            this.mensagem = 'Foto removida com SUCESSO.';
            }, err => {
              this.mensagem = err.message;
          });
      }
    },

    created(){

      this.service = new FotoService(this.$resource);
      this.service
        .lista()
        .then(fotos => this.fotos = fotos, err => this.mensagem = err.message);
  }
}
</script>

<style>
.centralizado {
  text-align: center;
  text-transform: uppercase;
  color: #d35400;
  border-bottom: 1px solid #e67e22;
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
