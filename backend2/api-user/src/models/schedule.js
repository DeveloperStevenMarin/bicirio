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
        allowNull: false,
    },
    assign_in_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    assign_out_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    break_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    timestamp: {
        type: DataTypes.TIME
    },
}, {
    timestamps: false
});

Schedule.hasMany( User, {
    foreignKey: 'scheduleID',
    sourceKey: 'id',
});

Schedule.belongsTo(User,{
    foreignKey: {allowNull:false, name: 'userID'},
    targerID: 'id'
});