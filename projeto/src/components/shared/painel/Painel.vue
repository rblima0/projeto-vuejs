<template>
    <div class="painel">
        <h2 class="painel-titulo">{{ titulo }}</h2>
        <slot class="painel-conteudo"></slot>
    </div>    
</template>

<script>
export default {
  props: ['titulo']
}
</script>

<style>
/* estilo do painel */ 
.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}
.painel .painel-titulo {
  text-align: center;
  border: solid 2px #e74c3c;
  background: #c0392b;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
  color: #ecf0f1;
  font-size: 14px;
}
</style>
