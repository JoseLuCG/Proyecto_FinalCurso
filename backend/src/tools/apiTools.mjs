import { mySqlConn } from "../connection/connection.mjs";
import { sqlIDReturn } from "./defines.mjs";

function insertInterests (interests, idUser) {
    interests.forEach(element => {
        console.log(element);
        mySqlConn.query(`CALL insertInterest("${element}", ${idUser});`, 
            (error) => {
                if (error) {
                    console.log(error);
                }
            }
        );
    });
}

export {
    insertInterests
}