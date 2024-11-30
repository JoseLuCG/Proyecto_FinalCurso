import session from "express-session";
import {createRequire} from 'module';
import { mySqlConn } from "./connection.mjs";
import { error } from "console";

const require = createRequire(import.meta.url);
const MySQLStore = require('express-mysql-session')(session);

const options = {
    creaateDatabase: false,
    schema: {
        tableName: "sessions",
        columnNames: {
            session_id: "sid",
            expires: "expires",
            data: "data_session"
        }
    }
};

const sessionStore = new MySQLStore(options, mySqlConn);

sessionStore.deleteSession = function (sessionId) {
    const sql = `
        SELECT *
        FROM sessions
        WHERE sid = "${sessionId}";
    `;
    mySqlConn.query(sql, (error, result) => {
        if (error) {
            console.error(error);
        } else {
            let data = result[0];

            return data;
        }
    });
}


export {
    sessionStore
}

/*
Sesion:
{
    "cookie": {
        "originalMaxAge":300000,
        "expires":"2024-11-11T12:39:56.798Z",
        "httpOnly":true,
        "path":"/"
        },
    "userId":0,
    "nameProfile":"PruebaSesiones",
    "data_session":"{
        \"userId\":0,
        \"name_profile\":\"PruebaSesiones\",
        \"userType\":\"new User\"
        }"
}
*/