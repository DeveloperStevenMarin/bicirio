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

//Eliminar Relacion de usuario y estacion
export const deleteUserStation = async (req, res) => {
    try {
        const { id } = req.params;
        await Users_Stations.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
