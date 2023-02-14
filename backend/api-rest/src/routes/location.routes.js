import { Router } from 'express';
import { createLocation, getLocation } from '../controllers/location.controller.js'

const router = Router();

router.get('/location', getLocation);   //Obtener todas las ubicaciones
router.post('/location', createLocation);  //Crear una ubicacion


export default router;