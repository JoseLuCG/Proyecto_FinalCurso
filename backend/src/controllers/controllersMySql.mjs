import { mySqlConn } from "../connection/connection.mjs";

// ! Delete this file when everything is refactored

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
    logingUserControlerFirstEntry,
    getUsersControler,
    getInterestControler,
    sessionManager,
};