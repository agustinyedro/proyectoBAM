import { Router } from 'express';
import path from 'path';
import fs from 'fs';

const router = Router();

// Ruta para obtener todas las imágenes
router.get('/', (req, res) => {
    const imagesDir = path.join(process.cwd(), 'src', 'public', 'img'); // Asegurando la ruta correcta
    // console.log('Leyendo directorio:', imagesDir);

    fs.readdir(imagesDir, (err, files) => {
        if (err) {
            console.error('Error al leer el directorio:', err);
            return res.status(500).json({ message: 'Error al leer el directorio de imágenes' });
        }
        // console.log('Archivos leídos:', files);

        // Filtrar solo archivos de imagen y codificar sus nombres
        const images = files.filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file)).map(file => encodeURIComponent(file));
        // console.log('Imágenes filtradas:', images);
        res.json(images);
    });
});

export default router;


