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
        allowNull: false,
        unique: true,
        validate:{
            isAlpha: true,
            len: [3, 20],
        }
    },
    latitude: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    longitude: {
        type: DataTypes.DECIMAL,
        allowNull: false,
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

