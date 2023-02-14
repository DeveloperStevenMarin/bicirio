import { Location } from '../models/location.js';

//Obtener todas las ubicaciones
export const getLocation = async (req, res) => {

    try {
        const location = await Location.findAll()
        res.json(location);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

//Crear una ubicacion
export const createLocation = async (req, res) => {
    const { latitude, longitude, timestamp, userID, serviceID } = req.body;
    try {
        const newLocation = await Location.create({
            latitude,
            longitude,
            timestamp,
            userID,
            serviceID
        });
        res.json(newLocation);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}