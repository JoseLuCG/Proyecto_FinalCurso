import { DataTypes } from "sequelize";
import { sequelize } from "../connection/sequelizeConn.mjs";

const SessionTable = sequelize.define("Session",{
    id: {
        type: DataTypes.STRING(255),
        primaryKey: true,
        allowNull: false
    },
    data_session: {
        type: DataTypes.JSON,
        allowNull:false
    },
    expires: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: "sessions",
    timestamps: false
});

export {
    SessionTable
};