import express from 'express';
const router = express.Router();
import { join } from 'path';

// Ruta para la página sobre nosotros
router.get('/sobreNosotros', (req, res) => {
    res.sendFile(join(__dirname, '../views', 'sobreNosotros.html'));
});

export default router;
