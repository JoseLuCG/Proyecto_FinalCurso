import { mySqlConn } from "../../../connection/connection.mjs";

/**
 * Gets user data from the database.
 * @param {*} userData The `email` or `nameProfile` of the user who logs in.
 * @param {*} password The `password` of the user who logs in.
 * @returns A promise with the user's data or an error from the database.
 */
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