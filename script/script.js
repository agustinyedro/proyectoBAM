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
  if (e.target.id === "nav") {
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


const botonMap = document.getElementById("iconos-contactos-boton");
const formulario = document.getElementById("formulario");

if (botonMap && formulario) {
  botonMap.addEventListener("click", e => {
    e.preventDefault(); 
      formulario.classList.toggle("mostrar");
      botonMap.classList.toggle("mostrar");
      formulario.scrollIntoView({
        behavior: 'smooth', // Puedes cambiar 'smooth' por 'auto' para un scroll instantáneo
        block: 'start' // Puedes cambiar 'start' por 'end' o 'center' según tu preferencia
      });
  });
}

// document.getElementById("whatsapp-icon").addEventListener("click", function() {

//   var phoneNumber = '+54351';
//   var message = 'Hola en que podemos ayudarte?';

//   var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//   window.open(whatsappURL, '_blank');
// });
