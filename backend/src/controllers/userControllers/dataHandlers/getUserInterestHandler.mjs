import { mySqlConn } from "../../../connection/connection.mjs";

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