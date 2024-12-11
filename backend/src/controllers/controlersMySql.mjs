import { mySqlConn } from "../connection/connection.mjs";
import { sqlIDReturn } from "../tools/defines.mjs";
import { insertInterests } from "../tools/apiTools.mjs";
import { json } from "sequelize";
//import session, { Session, Store } from "express-session";
//import { sessionStore } from "../connection/connectionSessionMySQL.mjs";

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
                res.status(500).json({ message: "Error loging user into database." });
                
            } else {
                let data = result[0];
                if (data) {
                    req.session.userId = data.id;
                    req.session.nameProfile = data.nameProfile;
                    const sessionData = {
                        userId : data.id,
                        name_profile : data.nameProfile,
                        userType : "user acount"
                    }
                    req.session.data_session = JSON.stringify(sessionData);
                    res.status(201).json(data);
                    //console.log(req.session);   
                } else {
                    res.sendStatus(401).json({ message: "Error. Authorization is required." });
                }
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

function sendMessageControler(request, response) {
    const {
        idUserEmisor,
        idUserReceptor,
        message_body
    } = request.body;
    try {
        let sql = `
        INSERT INTO message_proves_v1 (id_emisor_user, id_receptor_user, message_body)
            VALUES (${idUserEmisor},${idUserReceptor},"${message_body}");`;
        mySqlConn.query(sql,(error, result) => {
            if (error) {
                console.error(error);
            } else {
                console.log(request.body);
                response.sendStatus(200);
                console.log("Mensaje guardado con exito",request.body);
            }
        });
    } catch (error) {
        console.error(error);
        response.sendStatus(500);
    }    
}

function getUserMessagesControler(request, response) {
    const {
        idEmisor,
        idReceptor,
    } = request.body;

    try {
        let sql = `
        SELECT *
            FROM message_proves_v1
            WHERE 
                (id_emisor_user = ${idEmisor}
                AND id_receptor_user = ${idReceptor})
            OR
                (id_emisor_user = ${idReceptor}
                AND id_receptor_user = ${idEmisor})
        ;`;
        mySqlConn.query(sql, (err, result) => {
            if (err) {
                console.error(err);
                response.sendStatus(201);
            } else {
                let data = result;
                response.json(data);
            }
        });
        
    } catch (error) {
        console.error(error);
        sendStatus(500);
    }
}

function sessionManager(request, response) {
    console.log(request.session);
}

function logOut(request, response) {
    request.session.destroy((error) =>{
        if (error) {
            console.log("Error destroying session on server.");
            console.error(error);
            response.status(500).send("Error logging out.")
        } else {
            
            request.sessionStore.destroy(request.sessionID, (error)=>{
                if (error) {
                    console.log("No se ha cerrado correctamente la sesión");
                } else {
                    console.log("Se ha cerrado la sesión correctamente");
                    response.clearCookie('cookie_session').status(200).json({ success: true });
                }
            })
        }
    });
}

export {
    singUpUser,
    logingUserControlerFirstEntry,
    logingUserControler,
    getUsersControler,
    getInterestControler,
    sendMessageControler,
    getUserMessagesControler,
    sessionManager,
    logOut,
};