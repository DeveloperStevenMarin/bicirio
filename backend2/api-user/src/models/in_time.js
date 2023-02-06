import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js'
import { Schedule } from "./schedule.js";
import { User } from "./user.js";

export const In_time = sequelize.define('in_times', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    timestamp: {
        type: DataTypes.TIME
    },
}, {
    timestamps: false
});

User.hasOne(In_time, {
    foreignKey: 'userID',
    sourceKey: 'id',
});
In_time.belongsTo(User, {
    foreignKey: 'userID',
    targerID: 'id'
});

Schedule.hasOne(In_time, {
    foreignKey: 'scheduleID',
    sourceKey: 'id',
});
In_time.belongsTo(Schedule, {
    foreignKey: 'scheduleID',
    targerID: 'id'
});