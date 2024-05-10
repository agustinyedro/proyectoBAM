window.addEventListener("scroll", function () {
  const $nav = document.getElementById("header");
  if (window.scrollY > 0) {
    $nav.classList.add("nav-scroll");
  } else {
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
