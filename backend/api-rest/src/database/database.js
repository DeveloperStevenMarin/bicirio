import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "postgres", //base de datos
  "postgres", //usuario
  "Somos2023", //contraseña
  // "@PostgreSQL2023",
  
  {
    host: "200.122.220.171",
    dialect: "postgres",
    port: "3000"
  }
);
