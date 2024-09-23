<template>
  <div class="home-container">
    <header>
      <div class="header-title">
        <h1>Biblioteca Narnia</h1>
      </div>
    </header>
    <div class="page-body">
      <h1>Bienvenido a la biblioteca Narnia</h1>
      <h2>Disfruta de nuestros libros</h2>
      <div class="button-container">
        <router-link to="/consultar">
          <button @click="consultarLibros">Consultar libros</button>
        </router-link>
        <router-link to="/administrar">
          <button @click="administrarLibros">Administrar libros</button>
        </router-link>
      </div>
      <ul class="book-list">
        <li v-for="libro in libros" :key="libro.ISBN">{{ libro.NombreLibro }} - {{ libro.Autor }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      libros: [] // Aquí deberías cargar los libros desde tu servicio SOAP o API.
    };
  },
  methods: {
    consultarLibros() {
      // Acción al consultar libros
    },
    administrarLibros() {
      // Acción al administrar libros
    }
  }
};
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
    font-family: 'Poppins', sans-serif; /* Usando la fuente Poppins */
  }

  .home-container {
    display: flex;
    flex-direction: column;
    height: 100vh; /* Ocupa toda la altura de la ventana */
  }

  /* Estilo del header */
  header {
    background-color: #674636; /* Color marrón oscuro del header */
    height: 100px;
    padding: 10px;
    display: flex;
    align-items: center;
  }

  .header-title {
    font-size: 24px;
    font-weight: bold;
    color: white;
    font-style: italic;
  }

  .page-body {
    background-color: #F7EED3; /* Fondo color crema */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-grow: 1; /* Para ocupar todo el espacio restante */
  }

  .page-body h1 {
    color: #674636; /* Color marrón oscuro */
    font-size: 36px;
    font-weight: bold;
    font-style: italic;
  }

  .page-body h2 {
    color: #674636; /* Color marrón oscuro */
    font-size: 28px;
    font-weight: 600;
    font-style: italic;
  }

  .button-container {
    display: flex;
    gap: 20px; /* Espacio entre los botones */
    margin-top: 20px;
  }

  /* Estilo del botón */
  button {
    background-color: #AAB396; /* Verde oliva */
    font-style: italic;
    border-radius: 6px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    color: white;
    font-size: 16px;
  }

  button:hover {
    background-color: #8a9f78; /* Verde más oscuro al hacer hover */
  }

  .book-list {
    margin-top: 30px;
    list-style: none;
    padding: 0;
  }

  .book-list li {
    font-size: 18px;
    color: #333333;
    font-style: italic;
    margin: 5px 0;
  }

</style>


