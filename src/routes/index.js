import { Router } from 'express';
import { join } from 'path';
import { getDirname } from '../utils.js';

const __dirname = getDirname(import.meta.url);
const router = Router();

router.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../views/index.html'));
});

export default router;

