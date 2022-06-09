import { db } from "../data/database.mjs";
import { defaultCallback, sqlIDReturn } from "../models/defines.mjs";

/**
 * Obtain the object `user` and realize a query with
 * the properties of them. Introduce the object data
 * in the database with your data and create a a new
 * row in the database.
 * @param {*} req 
 * @param {*} res 
 */
export function singupControler(req, res) {
    try {
        let userId;
        const interestsIds = [];
        const {nameProfile,nameUser,password,location,interest,age,description,email} = req.body;
        const sql = `
        INSERT INTO users(nameProfile,nameUser,password,location,age,description,email)
            VALUES("${nameProfile}","${nameUser}","${password}","${location}","${age}","${description}","${email}")
        `;
        db.run(sql, defaultCallback);
        db.get(sqlIDReturn, (err, data)=>{
            if (err){
                console.error(err);
                res.sendStatus(500);
            }
            if(data){
                userId = data.id;
                console.log(userId);
            }
        });
        interest.forEach(
          element =>{ 
                const setInterest = `
                    INSERT INTO interests(description)
                    VALUES("${element}")
                `;
                db.run(setInterest, (err)=>{throw err});
                db.get(sqlIDReturn, (err, data)=>{
                    if (err){
                        console.error(err);
                        res.sendStatus(500);
                    }
                    if(data){
                        interestsIds.push(data.id);
                        console.log(userId);
                        if (interestsIds.length === interest.length) {
                            for (let item of interestsIds){
                                db.run(
                                    `INSERT INTO user_interests(idInterest,idUser,description,nameProfile)
                                    VALUES(${item},${userId},${},${nameProfile})`,
                                    (err)=>{throw err}
                                );
                            }
                        }
                    }
                });
          }
        );
       res.sendStatus(200);
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
