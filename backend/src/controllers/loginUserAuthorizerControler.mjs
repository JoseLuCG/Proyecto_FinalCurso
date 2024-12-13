import jwt from "jsonwebtoken";
import { mySqlConn } from "../connection/connection.mjs";

function callbackError (req, res, error) {
    console.error(error);
    res.status(500).json({ message: "Error loging user into database." });
}

function ifResult(req, res, result) {
    let userData = result[0];
    if (userData) {
        const token = jwt.sign(
            { dataUser : userData },
            process.env.SECRET,
            {expiresIn: '5m'});
        res.status(200).json({token, userData});
    } else {
        res.sendStatus(401).json({ message: "Error. Authorization is required." });
    }
}

function logingUserAuthorizerControler(req, res) {
    try {
        const {userData,password} = req.body;
        const sqlQuery = `
        SELECT * FROM users
            WHERE password = "${password}" 
            AND (nameProfile = "${userData}" 
            OR email = "${userData}")`
        ;

        mySqlConn.query( sqlQuery,(error, result)=>{
            if (error){
                callbackError(req, res, error);                
            } else {
                ifResult(req, res, result);
            }
        });
    } catch(err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export default logingUserAuthorizerControler;