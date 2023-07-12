import { Router } from 'express';
import { createLocation, getLocation, getLocationsByServiceID, getLocationsByTimestampRange, getLocationsByUserID, getLocationsByUserIDAndTimestamp } from '../controllers/location.controller.js'

const router = Router();

router.get('/location', getLocation);   //Obtener todas las ubicaciones
router.post('/location', createLocation);  //Crear una ubicacion
router.get('/location/user/:userID', getLocationsByUserID) //obtener todas las ubicaciones del usuario
router.get('/location/service/:serviceID', getLocationsByServiceID) //obtener ubicaciones por el id del servicio
router.get("/location/user/:userID/timestamp/:timestampStart/:timestampEnd", getLocationsByUserIDAndTimestamp); //Obtener las unicaciones por el id del usuario y un rango de fechas.

router.get("/location/timestamp/:timestampStart/:timestampEnd", getLocationsByTimestampRange); //Obtener ubicaciones por rango


export default router;