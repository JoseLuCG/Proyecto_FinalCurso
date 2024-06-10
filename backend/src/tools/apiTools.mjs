import { mySqlConn } from "../connection/connection.mjs";
import { sqlIDReturn } from "./defines.mjs";

function insertInterests (interests, idUser) {
    interests.forEach(element => {
        console.log(element);
        mySqlConn.query(`CALL insertInterest("${element}");`, 
            (error) => {
                if (error) {
                    console.log(error);
                } else {
                    mySqlConn.end();
                    // ---------- Errores a partir de aquí: ----------
                    mySqlConn.query(sqlIDReturn, function (err, result) {
                        if (err) {
                            console.log(err);
                        } else {
                            let idinterest = resultId[0].idUser;

                            mySqlConn.query(`CALL insertInterest_user(${idUser}, ${idinterest});`, (errorUI) => {
                                if (errorUI) {
                                    console.log(errorUI);
                                } else {
                                    console.log("Intereses guardados");
                                }
                            });
                           //console.log("Funciona no toques.");    
                        }
                    });
                    // ---------- ERRORS END  ----------
                }
            }
        );
    });
}

export {
    insertInterests
}