import { In_time } from '../models/in_time.js';
import { Out_time } from '../models/out_time.js'
import { User } from '../models/user.js';
import { Users_Stations } from '../models/users_stations.js';
import { Location } from '../models/location.js'

//Obtener Usuarios
export const getUsers = async (req, res) => {

    try {
        const users = await User.findAll();
        res.json(users);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

//Obtener un usuario
export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({
            where: {
                id
            }
        });

        if (!user) {
            return res.status(404).json({ message: "Can't find user" });
        }
        res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
}

//Obtener un usuario con password
export const getUserAuth = async (req, res, next) => {
    
    try {
        const user = await User.findOne({ where: { id: req.body.id } });
        res.header("Access-Control-Allow-Origin", "*");
        if (user) {
            if (req.body.password === user.password) {
                const authUser = {
                    id: user.id,
                    name1: user.name1,
                    name2: user.name2,
                    surname1: user.surname1,
                    surname2: user.surname2,
                    profile: user.profile,
                    active: user.active,
                    schedule: user.scheduleID
                }
                res.status(200).json(authUser);
            } else {
                res.status(400).json({ error: "Password Incorrect" });
            }

        } else {
            res.status(404).json({ error: "User does not exist" });
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


//Crear usuarios
export const createUser = async (req, res) => {
    const { id, password, name1, name2, surname1, surname2 } = req.body;
    try {
        const newUser = await User.create({
            id,
            password,
            name1,
            name2,
            surname1,
            surname2
        });
        res.json(newUser);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


}

//Actualizar nombre, apellido, contraseña
export const updateUserData = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({
            where: { id },
        });
        user.update({
            password: req.body.password,
            name1: req.body.name1,
            name2: req.body.name2,
            surname1: req.body.surname1,
            surname2: req.body.surname2
        });
        await user.save();
        return res.json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//Actualizar perfil de usuario
export const updateUserProfile = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({
            where: { id },
        });
        user.update({
            profile: req.body.profile
        });
        await user.save();
        return res.json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//Actualizar estaciones de usuario
export const updateUserStations = async (req, res) => {
    try {
        const { id } = req.params
        const users_stations = await Users_Stations.findOne({
            where: { userID: id },
        });
        users_stations.update({
            stationID: req.body.stationID
        });
        await stationID.save();
        return res.json(stationID)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//Actualizar horarios de usuario
export const updateUserSchedule = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({
            where: { id },
        });
        user.update({
            schedule: req.body.station
        });
        await user.save();
        return res.json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//Actualizar estado de activo o desactivo del usuario
export const updateUserActive = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({
            where: { id },
        });
        user.update({
            active: req.body.active
        });
        await user.save();
        return res.json(user)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

//Obtener las estaciones asignadas a este usuario
export const getUserStations = async (req, res) => {
    try {
        const { id } = req.params;
        const userStations = await Users_Stations.findAll({
            where: {
                userID: id
            }
        });
        res.json(userStations)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

//Obtener tiempos de entrada o logueo del usuario
export const getUserIn_Times = async (req, res) => {
    try {
        const { id } = req.params;
        const in_times = await In_time.findAll({
            where: {
                userID: id
            }
        });
        res.json(in_times)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

//Obtener tiempos de salida o deslogueo del usuario
export const getUserOut_Times = async (req, res) => {
    try {
        const { id } = req.params;
        const out_times = await Out_time.findAll({
            where: {
                userID: id
            }
        });
        res.json(out_times)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

//Obtener todas las ubicaciones de el usuario
export const getUserLocations = async (req, res) => {
    try {
        const { id } = req.params;
        const locations = await Location.findAll({
            where: {
                userID: id
            }
        });
        res.json(locations)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}