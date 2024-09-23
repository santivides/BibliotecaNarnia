<template>
  <div class="home-container">
    <header>
      <div class="header-title">
        <h1>Biblioteca Narnia</h1>
      </div>
    </header>
    <div class="page-body">
      <h1>Agregar/Quitar/Modificar Libro</h1>

      <div class="section">
        <h2>Eliminar/Modificar Libro</h2>
        <table class="book-table">
          <thead>
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>ISBN</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="libro in libros" :key="libro.ISBN">
              <td>{{ libro.NombreLibro }}</td>
              <td>{{ libro.Autor }}</td>
              <td>{{ libro.ISBN }}</td>
              <td>{{ libro.Estado }}</td>
              <td>
                <button @click="deleteBook(libro.ISBN)" class="action-button delete-button">Eliminar</button>
                <button @click="modifyBook(libro.ISBN)" class="action-button">Modificar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div class="section">
        <h2>Agregar Libro</h2>
        <input v-model="newBook.NombreLibro" placeholder="Título" class="input-field"/>
        <input v-model="newBook.Autor" placeholder="Autor" class="input-field"/>
        <input v-model="newBook.ISBN" placeholder="ISBN" class="input-field"/>
        <input v-model="newBook.FechaPublicacion" placeholder="Fecha de Publicación" class="input-field"/>
        <input v-model="newBook.Descripcion" placeholder="Descripción" class="input-field"/>
        <input v-model="newBook.Estado" placeholder="Estado" class="input-field"/>
        
        <button @click="addBook" class="action-button">Agregar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { soapService } from '@/services/soapService'; // Importa el servicio SOAP

export default {
  data() {
    return {
      searchName: '', // Para buscar un libro por nombre
      libros: [], // Para almacenar los libros
      newBook: {
        NombreLibro: '',
        Autor: '',
        ISBN: '',
        FechaPublicacion: '',
        Descripcion: '',
        Estado: ''
      }, // Para agregar un nuevo libro
      book: null // Aquí se almacenará el libro encontrado para modificar/eliminar
    };
  },
  methods: {
    async fetchLibros() {
      try {
        // Llama al servicio SOAP para obtener la lista de libros
        const response = await soapService.obtenerLibros();
        this.libros = response;
      } catch (error) {
        console.error('Error al obtener libros:', error);
      }
    },
    async searchBook() {
      try {
        // Busca un libro por nombre utilizando el servicio SOAP
        const response = await soapService.obtenerLibroPorNombre(this.searchName);
        if (response) {
          this.book = response; // Asigna el libro encontrado
        } else {
          alert('Libro no encontrado');
        }
      } catch (error) {
        console.error('Error al buscar libro:', error);
      }
    },
    async addBook() {
      try {
        // Llama al servicio SOAP para agregar un libro
        await soapService.agregarLibro(this.newBook);
        alert('Libro agregado con éxito');
        this.fetchLibros(); // Actualiza la lista de libros
      } catch (error) {
        console.error('Error al agregar libro:', error);
      }
    },
    async deleteBook() {
      try {
        // Llama al servicio SOAP para eliminar un libro por ISBN
        await soapService.eliminarLibro(this.book.ISBN);
        alert('Libro eliminado con éxito');
        this.book = null; // Limpia el libro mostrado
        this.fetchLibros(); // Actualiza la lista de libros
      } catch (error) {
        console.error('Error al eliminar libro:', error);
      }
    },
    async modifyBook() {
      try {
        // Llama al servicio SOAP para modificar un libro
        await soapService.modificarLibro(this.book);
        alert('Libro modificado con éxito');
        this.fetchLibros(); // Actualiza la lista de libros
      } catch (error) {
        console.error('Error al modificar libro:', error);
      }
    }
  },
  mounted() {
    this.fetchLibros(); // Carga los libros al montar el componente
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

.page-body h1, .page-body h2 {
  color: #674636;
  font-weight: bold;
  font-style: italic;
}

.section {
  margin-bottom: 30px;
}

.input-field {
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
  margin-right: 10px;
}

.action-button:hover {
  background-color: #8a9f78;
}

.delete-button {
  background-color: #d9534f; /* Color para el botón de eliminar */
}

.delete-button:hover {
  background-color: #c9302c;
}

.book-table {
  width: 100%;
  max-width: 800px;
  border-collapse: collapse;
  margin-bottom: 20px;
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

.book-info {
  margin-top: 20px;
}
</style>
