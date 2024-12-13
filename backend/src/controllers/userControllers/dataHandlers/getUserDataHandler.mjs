import { mySqlConn } from "../../../connection/connection.mjs";

function getUserData( userData, password ) {
    const sqlQuery = `
        SELECT * FROM users
           WHERE password = ? 
            AND (nameProfile = ? 
            OR email = ?)
        ;
    `;

    return new Promise(
        (resolve, reject) => {
            mySqlConn.query(
                sqlQuery,
                [password, userData, userData],
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        const data = result[0];
                        resolve(data);
                    }
                }
            );
        }
    );
}

export {
    getUserData
}