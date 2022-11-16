"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multa = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
const Persona_1 = require("./Persona");
class Multa extends sequelize_1.Model {
}
exports.Multa = Multa;
Multa.init({
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
    tableName: "multas",
    sequelize: db_1.database,
    timestamps: true
});
Persona_1.Persona.hasMany(Multa);
Multa.belongsTo(Persona_1.Persona);
