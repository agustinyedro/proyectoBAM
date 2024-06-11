let imagesList = [];

async function fetchImages() {
    try {
        const response = await fetch('/images');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const images = await response.json();
        imagesList = images; // Asigna los datos de imágenes a la variable imagesList
        return images;
    } catch (error) {
        console.error('Error fetching images:', error);
        return []; // Devuelve un array vacío si hay un error
    }
}

async function renderImages() {
    await fetchImages();
    return  /* HTML */ `
    <img src ="/img/cabañafrente.webp" alt = "cabaña" class="img-grande">
        ${imagesList.map((image) => `<img src="/img/${image}" alt="${image}" class="img-pequenia">`).join('')}
    `;
}

export const galeriaImagenes = () => {
    return renderImages();

};



