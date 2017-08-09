<template>

    <nav class="menu">
        <ul>
            <li v-for="rota in rotas">
                <router-link :to="rota.path ? rota.path : '/'">{{ rota.titulo }}</router-link>
            </li>
        </ul>
    </nav>

</template>

<script>
export default {
    props: {
        rotas: {
            type: Array, 
            required: true
        }
    }
}
</script>

<style>
nav.menu {
    background-color: #ecf0f1;
    padding: 1px 0;
    width: 100%;
}
nav.menu > ul {
    list-style: none;
}
nav.menu > ul > li {
    display: inline-block;
    padding: 0 0.5em;
    text-transform: uppercase;
}
nav.menu > ul > li > a {
  color: #c0392b;
  font-weight: bold;
  text-decoration: none;
}
nav.menu > ul > li > a:hover{
    color: #e74c3c;
}
</style>