import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Schedule } from './schedule.js';
import { Station } from './station.js';


export const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,

    },
    password: {
        type: DataTypes.STRING,

    },
    name1:
    {
        type: DataTypes.STRING,

    },
    name2: {
        type: DataTypes.STRING,

    },
    surname1: {
        type: DataTypes.STRING,

    },
    surnam2: {
        type: DataTypes.STRING,

    },
    profile: {
        type: DataTypes.INTEGER,
        defaultValue: 0

    },
   
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
}, {
    timestamps: false,
});

Station.hasMany( User, {
    foreignKey: 'stationID',
    sourceKey: 'id',
});

User.belongsTo(Station,{
    foreignKey: 'stationID',
    targerID: 'id'
});

Schedule.hasOne( User, {
    foreignKey: 'scheduleID',
    sourceKey: 'id',
});

User.belongsTo(Schedule,{
    foreignKey: 'scheduleID',
    targerID: 'id'
});