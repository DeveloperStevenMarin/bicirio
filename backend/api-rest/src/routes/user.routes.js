import { Router } from 'express';
import {
    getUsers,
    createUser,
    updateUserData,
    getUser,
    updateUserStations,
    getUserStations,
    getUserIn_Times,
    getUserOut_Times,
    getUserLocations,
    getUserAuth
} from '../controllers/user.controller.js'

const router = Router();

router.get('/user', getUsers);   //Obtener usuarios
router.post('/user/login/', getUserAuth); //Obtener un usuario con password
router.get('/user/:id', getUser);   //Obtener un usuario
router.post('/user', createUser);  //Crear Usuarios
router.put('/user/:id', updateUserData);   //Actualizar un usuario
router.put('/user/stations/:id', updateUserStations);   //Actualizar las estaciones del usuario


router.get('/user/:id/stations', getUserStations);     //Obtener estaciones de un usuario
router.get('/user/:id/in_times', getUserIn_Times);      //Obtener tiempos de entrada o logueo del usuario
router.get('/user/:id/out_times', getUserOut_Times);      //Obtener tiempos de salida o deslogueo del usuario
router.get('/user/:id/locations', getUserLocations);      //Obtener todas las ubicaciones de el usuario
export default router;