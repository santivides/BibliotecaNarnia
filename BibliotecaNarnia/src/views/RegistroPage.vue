<template>
    <div class="registro-contenedor">
        <section class="formulario">
            <h1>Registro</h1>
            <div class="ingreso-campos">
                <p>Nombre</p>
                <input v-model="nombre" type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre">

                <p>Apellidos</p>
                <input v-model="apellidos" type="text" id="apellidos" name="apellidos" placeholder="Ingresa tus apellidos">

                <p>Correo</p>
                <input v-model="correo" type="email" id="correo" name="correo" placeholder="Ingresa tu correo">

                <p>Documento de identidad</p>
                <div class="documento-opciones">
                    <select v-model="tipoDocumento" name="tipoDocumento">
                        <option value="tarjeta">Tarjeta de identidad</option>
                        <option value="cedula">Cédula de ciudadanía</option>
                        <option value="pasaporte">Pasaporte</option>
                    </select>
                    
                </div>

                <p>Número de documento</p>
                <input v-model="numeroDocumento" type="text" id="num-documento" name="num-documento" placeholder="Ingresa tu número de documento">
            
                <p>Contraseña</p>
                <input v-model="contraseña" type="password" id="contraseña" name="contraseña" placeholder="Ingresa tu contraseña">
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
    data(){
        return{
            nombre: '',
            apellidos: '',
            correo: '',
            tipoDocumento: '',
            numeroDocumento: '',
            contraseña: ''
        };
    },
    methods:{
            registrar(){
                //lamada del metodo que enviará los datos al back
                this.enviarDatos();
            },
            enviarDatos(){
                //solicitud uml
                const soapRequest = `
                <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:lib="xmlns:lib="http://localhost/BibliotecaNarnia/registro">
                <soapenv:Header/>
                <soapenv:Body>
                    <lib:RegistrarUsuario>
                    <lib:nombre>${this.nombre}</lib:nombre>
                    <lib:apellidos>${this.apellidos}</lib:apellidos>
                    <lib:correo>${this.correo}</lib:correo>
                    <lib:tipoDocumento>${this.tipoDocumento}</lib:tipoDocumento>
                    <lib:numeroDocumento>${this.numeroDocumento}</lib:numeroDocumento>
                    <lib:contrasena>${this.contrasena}</lib:contrasena>
                    </lib:RegistrarUsuario>
                </soapenv:Body> 
                </soapenv:Envelope>
                `;

                //configurar la solicitud
                const url = 'http://localhost:5000/soap-endpoint';  // La URL del endpoint SOAP

                fetch(url, {
                    method: "POST",
                    headers: {
                    "Content-Type": "text/xml",
                    "SOAPAction": "http://biblioteca.local/servicios/RegistrarUsuario"
                    },
                    body: soapRequest // El cuerpo de la solicitud contiene el XML
                    })
                    .then(response => response.text()) //convierte la respuesta del servidor en texto
                    .then(responseXML => {
                        console.log("Respuesta del servidor:", responseXML); //procesa la respuesta xml del servidor
                    })
                    .catch(error => {
                        console.error("Error en la solicitud SOAP:", error);
                    });
            }
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

