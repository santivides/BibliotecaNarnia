<template>
    <div class="login-container">
        <h1>Inicion de sesión</h1>

        <section class="formulary">
            <p>Correo</p>
            <input class="text" id="correo" name="correo">
            
            <p>Contraseña</p>
            <input class="password" id="correo" name="correo">

            <div class="login-buttons">
                <button>iniciar sesión</button>
                <button>registrarse</button>
            </div>
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

<style scoped>
</style>


