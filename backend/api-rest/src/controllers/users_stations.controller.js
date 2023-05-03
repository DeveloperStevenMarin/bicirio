import { Users_Stations } from '../models/users_stations.js';



//Crear Relacion de usuario y estacion
export const createUserStation = async (req, res) => {
    const { userID, stationID, } = req.body;
    try {
        const newUserStation = await Users_Stations.create({

            userID,
            stationID,

        });
        res.json(newUserStation);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getUserStation = async (req, res) => {

    try {
        const user_station = await Users_Stations.findAll();
        res.json(user_station);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//Eliminar Relacion de usuario y estacion
export const deleteUserStation = async (req, res) => {
    const { userID, stationID, } = req.body;
    try {
        await Users_Stations.destroy({
            where: {
                userID,
                stationID
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getUserStationByStation = async (req, res) => {
    try {
        const { stationID } = req.params;
        const user_station = await Users_Stations.findAll({
            where: {
                stationID
            }
        });
        if (!user_station) {
            return res.status(404).json({ message: "Can't find station" });
        }
        res.json(user_station);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export const getUserStationByUser = async (req, res) => {
    try {
        const { userID } = req.params;
        const user_station = await Users_Stations.findAll({
            where: {
                userID
            }
        });
        if (!user_station) {
            return res.status(404).json({ message: "Can't find station" });
        }
        res.json(user_station);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}