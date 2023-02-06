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
        type: DataTypes.DECIMAL
    },
    longitude: {
        type: DataTypes.DECIMAL,
    },
    timestamp: {
        type: DataTypes.TIME
    }
}, {
    timestamps: false
});
User.hasOne(Location, {
    foreignKey: 'userID',
    sourceKey: 'id',
});
Location.belongsTo(User, {
    foreignKey: 'userID',
    targerID: 'id'
});

Service.hasOne(Location, {
    foreignKey: 'serviceID',
    sourceKey: 'id',
});
Location.belongsTo(Service, {
    foreignKey: 'serviceID',
    targerID: 'id'
});
