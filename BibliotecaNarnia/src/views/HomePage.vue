<template>
  <div class="home-container">
      <header>
          <div class="header-title">
              <h1>Biblioteca Narnia</h1>
          </div>
          
          <div class="header-button">
              <RouterLink to="/login">
                  <button>Iniciar sesión</button>
              </RouterLink>
              
          </div>
      </header>
      <section class = 'page-body'>
          <h2>Expande tus horizontes a través de la lectura</h2>
          <p>Ven y conce nuestra colección de libros o mira aquí mismo</p>
          <RouterLink to="/login">
              <button>mirar catalogo</button>
          </RouterLink>
          
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

html, body {
height: 100%;
margin: 0;
}

.home-container {
display: flex;
flex-direction: column;
height: 100vh; /* Hace que el contenedor ocupe toda la altura de la ventana */
}


/* Estilo del header */
header {
background-color: #674636;
height: 100px; /* Altura fija para el header */
padding: 10px;
display: flex;
justify-content: space-between; 
}


.header-title {
  font: italic;
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.header-button{
  align-self: center;   
}

.page-body {
background-color: #F7EED3;
display: flex;
flex-grow: 1; /* Hace que la sección principal ocupe todo el espacio restante */
flex-direction: column;
justify-content: center; /* Centra el contenido verticalmente */
align-items: flex-start; /* Alinea el contenido al inicio horizontalmente */
padding: 20px;
box-sizing: border-box;
color: black;
font-style: italic; 
}

.page-body h2 {
font-style: italic;
font-size: 40px;
font-weight: 600;
color: #674636;
}

.page-body p {
font-size: 16px;
color: #333333;
}

/* Estilo del botón */
.page-body button, .header-button button{
background-color: #AAB396;
font-style: italic;
border-radius: 6px;
border: none;
padding: 10px 20px; /* Relleno adecuado para el botón */
margin-top: 10px; /* Margen superior para separar el botón del texto */
cursor: pointer;
}

.page-body button:hover, .header-button button:hover{
background-color: #8a9f78; /* Efecto hover en el botón */
}

</style>