<template>
    <div class="login-contenedor">
        <section class="formulario">
            <h1>Inicio de sesión</h1>
            <div class="login-campos">
                <p>Correo</p>
                <input type="text" id="correo" name="correo" placeholder="Ingresa tu correo">

                <p>Contraseña</p>
                <input type="password" id="contraseña" name="contraseña" placeholder="Ingresa tu contraseña">
            </div>

            <div class="login-botones">
                <button>Iniciar sesión</button>

                <RouterLink to="/registro">
                    <button>Registrarse</button>
                </RouterLink>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'LoginComponent',
    mounted() {
        console.log('El componente de inicio de sesión se ha montado');
    }
}
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

    .formulario button:hover {
        background-color: #8a9f78;
    }
</style>
