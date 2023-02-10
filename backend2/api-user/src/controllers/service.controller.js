import { Service } from '../models/service.js';

//Obtener todos los servicios
export const getService = async (req, res) => {

    try {
        const service = await Service.findAll()
        res.json(service);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

//Crear un servicio
export const createService = async (req, res) => {
    const { state, init_latitude, init_longitude, last_latitude, last_longitude, init_timestamp, last_timestamp, userID, stationID, coordinatorID } = req.body;
    try {
        const newService= await Service.create({
            state,
            init_latitude,
            init_longitude,
            last_latitude,
            last_longitude,
            init_timestamp,
            last_timestamp,
            userID,
            stationID,
            coordinatorID,
        });
        res.json(newService);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}