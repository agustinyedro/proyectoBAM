import express from 'express';
import { join } from 'path';
import { getDirname } from './utils.js';

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = getDirname(import.meta.url);

// Configurar la codificación UTF-8 para todas las respuestas

// Importar rutas
import indexRoute from './routes/index.js';
import contactoRoute from './routes/contacto.js';
import sobreNosotrosRoute from './routes/sobreNosotros.js';
import imagenesRoute from './routes/imagenes.js';

// Configurar directorio de archivos estáticos
app.use(express.static(join(__dirname, 'public')));

// Usar rutas
app.use('/', indexRoute);
app.use('/', contactoRoute);
app.use('/', sobreNosotrosRoute);
app.use('/images', imagenesRoute);

// Manejar 404
app.use((req, res) => {
    res.status(404).sendFile(join(__dirname, 'views', '404.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
