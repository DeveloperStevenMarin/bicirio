import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';


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

