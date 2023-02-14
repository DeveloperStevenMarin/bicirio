import { Router } from 'express';
import { createStation, getStation, getStations, updateStationData } from '../controllers/station.controller.js'

const router = Router();

router.get('/station', getStations);   //Obtener estaciones
router.get('/station/:id', getStation);   //Obtener un usuario
router.post('/station', createStation);  //Crear Usuarios
router.put('/station/:id', updateStationData);   //Actualizar un usuario

export default router;