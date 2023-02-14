import { Register } from '../models/register.js';

//Obtener todos los registros
export const getRegister = async (req, res) => {

    try {
        const register = await Register.findAll()
        res.json(register);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

//Crear un registro
export const createRegister = async (req, res) => {
    const {
        timestamp,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        description,
        serviceID } = req.body;
    try {
        const newRegister = await Register.create({
            timestamp,
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
            img8,
            description,
            serviceID

        });
        res.json(newRegister);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}