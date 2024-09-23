<template>
  <div class="login-contenedor">
    <div class="formulario">
      <h1>Iniciar Sesión</h1>
      <form @submit.prevent="login">
        <div class="login-campos">
          <input v-model="email" type="email" placeholder="Correo Electrónico" required />
          <input v-model="password" type="password" placeholder="Contraseña" required />
        </div>
        <div class="login-botones">
          <button type="submit">Iniciar Sesión</button>
        </div>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
      <RouterLink to="registro">
        <button @click="irARegistro" class="registro-btn">Regístrarse</button>
      </RouterLink>
      
    </div>
  </div>
</template>

<script>
import soapService from '@/services/soapService'; // Asegúrate de importar el servicio correctamente

export default {
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async iniciarSesion() {
      try {
        const usuario = await soapService.callSoapService('obtenerUsuarioPorCorreo', { correo: this.email });

        // Asegúrate de que la respuesta tenga el formato esperado
        if (usuario && usuario.password === this.password) {
          this.errorMessage = '';
          this.$router.push('/home'); // Redirige a la página principal después de iniciar sesión
        } else {
          this.errorMessage = 'El correo o la contraseña no son correctas';
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        this.errorMessage = 'Error en la comunicación. Inténtalo más tarde.';
      }
    },
    irARegistro() {
      this.$router.push('/register');
    },
  },
};
</script>


<style scoped>
  html, body {
      height: 100%;
      margin: 0;
      padding: 0;
  }

  .login-contenedor {
      background-color: #F7EED3;
      justify-content: center;
      align-items: center;
      display: flex;
      height: 100vh; /* Altura completa de la pantalla */
  }

  .formulario {
      background-color: #674636;
      align-items: center;
      justify-content: center;
      color: white;
      padding: 5%;
      border-radius: 10px;
      box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.2);
      width: 300px;
      text-align: center;
      box-sizing: border-box;
  }

  .formulario h1 {
      margin-bottom: 20px;
      font-size: 28px;
  }

  .login-campos input {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1rem;
      border: none;
      border-radius: 4px;
      box-sizing: border-box;
  }

  .login-botones {
      display: flex;
      flex-direction: column;
      gap: 10px;
  }

  .formulario button {
      background-color: #AAB396;
      font-style: italic;
      border-radius: 6px;
      border: none;
      padding: 10px;
      cursor: pointer;
      width: 100%;
      transition: background-color 0.3s ease;
  }

  .container {
      padding: 20px;
  }
  .error {
      color: red;
  }

  .formulario button:hover {
      background-color: #8a9f78;
  }

  
</style>
