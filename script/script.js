//  seleccionamos los dos elementos que serán clickables

const botonBurger = document.getElementById("button-menu");
const nuevaNav = document.getElementById("nav");

/* 
   cada ves que se haga click en el botón 
   agrega y quita las clases necesarias 
   para que el menú se muestre.
 */
botonBurger.addEventListener("click", () => {
  botonBurger.classList.toggle("close");
  nuevaNav.classList.toggle("show");
});

/* 
  Cuándo se haga click fuera del contenedor se esconderse.
*/

nuevaNav.addEventListener("click", (e) => {
  if (e.target.id === "nav"||e.target.classList =="opciones") {
    nuevaNav.classList.remove("show");
    botonBurger.classList.remove("close");
  }
});

let posAnterior = window.pageYOffset;

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".main-header");
  var posActual = window.pageYOffset;

  if (posAnterior > posActual) {
    // El usuario está desplazándose hacia arriba, muestra la barra de navegación
    navbar.classList.remove("hidden");
  } else {
    // El usuario está desplazándose hacia abajo, oculta la barra de navegación
    navbar.classList.add("hidden");
  }

  posAnterior = posActual;
});

//Boton del Formulario o contacto

const botonForm = document.getElementById("iconos-contactos-boton");
const formulario = document.getElementById("formulario");

if (botonForm && formulario) {
  botonForm.addEventListener("click", e => {
    e.preventDefault(); 
      formulario.classList.toggle("mostrar");
      botonForm.classList.toggle("mostrar");
      formulario.scrollIntoView({
        behavior: 'smooth', // Puedes cambiar 'smooth' por 'auto' para un scroll instantáneo
        block: 'start' // Puedes cambiar 'start' por 'end' o 'center' según tu preferencia
      });
  });
}

//Boton del mapa
const botonMap = document.getElementById("iconos-mapa-boton");
const mapContainer = document.getElementById("map-container");
let iframe = null;

if (botonMap && mapContainer) {
  botonMap.addEventListener("click", () => {
    if (iframe) {
      mapContainer.removeChild(iframe);
      iframe = null;
    } else {
      iframe = document.createElement("iframe");
      iframe.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216392.54721726847!2d-65.12426830606992!3d-32.0656364101082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2d93bccb3cc4b%3A0x85b91251624640fa!2sComplejo%20Ay%C3%BCn!5e0!3m2!1sen!2sar!4v1699709443834!5m2!1sen!2sar");
      iframe.setAttribute("class", "map");
      mapContainer.appendChild(iframe);

      iframe.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}

//Boton de whatsapp
const botonWhatsapp = document.getElementById("iconos-whatsapp-boton");


if (botonMap && mapContainer) {
  botonWhatsapp.addEventListener("click", () => {
    let phoneNumber = '+543516370576';
    let message = 'Hola en que podemos ayudarte?';
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  });
}
//Boton de descrubrirlo
function irASeccion() {
  // Usando JavaScript para desplazarse a la sección deseada
  const seccionDeseada = document.getElementById("caracteristicas");
  seccionDeseada.scrollIntoView({ behavior: "smooth" });
}

//Enviar Formulario 
function enviarConsulta() {
  // Obtener el formulario por su ID
  var formulario = document.getElementById("mi-formulario");

  // Validar el formulario antes de enviar
  if (formulario.checkValidity()) {
    // Enviar el formulario
    formulario.submit();
  } else {
    // El formulario no es válido, realizar acciones adicionales si es necesario
    alert("Por favor, complete todos los campos correctamente.");
  }
}

