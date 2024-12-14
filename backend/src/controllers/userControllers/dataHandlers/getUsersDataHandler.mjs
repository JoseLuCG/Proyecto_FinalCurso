import { mySqlConn } from "../../../connection/connection.mjs";

function getUsersHandler() {
    const sqlQuery = `
        SELECT * 
            FROM users
    `;

    return new Promise(
        (resolve, reject) => {
            mySqlConn.query(
                sqlQuery,
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        const data = result;
                        resolve(data);
                    }
                } 
            );
        }
    );
}

export default getUsersHandler;