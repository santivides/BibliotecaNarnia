import axios from 'axios';

// Definir la URL del servicio SOAP (endpoint) y el namespace
const SOAP_URL = 'http://localhost:5000'; // Cambia a tu URL
const SOAP_NAMESPACE = 'http://tempuri.org/'; // Cambia a tu namespace

// Crear una función que genere la solicitud SOAP en formato XML
function createSoapRequest(action, params) {
  const soapEnvelope = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="${SOAP_NAMESPACE}">
      <soapenv:Header/>
      <soapenv:Body>
        <web:${action}>
          ${paramsToXml(params)}
        </web:${action}>
      </soapenv:Body>
    </soapenv:Envelope>
  `;
  return soapEnvelope;
}

// Convertir los parámetros a XML (construye el cuerpo del mensaje)
function paramsToXml(params) {
  return Object.keys(params)
    .map((key) => `<web:${key}>${params[key]}</web:${key}>`)
    .join('');
}

// Función principal para consumir un servicio SOAP
export async function callSoapService(action, params) {
  try {
    const soapRequest = createSoapRequest(action, params);

    const response = await axios.post(SOAP_URL, soapRequest, {
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        SOAPAction: `${SOAP_NAMESPACE}${action}`,
      },
    });

    return parseSoapResponse(response.data);
  } catch (error) {
    console.error('Error calling SOAP service:', error);
    throw error;
  }
}

// Función para parsear la respuesta SOAP y convertirla a JSON
function parseSoapResponse(response) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(response, 'application/xml');
  
  // Extraer los datos del XML
  const body = xmlDoc.getElementsByTagName('soapenv:Body')[0];
  return xmlToJson(body);
}

// Convertir el XML a un objeto JSON
function xmlToJson(xml) {
  const obj = {};
  if (xml.nodeType === 1) { // Element
    if (xml.attributes.length > 0) {
      for (let j = 0; j < xml.attributes.length; j++) {
        const attribute = xml.attributes.item(j);
        obj[attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType === 3) { // Text
    return xml.nodeValue;
  }

  if (xml.hasChildNodes()) {
    for (let i = 0; i < xml.childNodes.length; i++) {
      const item = xml.childNodes.item(i);
      const nodeName = item.nodeName.replace(/^.*:/, ''); // Eliminar el prefijo del nodo
      if (typeof obj[nodeName] === 'undefined') {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof obj[nodeName].push === 'undefined') {
          const old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
}

// Implementación de métodos específicos

// **Usuarios**

export async function obtenerUsuarioPorCorreo(correo) {
  return callSoapService('ObtenerUsuarioPorCorreo', { correo });
}

export async function agregarUsuario(usuario) {
  return callSoapService('AgregarUsuario', usuario);
}

export async function actualizarUsuario(usuario) {
  return callSoapService('ActualizarUsuario', usuario);
}

export async function eliminarUsuario(id) {
  return callSoapService('EliminarUsuario', { id });
}

// **Libros**

export async function obtenerLibroPorId(id) {
  return callSoapService('ObtenerLibroPorId', { id });
}

export async function agregarLibro(libro) {
  return callSoapService('AgregarLibro', libro);
}

export async function actualizarLibro(libro) {
  return callSoapService('ActualizarLibro', libro);
}

export async function eliminarLibro(id) {
  return callSoapService('EliminarLibro', { id });
}

export async function obtenerListaDeLibros() {
  return callSoapService('ObtenerListaDeLibros', {});
}

// Exportar todos los métodos
export default {
  callSoapService,
  obtenerUsuarioPorCorreo,
  agregarUsuario,
  actualizarUsuario,
  eliminarUsuario,
  obtenerLibroPorId,
  agregarLibro,
  actualizarLibro,
  eliminarLibro,
  obtenerListaDeLibros
};
