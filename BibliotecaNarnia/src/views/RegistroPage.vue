<template>
    <div class="registro-contenedor">
        <section class="formulario">
            <h1>Registro</h1>
            <div class="ingreso-campos">
                <p>Nombre</p>
                <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre">

                <p>Apellidos</p>
                <input type="text" id="apellidos" name="apellidos" placeholder="Ingresa tus apellidos">

                <p>Correo</p>
                <input type="email" id="correo" name="correo" placeholder="Ingresa tu correo">

                <p>Documento de identidad</p>
                <div class="documento-opciones">
                    <input type="radio" id="tarjeta" name="documento" value="tarjeta">
                    <label for="tarjeta">Tarjeta de identidad</label><br>
                    <input type="radio" id="cedula" name="documento" value="cedula">
                    <label for="cedula">Cédula de ciudadanía</label><br>
                    <input type="radio" id="pasaporte" name="documento" value="pasaporte">
                    <label for="pasaporte">Pasaporte</label>
                </div>

                <p>Número de documento</p>
                <input type="text" id="num-documento" name="num-documento" placeholder="Ingresa tu número de documento">
            
                <p>Contraseña</p>
                <input type="password" id="contraseña" name="contraseña" placeholder="Ingresa tu contraseña">
            </div>

            <div class="login-buttons">
                <RouterLink to="/">
                    <button>Registrarse</button>
                </RouterLink>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'RegistroComponent',
    mounted() {
        console.log('El componente de registro se ha montado');
    }
}
</script>

<style scoped>
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F7EED3;
    }

    .registro-contenedor {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        padding: 20px; /* Un poco de padding para evitar que el formulario quede justo en el borde */
    }

    .formulario {
        background-color: #674636;
        color: #F7EED3;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.2);
        width: 100%;
        max-width: 400px; /* Define un ancho máximo para el formulario */
        max-height: 90vh; /* Limita la altura para que no se salga de la pantalla */
        overflow-y: auto; /* Añade scroll si el contenido es demasiado largo */
        box-sizing: border-box;
    }

    .formulario h1 {
        font-size: 24px;
        margin-bottom: 20px;
        justify-content: center;
    }

    .ingreso-campos input {
        width: 100%;
        padding: 0.5rem;
        margin-bottom: 1rem;
        border: none;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .documento-opciones {
        text-align: left;
        margin-bottom: 1rem;
    }

    .login-buttons {
        margin-top: 20px;
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

