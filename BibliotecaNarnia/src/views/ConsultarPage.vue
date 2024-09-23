<template>
  <div class="home-container">
    <header>
      <div class="header-title">
        <h1>Biblioteca Narnia</h1>
      </div>
    </header>
    <div class="page-body">
      <h1>Consultar Libros</h1>
      <table class="book-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="libro in libros" :key="libro.ISBN">
            <td>{{ libro.NombreLibro }}</td>
            <td>{{ libro.Estado }}</td>
          </tr>
        </tbody>
      </table>
      
      <input v-model="searchName" placeholder="Buscar libro por nombre" class="search-input"/>
      <button @click="searchAndRentBook" class="action-button">Buscar y Rentar</button>
    </div>
  </div>
</template>
  
<script>
import soapService from '@/services/soapService'; // Asegúrate de que el import sea correcto

export default {
  data() {
    return {
      searchName: '', // Para la búsqueda del libro
      libros: [ // Libros de ejemplo predefinido
        {
          NombreLibro: 'El León, la Bruja y el Ropero',
          Autor: 'C.S. Lewis',
          ISBN: '978-0-06-447104-6',
          Estado: 'Disponible'
        }
      ]
    };
  },
  computed: {
    filteredBooks() {
      // Filtrar libros basado en el nombre de búsqueda
      return this.libros.filter(libro =>
        libro.NombreLibro.toLowerCase().includes(this.searchName.toLowerCase())
      );
    }
  },
  methods: {
    async fetchLibros() {
      try {
        // Llama al servicio SOAP para obtener la lista de libros
        const response = await soapService.callSoapService('obtenerLibros', {});
        this.libros = response.libros || []; // Asegúrate de que libros esté en el formato esperado
      } catch (error) {
        console.error('Error al obtener libros:', error);
      }
    },
    async searchBook() {
      try {
        // Llama a la función para buscar libros
        const response = await soapService.callSoapService('buscarLibroPorNombre', { nombre: this.searchName });
        this.libros = response.libros || []; // Actualiza la lista de libros con el resultado de la búsqueda
      } catch (error) {
        console.error('Error al buscar el libro:', error);
      }
    }
  },
  mounted() {
    // Llama a la función para obtener libros cuando el componente se monte
    this.fetchLibros();
  }
};
</script>

  
<style>
html, body {
  height: 100%;
  margin: 0;
  font-family: 'Poppins', sans-serif; /* Fuente Poppins */
}

.home-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* Estilo del header */
header {
  background-color: #674636;
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
  background-color: #F7EED3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-grow: 1;
}

.page-body h1 {
  color: #674636;
  font-size: 36px;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 20px;
}

.book-table {
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  border-collapse: collapse;
}

.book-table th, .book-table td {
  border: 1px solid #674636;
  padding: 10px;
  text-align: left;
}

.book-table th {
  background-color: #AAB396;
  color: white;
  font-style: italic;
}

.book-table td {
  background-color: white;
  color: #333;
}

.search-input {
  padding: 10px;
  border: 1px solid #674636;
  border-radius: 6px;
  margin-bottom: 10px;
}

.action-button {
  background-color: #AAB396;
  color: white;
  font-style: italic;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
}

.action-button:hover {
  background-color: #8a9f78;
}
</style>>
  