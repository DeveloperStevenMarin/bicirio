import { Location } from '../models/location.js';
import { Op } from 'sequelize';

//Obtener todas las ubicaciones
export const getLocation = async (req, res) => {

    try {
        const location = await Location.findAll()
        res.json(location);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


}


//obtener todas las ubicaciones con el ID del usuario
export const getLocationsByUserID = async (req, res) => {
    const { userID } = req.params;

    try {
        const locations = await Location.findAll({
            where: {
                userID: userID
            }
        });
        res.json(locations);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//Obtener todas las ubicaciones por el id del servicio
export const getLocationsByServiceID = async (req, res) => {
    const { serviceID } = req.params;

    try {
        const locations = await Location.findAll({
            where: {
                serviceID: serviceID
            }
        });
        res.json(locations);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//Obtener todas las ubicaciones en un rango de fechas
export const getLocationsByTimestampRange = async (req, res) => {
    const { timestampStart, timestampEnd } = req.params;

    try {
        const locations = await Location.findAll({
            where: {
                timestamp: {
                    [Op.between]: [timestampStart, timestampEnd]
                }
            }
        });
        res.json(locations);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


//Obtener las unicaciones por el id del usuario y un rango de fechas.
export const getLocationsByUserIDAndTimestamp = async (req, res) => {
    const { userID, timestampStart, timestampEnd } = req.params;
    const startDate = new Date(timestampStart);
    const endDate = new Date(timestampEnd);
    try {
        const locations = await Location.findAll({
            where: {
                userID: userID,
                timestamp: {
                    [Op.between]: [startDate, endDate]
                }
            }
        });
        res.json(locations);
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