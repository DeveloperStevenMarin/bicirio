import { Out_time } from '../models/out_time.js';

//Obtener tiempos de salida
export const getOut_Time = async (req, res) => {

    try {
        const out_time = await Out_time.findAll()
        res.json(out_time);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

//Crear un tiempo de salida
export const createOut_Time = async (req, res) => {
    const { timestamp, userID, scheduleID, } = req.body;
    try {
        const newOut_time = await Out_time.create({
            timestamp,
            userID,
            scheduleID,

        });
        res.json(newOut_time);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
