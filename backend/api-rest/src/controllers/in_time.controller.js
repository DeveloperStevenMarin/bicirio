import { In_time } from '../models/in_time.js';

//Obtener tiempos de entrada
export const getIn_Time = async (req, res) => {

    try {
        const in_time = await In_time.findAll()
        res.json(in_time);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

//Crear un tiempo de entrada
export const createIn_Time = async (req, res) => {
    const { timestamp, userID, scheduleID, } = req.body;
    try {
        const newIn_time = await In_time.create({
            timestamp,
            userID,
            scheduleID,

        });
        res.json(newIn_time);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

