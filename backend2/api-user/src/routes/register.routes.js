import { Router } from 'express';
import { createRegister, getRegister } from '../controllers/register.controller.js'

const router = Router();

router.get('/register', getRegister);   //Obtener todos los registros
router.post('/register', createRegister);  //Crear un registro


export default router;