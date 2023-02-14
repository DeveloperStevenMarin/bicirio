import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js'
import { Schedule } from "./schedule.js";
import { User } from "./user.js";

export const In_time = sequelize.define('in_times', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    timestamp: {
        type: "timestamp",
        allowNull: false,
    },
}, {
    timestamps: false
});

User.hasOne(In_time, {
    foreignKey: {allowNull: false, name: 'userID'},
    sourceKey: 'id',
});
In_time.belongsTo(User, {
    foreignKey: {allowNull: false, name: 'userID'},
    targerID: 'id'
});

Schedule.hasOne(In_time, {
    foreignKey: {allowNull: false, name: 'scheduleID'},
    sourceKey: 'id',
});
In_time.belongsTo(Schedule, {
    foreignKey: {allowNull:false, name:'scheduleID'},
    targerID: 'id'
});