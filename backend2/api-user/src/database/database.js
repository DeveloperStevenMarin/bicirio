import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "postgres",
  "postgres",
  "@PostgreSQL2023",
  {
    host: "localhost",
    dialect: "postgres",
  }
);
