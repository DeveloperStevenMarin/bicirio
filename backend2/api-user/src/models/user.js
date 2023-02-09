import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Schedule } from './schedule.js';
import { Station } from './station.js';


export const User = sequelize.define('users', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name1:
    {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    surname1: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname2: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    profile: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
   
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    },
}, {
    timestamps: false,
});

Schedule.hasMany( User, {
    foreignKey: 'scheduleID',
    sourceKey: 'id',
});

Schedule.belongsTo(User,{
    foreignKey: {allowNull:false, name: 'userID'},
    targerID: 'id'
});