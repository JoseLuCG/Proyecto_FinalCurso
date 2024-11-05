import { Sequelize } from "sequelize";

const sequelize = new Sequelize("social","root", "abc123.", {
    host: "localhost",
    dialect: "mysql",
    logging: false
});

export {
    sequelize
}