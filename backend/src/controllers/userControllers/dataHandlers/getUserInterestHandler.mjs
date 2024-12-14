import { mySqlConn } from "../../../connection/connection.mjs";
/**
 * Gets the interests of the user that matches the id passed as parameter
 * @param {*} userId The user id to get their interests. 
 * @returns A promise with the with interest`s data or an error from the database.
 */
function getInterestData(userId) {
    const sqlQuery = `
        SELECT * 
            FROM user_interests
            WHERE idUser = ?
        ;
    `;

    return new Promise(
        (resolve, reject) => {
            mySqlConn.query(
                sqlQuery,
                [userId],
                (error, result) => {
                    if (error) reject(error);
                    else {
                        const data = result;
                        resolve(data);
                    }
                }
            );
        }
    );
}

export {
    getInterestData
}