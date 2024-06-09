import { mySqlConn } from "../connection/connection.mjs";

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

    mySqlConn.query(sql, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Correcto");
            res.send();
            next();
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
    console.log(nameProfile, nameUser, password, location, age, description, email, interest);
} 

export {
    singUpUser,
    logingUserControler
};