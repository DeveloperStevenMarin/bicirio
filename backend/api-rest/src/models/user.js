import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';


export const User = sequelize.define('users', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        validate: {
            len: [8, 12],
            isNumeric: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4, 20],
            notEmpty: true,
        }
    },
    name1:
    {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            len: [3, 20],
        }
    },
    name2: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isAlpha: true,
            len: [3, 20],
        }
    },
    surname1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: true,
            len: [3, 20],
        }
    },
    surname2: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isAlpha: true,
            len: [3, 20],
        }
    },
    profile: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
        validate: {
            isInt: true,
        }
    },

    online: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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

