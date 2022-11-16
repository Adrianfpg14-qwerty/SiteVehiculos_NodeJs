import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Persona extends Model {
  public dni!: number;
  public nombre!: string;
  public apellidos!: string;
  public direccion!: string;
  public telefono!: string;
  public ciudad!: string;
  public tipoDePersonas!: string;
}

export interface PersonaI {
  dni: number;
  nombre: string;
  apellidos: string;
  direccion: string;
  telefono: string;
  ciudad: string;
  tipoDePersonas: string;
}

Persona.init(
  {
    dni: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
      },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
      },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
      },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: false
      },
    tipoDePersonas: {
        type: DataTypes.STRING,
        allowNull: false
      }
  },
  {
    tableName: "personas",
    sequelize: database,
    timestamps: true
  }
);
