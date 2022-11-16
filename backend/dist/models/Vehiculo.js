"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
class Vehiculo extends sequelize_1.Model {
}
exports.Vehiculo = Vehiculo;
Vehiculo.init({
    matricula: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    modelos: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "vehiculos",
    sequelize: db_1.database,
    timestamps: true
});
