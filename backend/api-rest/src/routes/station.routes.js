import { Router } from 'express';
import { createStation, getStation, getStations, updateStationData } from '../controllers/station.controller.js'

const router = Router();

router.get('/station', getStations);   //Obtener estaciones
router.get('/station/:id', getStation);   //Obtener una estacion
router.post('/station', createStation);  //Crear Estaciones
router.put('/station/:id', updateStationData);   //Actualizar una estacion

export default router;