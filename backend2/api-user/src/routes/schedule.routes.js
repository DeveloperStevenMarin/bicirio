import { Router } from 'express';
import { createSchedule, getSchedule } from '../controllers/schedule.controller.js'

const router = Router();

router.get('/schedule', getSchedule);   //Obtener tiempos de entrada
router.post('/schedule', createSchedule);  //Crear un tiempo de entrada


export default router;