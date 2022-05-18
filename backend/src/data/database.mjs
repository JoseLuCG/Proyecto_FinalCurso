import sqlite3 from "sqlite3";

export const db = new sqlite3.Database('./social.db', (err)=> {
    if (err) {
        throw err.message;
    }
    console.log("Conected to the database");
});

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        users (
            id INTEGER PRIMARY KEY,
            nameProfile  TEXT NOT NULL, 
            nameUser TEXT NOT NULL,
            password TEXT NOT NULL,
            location TEXT NOT NULL,
            interest TEXT, 
            age TEXT NOT NULL,
            description TEXT,
            email TEXT NOT NULL
        )
`);