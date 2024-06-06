/******** CARRUSEL **********/
const carouselImages = document.querySelectorAll(".img-carrousel");
let currentIndex = 0;

function showImage(index) {
  carouselImages.forEach(image => {
    image.classList.toggle("hidden", true);
    image.classList.toggle("active", false);
  });
  carouselImages[index].classList.toggle("hidden", false);
  carouselImages[index].classList.toggle("active", true);
}

function changeImage(increment) {
  currentIndex = (currentIndex + increment + carouselImages.length) % carouselImages.length;
  showImage(currentIndex);
}

document.querySelector(".btn-left").addEventListener("click", () => changeImage(-1));
document.querySelector(".btn-right").addEventListener("click", () => changeImage(1));


/************ SCROLL **************/
const $seccionCaracteristicas = document.getElementById("caracteristicas");
const umbral = 100;

const $seccionSobreNosotros = document.getElementById("sobre-nosotros");
const seccionSobreNosotrosPos = $seccionSobreNosotros.offsetTop - 100;

const $footer = document.getElementById("footer");
const footerPos = $footer.offsetTop;

window.addEventListener("scroll", function () {

  /**** Nav scroll ****/
  const nav = document.getElementById("header");
  if (window.scrollY > 120) {
    nav.classList.add("nav-scroll");
  } else if (window.scrollY < 49) {
    nav.classList.remove("nav-scroll");
  }

  /************ Sección Caracteristicas scroll *************/
  if (window.scrollY > $seccionCaracteristicas.offsetTop - umbral) {
    $seccionCaracteristicas.classList.add("fixed");
  } else {
    $seccionCaracteristicas.classList.remove("fixed");
  }

  /**************** Sección Sobre Nosotros scroll *****************/
  const porcentaje = Math.round((seccionSobreNosotrosPos / window.scrollY) * 100);
  const isFixed = porcentaje < 134;

  $seccionSobreNosotros.style.width = isFixed ? (porcentaje - 10) + "%" : "";
  $seccionSobreNosotros.style.borderRadius = isFixed && porcentaje < 114 ? "2rem" : "0%";
  $seccionSobreNosotros.classList.toggle("fixed", isFixed);
  $seccionCaracteristicas.style.color = porcentaje < 90 ? "white" : "hsl(120, 100%, 0%)";

  /************* Sección Footer scroll *****************/
  const porcentajeFooter = Math.round((footerPos / window.scrollY) * 100);
  const isScroll = porcentajeFooter < 120;

  $footer.style.width = isScroll ? (porcentajeFooter - 15) + "%" : "";
  $footer.style.height = isScroll ? (porcentajeFooter - 47) + "vh" : "";
  $footer.style.borderRadius = isScroll && porcentajeFooter < 116 ? "2rem" : "0%";
  $footer.classList.toggle("scroll", isScroll);

});

const $imagenes = document.getElementById("galeria-imagenes-contenido");
