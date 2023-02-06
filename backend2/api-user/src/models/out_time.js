import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js'
import { Schedule } from "./schedule.js";
import { User } from "./user.js";

export const Out_time = sequelize.define('out_times', {
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

User.hasOne(Out_time, {
    foreignKey: 'userID',
    sourceKey: 'id',
});
Out_time.belongsTo(User, {
    foreignKey: 'userID',
    targerID: 'id'
});

Schedule.hasOne(Out_time, {
    foreignKey: 'scheduleID',
    sourceKey: 'id',
});
Out_time.belongsTo(Schedule, {
    foreignKey: 'scheduleID',
    targerID: 'id'
});