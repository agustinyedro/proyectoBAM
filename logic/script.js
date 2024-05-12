window.addEventListener("scroll", function () {
  const $nav = document.getElementById("header");
  // console.log(window.scrollY);
  if (window.scrollY > 120) {
    $nav.classList.add("nav-scroll");
  } else if (this.window.scrollY < 49) {
    $nav.classList.remove("nav-scroll");
  }
});

const carouselImages = document.querySelectorAll(".img-carrousel");
const totalImages = carouselImages.length;
let currentIndex = 0;

function showImage(index) {
  // Ocultar todas las imágenes
  carouselImages.forEach((image) => {
    image.classList.add("hidden");
    image.classList.remove("active");
  });

  // Mostrar la imagen correspondiente al índice
  carouselImages[index].classList.remove("hidden");
  carouselImages[index].classList.add("active");
}

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

function previousImage() {
  // console.log(currentIndex);
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

document.querySelector(".btn-left").addEventListener("click", previousImage);
document.querySelector(".btn-right").addEventListener("click", nextImage);


/************* ANIMACION CARACTERISTICAS *********/

let seccionFija = document.getElementById('caracteristicas');
let seccionFijaPos = seccionFija.offsetTop;

const umbral = 100;

window.addEventListener('scroll', function () {
  // console.log(window.pageYOffset);
  if (window.scrollY > (seccionFijaPos - umbral)) {
    seccionFija.classList.add('fixed');

  } else {
    seccionFija.classList.remove('fixed');
  }
});

let seccionFija2 = document.getElementById('sobre-nosotros');
let seccionFijaPos2 = seccionFija2.offsetTop - 100;


window.addEventListener('scroll', function () {

  let porcentaje = Math.round(seccionFijaPos2 / this.window.scrollY * 100)

  console.log(porcentaje);

  // console.log(seccionFijaPos2 - this.window.scrollY);
  if (porcentaje < 134) {
    seccionFija2.style.width = porcentaje - 10 + '%';
    if (porcentaje < 114) {
      seccionFija2.style.borderRadius = '2.5rem';
      seccionFija2.classList.add('fixed');
    } else {
      seccionFija2.style.borderRadius = '0%';
      seccionFija2.classList.remove('fixed');
    }
    seccionFija2.classList.add('fixed');
    if (porcentaje < 90) {
      seccionFija.style.color = 'white';
    } else {
      seccionFija.style.color = 'hsl(120, 100%, 0%)';
    }
  } else {

    seccionFija2.classList.remove('fixed');
  }
})



