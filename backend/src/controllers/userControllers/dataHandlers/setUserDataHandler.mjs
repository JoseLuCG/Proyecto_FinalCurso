import { mySqlConn } from "../../../connection/connection.mjs";
import { sqlIDReturn } from "../../../tools/defines.mjs";

function setUserData(user) {
    const sqlQuery = `CALL insertUser(?,?,?,?,?,?,?);`;

    return new Promise(
        (resolve, reject) => {
            mySqlConn.query(
                sqlQuery,
                [user.nameProfile, user.nameUser, user.password, user.location, user.age, user.description, user.email],
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        mySqlConn.query(
                            sqlIDReturn,
                            (error, result) =>{
                                if (error) {
                                    reject(error);
                                } else {
                                    resolve(result[0]);
                                }
                            }
                        );
                    }
                }
            );
        }
    );
}

export default setUserData;