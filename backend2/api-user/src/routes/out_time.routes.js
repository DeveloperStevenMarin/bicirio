import { Router } from 'express';
import { createOut_Time, getOut_Time } from '../controllers/out_time.controller.js'

const router = Router();

router.get('/out_time', getOut_Time);   //Obtener tiempos de salida
router.post('/out_time', createOut_Time);  //Crear un tiempo de salida


export default router;