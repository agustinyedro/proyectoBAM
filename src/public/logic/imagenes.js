let imagesList = [];

async function fetchImages() {
  try {
    const response = await fetch("/images");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const images = await response.json();
    imagesList = images; // Asigna los datos de imágenes a la variable imagesList
    return images;
  } catch (error) {
    console.error("Error fetching images:", error);
    return []; // Devuelve un array vacío si hay un error
  }
}

async function renderImages() {
  await fetchImages();

  const classes = ["img-pequenia", "img-mediana", "img-grande"];

  return /* HTML */ `
    ${imagesList
      .map(
        (image, index) => /* HTML */ ` <div
          class="imagen ${classes[index % classes.length]}"
        >
          <img src="/img/${image}" alt="${image}" />
        </div>`
      )
      .join("")}
  `;
}

export const galeriaImagenes = () => {
  return renderImages();
};
