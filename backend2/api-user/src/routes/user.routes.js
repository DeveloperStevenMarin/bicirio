import { Router } from 'express';
import {
    getUsers,
    createUser,
    updateUserData,
    getUser,
    updateUserProfile,
    updateUserActive,
    updateUserStations,
    updateUserSchedule,
    getUserStations
} from '../controllers/user.controller.js'

const router = Router();

router.get('/user', getUsers);   //Obtener usuarios
router.get('/user/:id', getUser);   //Obtener un usuario
router.post('/user', createUser);  //Crear Usuarios
router.put('/user/:id', updateUserData);   //Actualizar un usuario
router.put('/user/profile/:id', updateUserProfile);   //Actualizar el perfil del usuario
router.put('/user/stations/:id', updateUserStations);   //Actualizar las estaciones del usuario
router.put('/user/Schedule/:id', updateUserSchedule);   //Actualizar el horario del usuario
router.put('/user/active/:id', updateUserActive);   //Actualizar el estado del usuario

router.get('/user/:id/stations', getUserStations);   //Obtener estaciones de un usuario
export default router;