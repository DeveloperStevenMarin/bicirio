import { Station } from '../models/station.js';

//Obtener Estaciones
export const getStations = async (req, res) => {

    try {
        const stations = await Station.findAll()
        res.json(stations);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

//Obtener una estacion
export const getStation = async (req, res) => {
    try {
        const { name } = req.params
        const station = await Station.findOne({
            where: {
                name
            }
        });

        if (!station) {
            return res.status(404).json({ message: "Can't find Station" });
        }
        res.json(station);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }

}

//Crear Estaciones
export const createStation = async (req, res) => {
    const { name, latitude, longitude, } = req.body;
    try {
        const newStation = await Station.create({

            name,
            latitude,
            longitude,

        });
        res.json(newStation);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


}

//Actualizar la estacion
export const updateStationData = async (req, res) => {
   
    try {
        const { id } = req.params
        const station = await Station.findOne({
            where: { id },
        });
        station.update({
            name: req.body.name,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            active: req.body.active,
            station_category: req.body.station_category,
            userID: req.body.userID
        });
        await station.save();
        return res.json(station)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
