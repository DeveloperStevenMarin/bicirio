import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { User } from './user.js';
import { Station } from './station.js';


export const Users_Stations = sequelize.define('users_stations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
}, {
    timestamps: false,
});

User.belongsToMany( Station, {
    through: 'users_stations',
    foreignKey: {allowNull: false, name: 'userID'},
    sourceKey: 'id',
    allowNull: false,
});

Station.belongsToMany(User,{
    through: 'users_stations',
    foreignKey: {allowNull: false, name: 'stationID'},
    targerID: 'id'
});
