import { Router } from 'express';
import { createService, getService, getServiceLocations } from '../controllers/service.controller.js'

const router = Router();

router.get('/service', getService);   //Obtener todos los servicios
router.post('/service', createService);  //Crear un servicio
router.get('/service/:id/locations', getServiceLocations)   //Obtiene las ubicaciones de este servicio


export default router;