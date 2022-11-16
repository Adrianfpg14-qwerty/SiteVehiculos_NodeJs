const Sequelize = require("sequelize");

const DB_NAME = "sitevehiculos_NodeJs_mysql";

const DB_USER = "root";

const DB_PASS = "dev";

export const database = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASS,

  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

async function generateDb() {
  try {
    await database.sync({ force: false });
    console.log("Base de datos y tablas creadas");
  } catch (error) {
    console.log(error);
    console.log("Error en conexion!!");
  }
}

generateDb();
