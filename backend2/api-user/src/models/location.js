import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Service } from "./service.js";
import { User } from "./user.js";

export const Location = sequelize.define('locations', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    latitude: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    longitude: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    timestamp: {
        type: DataTypes.TIME,
        allowNull: false,
    }
}, {
    timestamps: false
});
User.hasMany(Location, {
    foreignKey: {allowNull: false, name: 'userID'},
    sourceKey: 'id',
});
Location.belongsTo(User, {
    foreignKey: {allowNull: false, name: 'userID'},
    targerID: 'id'
});

Service.hasMany(Location, {
    foreignKey: 'serviceID',
    sourceKey: 'id',
});
Service.belongsTo(Location, {
    foreignKey: 'locationID',
    targerID: 'id'
});
