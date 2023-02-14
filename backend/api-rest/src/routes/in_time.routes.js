import { Router } from 'express';
import { createIn_Time, getIn_Time} from '../controllers/in_time.controller.js'

const router = Router();

router.get('/in_time', getIn_Time);   //Obtener tiempos de entrada
router.post('/in_time', createIn_Time);  //Crear un tiempo de entrada


export default router;