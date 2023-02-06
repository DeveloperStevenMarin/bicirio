import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js'
import { User } from "./user.js";

export const Schedule = sequelize.define('schedules', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    coordinator: {
        type: DataTypes.INTEGER,

    },
    assign_in_time: {
        type: DataTypes.TIME
    },
    assign_out_time: {
        type: DataTypes.TIME
    },
    break_time: {
        type: DataTypes.TIME
    },
    timestamp: {
        type: DataTypes.TIME
    },

}, {
    timestamps: false
});

