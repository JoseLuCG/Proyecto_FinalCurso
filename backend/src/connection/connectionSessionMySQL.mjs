import session from "express-session";
import mysql from "mysql2";
import {createRequire} from 'module';
import { format } from "path";

const require = createRequire(import.meta.url);
const MySQLStore = require('express-mysql-session')(session);

const options = {
    host: "localhost",
    port: 3306,
    database: "social",
    user: "root",
    password: "abc123.",
    dateStrings: true,
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

const sessionStore = new MySQLStore(options);

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