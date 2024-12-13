import { mySqlConn } from "../connection/connection.mjs";
import { sqlIDReturn } from "../tools/defines.mjs";
import { insertInterests } from "../tools/apiTools.mjs";
import { json } from "sequelize";
import getMessagesData from "./messagesControllers/dataHandlers/getMessagesDataHandler.mjs";
//import session, { Session, Store } from "express-session";
//import { sessionStore } from "../connection/connectionSessionMySQL.mjs";

// ! Delete this file when everything is refactored

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
            res.status(500).json({ message: "Error inserting user into database." });
        } else {
            mySqlConn.query(sqlIDReturn, (error, resultId) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({ message: "Error getting registered user ID." });
                } else {
                    registeredUserId = resultId[0].idUser;
                    insertInterests(interest, registeredUserId);
                    res.status(201).json({ message: "User created and session started successfully." });
                    /*
                    const sessionData = {
                        userId : registeredUserId,
                        name_profile : nameProfile,
                        userType : "new User"
                    };
                    req.session.userId = registeredUserId;
                    req.session.nameProfile = nameProfile;
                    req.session.data_session = JSON.stringify(sessionData);
                    console.log("The user has been entered correctly and the session has been created.");
                    console.log(req.session);
                    //mySqlConn.end();
                    */
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

function sessionManager(request, response) {
    console.log(request.session);
}

export {
    singUpUser,
    logingUserControlerFirstEntry,
    getUsersControler,
    getInterestControler,
    sessionManager,
};