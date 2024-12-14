import { mySqlConn } from "../connection/connection.mjs";

// ! Delete this file when everything is refactored

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
    getInterestControler,
    sessionManager,
};