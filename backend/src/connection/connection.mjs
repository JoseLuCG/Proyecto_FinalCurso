import mysql from 'mysql';

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "social",
    user: "root",
    password: "abc123.",
    dateStrings: true
});

export {
    connection as mySqlConn
};