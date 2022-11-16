import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Persona } from "./Persona";

export class Multa extends Model {
  public consecutivoDeMultas!: string;
  public fechaYHora!: Date;
  public lugarInfracion!: string;
  
  public persona!: number;
}

export interface MultaI {
  consecutivoDeMultas: string;
  fechaYHora: Date;
  lugarInfracion: string;
}

Multa.init(
  {
    consecutivoDeMulta: {
        type: DataTypes.STRING,
        allowNull: false
      },
    fechaYHora: {
        type: DataTypes.DATE,
        allowNull: false
      },
    lugarInfracion: {
        type: DataTypes.STRING,
        allowNull: false
      }
  },
  {
    tableName: "multas",
    sequelize: database,
    timestamps: true
  }
);
Persona.hasMany(Multa);
Multa.belongsTo(Persona);

