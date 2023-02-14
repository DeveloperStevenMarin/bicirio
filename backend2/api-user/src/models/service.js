import { DataTypes, Sequelize } from "sequelize";
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
        defaultValue: 0,
        allowNull: false,
    },
    init_latitude: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    init_longitude: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    last_latitude: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    last_longitude: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    init_timestamp: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    last_timestamp: {
        type: DataTypes.DATE({ onUpdate: true, notNull: true }),
        allowNull: true,
    },
},
    {
        timestamps: false
    });

    User.hasOne( Service, {
        foreignKey:{allowNull:false, name: 'userID'},
        sourceKey: 'id',
    });
    Service.belongsTo(User,{
        foreignKey:{allowNull:false, name: 'userID'},
        targerID: 'id'
    });

    Station.hasOne( Service, {
        foreignKey:{allowNull:false, name: 'stationID'},
        sourceKey: 'id',
    });
    
    Service.belongsTo(Station,{
        foreignKey:{allowNull:false, name: 'stationID'},
        targerID: 'id'
    });

    User.hasOne( Service, {
        foreignKey:{allowNull:false, name: 'coordinatorID'},
        sourceKey: 'id',
    });
    Service.belongsTo(User,{
        foreignKey:{allowNull:false, name: 'coordinatorID'},
        targerID: 'id'
    });