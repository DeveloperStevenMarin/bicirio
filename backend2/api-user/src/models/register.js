import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../database/database.js";
import { Service } from "./service.js";

export const Register = sequelize.define('registers', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    img1: {
        type: DataTypes.BLOB
    },
    img2: {
        type: DataTypes.BLOB
    },
    img3: {
        type: DataTypes.BLOB
    },
    img4: {
        type: DataTypes.BLOB
    },
    img5: {
        type: DataTypes.BLOB
    },
    img6: {
        type: DataTypes.BLOB
    },
    img7: {
        type: DataTypes.BLOB
    },
    img8: {
        type: DataTypes.BLOB
    },
    description:{
        type: DataTypes.STRING,
        allowNull: true,
    },

}, {
    timestamps: false
});
Service.hasOne(Register, {
    foreignKey: {allowNull:false, name:'serviceID'},
    sourceKey: 'id',
});
Register.belongsTo(Service, {
    foreignKey: {allowNull:false, name:'serviceID'},
    targerID: 'id'
});