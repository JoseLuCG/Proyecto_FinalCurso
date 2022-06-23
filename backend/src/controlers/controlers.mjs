import { db } from "../data/database.mjs";
import { defaultCallback, sqlIDReturn } from "../models/defines.mjs";

/**
 * Obtain the object `user` and realize a query with
 * the properties of them. Introduce the object data
 * in the database with your data and create a a new
 * row in the database. Adds the interest too.
 * @param {*} req 
 * @param {*} res 
 */
export function singupControler(req, res) {
    try {
        let userId;
        const {nameProfile,nameUser,password,location,interest,age,description,email} = req.body;
        const sql = `
        INSERT INTO users(nameProfile,nameUser,password,location,age,description,email)
            VALUES("${nameProfile}","${nameUser}","${password}","${location}","${age}","${description}","${email}")
        `;
        db.run(sql, (err)=>{
            if (err) {
                console.error(err);
                res.sendStatus(500);
            } else {
                db.get(sqlIDReturn, (err, data)=>{
                    if (err){
                        console.error(err);
                        res.sendStatus(500);
                    } else if (data){
                        userId = data.id;
                        interest.forEach(
                            element => {
                                const setInterest = `
                                    INSERT INTO interests(description)
                                    VALUES (?)
                                `;
                                db.run(setInterest, element, 
                                    (err) => {
                                        if (err) {
                                            console.error(err);
                                            res.sendStatus(500);
                                        } 
                                    });
                                db.get(sqlIDReturn, (err, data) => {
                                    if (err) {
                                        console.error(err);
                                        res.sendStatus(500);
                                    }
                                    if (data) {
                                        const interestId = data.id;
                                        db.run(
                                            `INSERT INTO user_interests(idInterest,idUser)
                                            VALUES(${interestId},${userId})`,
                                            (err) => {
                                                if (err) {
                                                    console.error(err);
                                                    res.sendStatus(500);
                                                } else {
                                                    if ( ! res.finished ) res.json(userId);
                                                }
                                            }
                                        );

                                    }
                                });
                            }
                        );
                    }
                })
            };
        });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
/**
 * Realize a query at the database obtains all users.
 * @param {*} req 
 * @param {*} res 
 */
export function getUsersControler(req, res){
    try{
        const sql = `SELECT * FROM users`;
        db.all(sql, (err, data)=>{
            if (err){
                console.error(err);
                res.sendStatus(500);
            } else {
                res.json(data);
            }
        })
    }catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}
/**
 * Obtain the user which the password and user information
 * concur.
 * @param {*} req 
 * @param {*} res 
 */
export function loginUSerControler (req, res) {
    try {
        const {userData,password} = req.body;
        db.get(`
            SELECT * FROM users
            WHERE password = "${password}" AND (nameProfile = "${userData}" OR email = "${userData}")`,
            (err,data)=>{
            if (err){
                console.error(err);
                res.sendStatus(201);
            } else {
                res.json(data);
            }
        });
    } catch(err) {
        console.error(err);
        res.sendStatus(500);
    }
}
/**
 * Edit the user data with the new object user
 * and replace it in the database.
 * @param {*} req 
 * @param {*} res 
 */


export function putUserControler (req, res) {
    const {nameProfile,nameUser,password,location,interest,age,description,email,id} = req.body;
    db.run(
        `UPDATE users 
        SET nameProfile = ${nameProfile},
            nameUser = ${nameUser},
        WHERE
            id = ${id}

        `,
        ()=>{

        });
}
