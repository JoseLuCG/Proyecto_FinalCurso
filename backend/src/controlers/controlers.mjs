import { db } from "../data/database.mjs";
import { defaultCallback } from "../models/defines.mjs";

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
        const {
            nameProfile,
            nameUser,
            password,
            location,
            interest,
            age,
            description,
            email
        } = req.body;
        const sql = `
        INSERT INTO users(
            nameProfile,
            nameUser,
            password,
            location,
            age,
            description,
            email)
            VALUES(
                "${nameProfile}",
                "${nameUser}",
                "${password}",
                "${location}",
                "${age}",
                "${description}",
                "${email}"
            )

        `;
        db.run(sql, defaultCallback);
        const sql2 = 'select last_insert_rowid() from users'
        db.run(sql2, (err,data)=>{
            if(err){
                throw err;
            }
            if(data){
                interest.map(()=>{
                    //insertar cada dato del for con el id guardado en data
                })

                
            }
        })
        //db.run(`select last_insert_rowid()`);
        /*
        interest.forEach(
          element =>{ 
                const setInterest = `
                    INSERT INTO interests(description)
                    VALUES("${element}")
                `;
                db.run
                console.log(element, setInterest)
          }
        );
        */
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
