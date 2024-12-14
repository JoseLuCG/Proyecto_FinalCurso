import { mySqlConn } from "../../../connection/connection.mjs";

function insertUserInterests (interests, idUser) {
    let counter = 0;

    interests.forEach(element => {
        mySqlConn.query(`CALL insertInterest("${element}", ${idUser});`, 
            (error) => {
                if (error) {
                    counter++;
                }
            }
        );
    });

    if (counter == 0) return "OK"; 
    else return "NOK"
}

export default insertUserInterests;
