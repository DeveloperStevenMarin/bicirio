import { Schedule } from '../models/schedule.js';

//Obtener un horario
export const getSchedule = async (req, res) => {

    try {
        const schedule = await Schedule.findAll()
        res.json(schedule);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

//Crear un horario
export const createSchedule = async (req, res) => {
    const { coordinator, assign_in_time, assign_out_time, break_time, userID } = req.body;
    try {
        const newSchedule = await Schedule.create({
            coordinator,
            assign_in_time,
            assign_out_time,
            break_time,
            userID

        });
        res.json(newSchedule);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
