import { mySqlConn } from "../../../connection/connection.mjs";

function getInterestData() {
    const sqlQuery = `SELECT * FROM user_interests`;

    return new Promise(
        (resolve, reject) => {
            mySqlConn.query(
                sqlQuery,
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );
        }
    );
}

export default getInterestData;