import { mySqlConn } from "../connection/connection.mjs";
import { sqlIDReturn } from "../tools/defines.mjs";
import { insertInterests } from "../tools/apiTools.mjs";

function singUpUser(req, res, next) {
    const { 
        nameProfile,
        nameUser,
        password,
        location,
        age,
        description,
        email,
        interest
    } = req.body;

    console.log(req.body);
    
    let sql = `
        CALL insertUser(
        "${nameProfile}",
        "${nameUser}",
        "${password}",
        "${location}", 
         ${age}, 
        "${description}", 
        "${email}")
    `;
    var registeredUserId;

    mySqlConn.query(sql, function (err) {
        if (err) {
            console.log(err);
            //throw new Error("El usuario no ha sido introducido en la base de datos.");
            
        } else {
            mySqlConn.query(sqlIDReturn, (error, resultId) => {
                if (error) {
                    console.log(error);
                    //throw new Error("Error al insertar intereses en la base de datos.");
                    
                } else {
                    registeredUserId = resultId[0].idUser;
                    insertInterests(interest, registeredUserId);
                    res.json("success");
                    //next();
                    mySqlConn.end();
                    console.log("El usuario se ha introducido correctamente:");
                    
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
            //throw new Error("No se ha encontrado el usuario");
            console.log("Error");
            
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
    try{
        const sql = `SELECT * FROM users`;
        mySqlConn.query(sql, (err,result)=>{
            if (err){
                console.error(err);
                res.sendStatus(500);
            } else {
                res.json(result)
            }
        })
    }catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

function getInterestControler(req, res) {
    try {
        const sql = `SELECT * FROM user_interests`;
        mySqlConn.query(sql, (error,result) => {
            if (error) {
                console.error(error);
                throw new Error("Error al obtener los intereses.");
            } else {
                res.json(result);
            }
        });
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

export {
    singUpUser,
    logingUserControlerFirstEntry,
    logingUserControler,
    getUsersControler,
    getInterestControler
};