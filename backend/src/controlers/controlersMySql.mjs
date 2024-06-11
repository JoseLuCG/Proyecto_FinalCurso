import { mySqlConn } from "../connection/connection.mjs";
import { sqlIDReturn } from "../tools/defines.mjs";
import { insertInterests } from "../tools/apiTools.mjs";

function singUpUser(req, res, next) {
    const { nameProfile,
        nameUser,
        password,
        location,
        age,
        description,
        email,
        interest
    } = req.body;
    let sql = `CALL insertUser("${nameProfile}", "${nameUser}", "${password}", "${location}", ${age}, "${description}", "${email}")`;
    var registeredUserId;

    mySqlConn.query(sql, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Correcto");
            mySqlConn.query(sqlIDReturn, (error, resultId) => {
                if (error) {
                    console.log(error);
                } else {
                    registeredUserId = resultId[0].idUser;
                    insertInterests(interest, registeredUserId);
                    res.send();
                    next();
                    mySqlConn.end();
                }
            });
        }
    });
}

function logingUserControler (req, res) {
    const { nameProfile,
        nameUser,
        password,
        location,
        age,
        description,
        email,
        interest
    } = req.body;

    console.log();
    console.log("================================================================================================");
    console.log("El usuario introducido en el logingUserControler es: " + nameProfile, nameUser, password, location, age, description, email, interest);
    console.log("================================================================================================");
} 

export {
    singUpUser,
    logingUserControler
};