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

function logingUserControlerFirstEntry (req, res) {
    const { nameProfile,
        nameUser,
        password,
        location,
        age,
        description,
        email,
        interest
    } = req.body;
    let sql = `SELECT id FROM users WHERE password = "${password}" AND (nameProfile = "${nameProfile}" OR email = "${email}");`;

    mySqlConn.query(sql, (error, result) => {
        if (error) {
            console.error(error);
        } else {
            let data = result[0].id;
            console.log(data);
            res.json(data);
        }
    });
} 

function logingUserControler(req, res) {
    try {
        const {userData,password} = req.body;

        mySqlConn.query(`
            SELECT * FROM users
                WHERE password = "${password}" 
                AND (nameProfile = "${userData}" 
                OR email = "${userData}")`,
            (err,result)=>{
            if (err){
                console.error(err);
                res.sendStatus(201);
            } else {
                let data = result[0];
                res.json(data);
            }
        });
    } catch(err) {
        console.error(err);
        res.sendStatus(500);
    }
}

function getUsersControler (req, res) {

}

export {
    singUpUser,
    logingUserControlerFirstEntry,
    logingUserControler,
    getUsersControler
};