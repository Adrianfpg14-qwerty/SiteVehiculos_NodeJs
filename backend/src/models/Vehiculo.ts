import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Vehiculo extends Model {
  public matricula!: string;
  public marca!: string;
  public modelos!: string;
}

export interface VehiculoI {
  matricula: string;
  marca: string;
  modelos: string;
}

Vehiculo.init(
  {
    matricula: {
        type: DataTypes.STRING,
        allowNull: false
      },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
      },
    modelos: {
        type: DataTypes.STRING,
        allowNull: false
      }
  },
  {
    tableName: "vehiculos",
    sequelize: database,
    timestamps: true
  }
);
