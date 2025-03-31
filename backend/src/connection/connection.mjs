import mysql from 'mysql2';

var connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: 3306,
    database: process.env.DATABASE_DBNAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    dateStrings: true
});

export {
    connection as mySqlConn
};