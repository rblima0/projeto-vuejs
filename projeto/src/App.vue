<template>
  <div>
    <h1>{{ titulo }}</h1>

    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      titulo: 'Searchall',
      fotos: [
        {
          url: 'https://cdn.pixabay.com/photo/2016/10/22/17/46/scotland-1761292_960_720.jpg',
          titulo: 'Paisagem'
        },
        {
          url: 'http://desviantes.blob.core.windows.net/desviantes/production/media/uploads/pedra_do_c%C3%A9u_-_guaratinga.jpg',
          titulo: 'Montanha'
        }
      ] 
    }
  }
}
</script>

<style>

</style>
