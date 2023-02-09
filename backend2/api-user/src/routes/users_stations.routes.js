import { Router } from 'express';
import { createUserStation, deleteUserStation } from '../controllers/users_stations.controller.js';


const router = Router();

router.post('/user_station', createUserStation);  //Crear relacion de usuario y estacion
router.delete('/user_station/:id', deleteUserStation);   //Eliminar relacion de usuario y estacion

export default router;