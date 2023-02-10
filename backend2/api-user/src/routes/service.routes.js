import { Router } from 'express';
import { createService, getService } from '../controllers/service.controller.js'

const router = Router();

router.get('/service', getService);   //Obtener todos los servicios
router.post('/service', createService);  //Crear un servicio


export default router;