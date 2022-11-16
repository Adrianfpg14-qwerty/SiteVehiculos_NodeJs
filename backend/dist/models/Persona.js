"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
class Persona extends sequelize_1.Model {
}
exports.Persona = Persona;
Persona.init({
    dni: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    direccion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    ciudad: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    tipoDePersonas: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "personas",
    sequelize: db_1.database,
    timestamps: true
});
