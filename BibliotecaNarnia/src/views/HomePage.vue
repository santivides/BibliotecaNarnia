<template>
    <div class="home-container">
        <header>
            <h1>Biblioteca Narnia</h1>
        </header>
        <section class = 'page-body'>
            <h2>Expande tus horizontes a través de la lectura</h2>
            <p>Ven y conce nuestra colección de libros o mira aquí mismo</p>
            <button>mirar catalogo</button>
        </section>
    </div>
</template>

<script>
    export default {
    name: 'LogicComponent',
    mounted() {
        console.log('El componente se ha montado');
    }
    }
</script>

<style>

.page-body{
    background-color: #FFF8E8;
    
}

</style>
