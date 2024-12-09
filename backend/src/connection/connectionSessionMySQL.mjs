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

export {
    sessionStore
}
