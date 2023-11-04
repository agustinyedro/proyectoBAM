// //  seleccionamos los dos elementos que serán clickables

// const toggleButton = document.getElementById("button-menu");
// const navWrapper = document.getElementById("nav");

// /* 
//   cada ves que se haga click en el botón 
//   agrega y quita las clases necesarias 
//   para que el menú se muestre.
// */
// toggleButton.addEventListener("click", () => {
//   toggleButton.classList.toggle("close");
//   navWrapper.classList.toggle("show");
// });

/* 
  Cuándo se haga click fuera del contenedor se esconderse.
*/

navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});

let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.main-nav');
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // El usuario está desplazándose hacia arriba, muestra la barra de navegación
    navbar.classList.remove('hidden');
  } else {
    // El usuario está desplazándose hacia abajo, oculta la barra de navegación
    navbar.classList.add('hidden');
  }

  prevScrollPos = currentScrollPos;
});

// document.getElementById("whatsapp-icon").addEventListener("click", function() {
  
//   var phoneNumber = '+54351';
//   var message = 'Hola en que podemos ayudarte?';

//   var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//   window.open(whatsappURL, '_blank');
// });

 











