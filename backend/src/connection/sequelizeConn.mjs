import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    process.env.DATABASE_TABLE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: "mysql",
        logging: false
    }
);

export {
    sequelize
}