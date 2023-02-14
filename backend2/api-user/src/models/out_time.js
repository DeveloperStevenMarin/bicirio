import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from '../database/database.js'
import { Schedule } from "./schedule.js";
import { User } from "./user.js";

export const Out_time = sequelize.define('out_times', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
}, {
    timestamps: false
});

User.hasOne(Out_time, {
    foreignKey: {allowNull: false, name: 'userID'},
    sourceKey: 'id',
});
Out_time.belongsTo(User, {
    foreignKey: {allowNull: false, name: 'userID'},
    targerID: 'id'
});

Schedule.hasOne(Out_time, {
    foreignKey: {allowNull: false, name: 'scheduleID'},
    sourceKey: 'id',
});
Out_time.belongsTo(Schedule, {
    foreignKey:  {allowNull: false, name: 'scheduleID'},
    targerID: 'id'
});