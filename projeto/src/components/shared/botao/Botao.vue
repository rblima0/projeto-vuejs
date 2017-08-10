<template>
    <button @click="disparaAcao()" :class="estiloDoBotao" :type="tipo">{{ rotulo }}</button>
</template>

<script>
 

export default {
//props : ['tipo', 'rotulo', 'confirmacao', 'estilo']
//FAZENDO VALIDACAO DAS PROPS
    props: {
        tipo: {
            required: true,
            type: String
        },
        rotulo: {
            required: true,
            type: String
        },
        confirmacao: Boolean,
        estilo: String
    },
    
    methods: {
        disparaAcao(){
            if(this.confirmacao){
                if(confirm('Deseja realmente excluir ?')){
                this.$emit('botaoAtivado');
                }
                return;
            }
            this.$emit('botaoAtivado');
        }
    },

    computed: {
        estiloDoBotao(){
            if(this.estilo == 'padrao' || !this.estilo) return 'botao botao-padrao';
            if(this.estilo == 'perigo') return 'botao botao-perigo';
        }
    }
}
</script>

<style scoped>
.botao {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1em;
}
.botao-perigo {
    background: #c0392b;
    color: white;
}
.botao-padrao {
    background: darkcyan;
    color: white;
}
</style>