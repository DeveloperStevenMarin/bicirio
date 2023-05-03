import { Router } from 'express';
import { createUserStation, deleteUserStation, getUserStation, getUserStationByStation, getUserStationByUser } from '../controllers/users_stations.controller.js';


const router = Router();

router.post('/user_station', createUserStation);  //Crear relacion de usuario y estacion
router.delete('/user_station', deleteUserStation);   //Eliminar relacion de usuario y estacion
router.get('/user_station', getUserStation); //Obtener todas las estaciones asignadas
router.post('/user_station/:stationID', getUserStationByStation);  //Obtener la estacion por el ID
router.post('/user_station/:userID', getUserStationByUser);  //Obtener la estacion por el ID de usuario

export default router;