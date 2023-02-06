import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js'
import { Station } from "./station.js";
import { User } from "./user.js";

export const Service = sequelize.define('services', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    state: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    init_latitude: {
        type: DataTypes.DECIMAL
    },
    init_longitude: {
        type: DataTypes.DECIMAL
    },
    last_latitude: {
        type: DataTypes.DECIMAL
    },
    last_longitude: {
        type: DataTypes.DECIMAL
    },
    init_timestamp: {
        type: DataTypes.TIME
    },
    last_timestamp: {
        type: DataTypes.TIME
    },
},
    {
        timestamps: false
    });

    User.hasOne( Service, {
        foreignKey: 'userID',
        sourceKey: 'id',
    });
    Service.belongsTo(User,{
        foreignKey: 'userID',
        targerID: 'id'
    });

    Station.hasOne( Service, {
        foreignKey: 'stationID',
        sourceKey: 'id',
    });
    Station.belongsTo(Service,{
        foreignKey: 'stationID',
        targerID: 'id'
    });

    User.hasOne( Service, {
        foreignKey: 'coordinatorID',
        sourceKey: 'id',
    });
    Service.belongsTo(User,{
        foreignKey: 'coordinatorID',
        targerID: 'id'
    });