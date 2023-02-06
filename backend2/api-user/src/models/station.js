import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js'
import { User } from "./user.js";

export const Station = sequelize.define('stations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    latitude: {
        type: DataTypes.DECIMAL
    },
    longitude: {
        type: DataTypes.DECIMAL,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    station_category: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
}, {
    timestamps: false
});

